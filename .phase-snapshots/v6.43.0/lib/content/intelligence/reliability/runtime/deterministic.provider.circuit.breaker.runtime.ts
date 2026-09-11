/**
 * MELKISM Deterministic Provider Circuit-Breaker Runtime
 *
 * v0.7.2
 *
 * Provider-agnostic circuit state machine.
 *
 * Runtime characteristics:
 *
 * - deterministic
 * - in-memory
 * - synchronous state decisions
 * - no network access
 * - no provider SDK
 */

import type {
  ProviderCircuitBreakerContract,
  ProviderCircuitBreakerPolicy,
  ProviderCircuitState,
  ProviderCircuitStatus,
} from '../provider.circuit.breaker.contract';


const DEFAULT_POLICY:
  ProviderCircuitBreakerPolicy = {

  failureThreshold:
    3,

  cooldownMs:
    30_000,

};


type ProviderCircuitRecord = {

  state:
    ProviderCircuitState;


  failures:
    number;


  openedAt:
    number | null;

};


function normalizePolicy(
  policy:
    ProviderCircuitBreakerPolicy
):
  ProviderCircuitBreakerPolicy {

  const failureThreshold =
    Number.isFinite(
      policy.failureThreshold
    )
      ? Math.max(
          1,
          Math.floor(
            policy.failureThreshold
          )
        )
      : 1;


  const cooldownMs =
    Number.isFinite(
      policy.cooldownMs
    )
      ? Math.max(
          0,
          policy.cooldownMs
        )
      : 0;


  return {

    failureThreshold,

    cooldownMs,

  };

}


export class DeterministicProviderCircuitBreakerRuntime
  implements ProviderCircuitBreakerContract {

  private readonly circuits:
    Map<
      string,
      ProviderCircuitRecord
    >;


  private readonly policy:
    ProviderCircuitBreakerPolicy;


  private readonly now:
    () => number;


  constructor(
    policy:
      ProviderCircuitBreakerPolicy =
        DEFAULT_POLICY,

    now:
      () => number =
        () => Date.now()
  ) {

    this.circuits =
      new Map<
        string,
        ProviderCircuitRecord
      >();

    this.policy =
      normalizePolicy(
        policy
      );

    this.now =
      now;
  }


  allow(
    provider:
      string
  ):
    boolean {

    const record =
      this.getOrCreate(
        provider
      );


    if (
      record.state ===
      'CLOSED'
    ) {
      return true;
    }


    if (
      record.state ===
      'OPEN'
    ) {

      const openedAt =
        record.openedAt ??
        this.now();


      if (
        this.now() -
        openedAt >=
        this.policy.cooldownMs
      ) {

        record.state =
          'HALF_OPEN';

        return true;

      }


      return false;

    }


    return true;

  }


  recordSuccess(
    provider:
      string
  ):
    void {

    const record =
      this.getOrCreate(
        provider
      );


    record.state =
      'CLOSED';

    record.failures =
      0;

    record.openedAt =
      null;

  }


  recordFailure(
    provider:
      string
  ):
    void {

    const record =
      this.getOrCreate(
        provider
      );


    if (
      record.state ===
      'HALF_OPEN'
    ) {

      record.state =
        'OPEN';

      record.openedAt =
        this.now();

      record.failures =
        this.policy.failureThreshold;

      return;

    }


    record.failures +=
      1;


    if (
      record.failures >=
      this.policy.failureThreshold
    ) {

      record.state =
        'OPEN';

      record.openedAt =
        this.now();

    }

  }


  getStatus(
    provider:
      string
  ):
    ProviderCircuitStatus {

    const record =
      this.getOrCreate(
        provider
      );


    if (
      record.state ===
      'OPEN'
    ) {

      const openedAt =
        record.openedAt ??
        this.now();


      if (
        this.now() -
        openedAt >=
        this.policy.cooldownMs
      ) {

        record.state =
          'HALF_OPEN';

      }

    }


    return {

      provider:
        provider.trim(),

      state:
        record.state,

      failures:
        record.failures,

      openedAt:
        record.openedAt,

    };

  }


  reset(
    provider:
      string
  ):
    void {

    const normalizedProvider =
      provider.trim();

    this.circuits.set(
      normalizedProvider,
      this.createClosedRecord()
    );

  }


  private getOrCreate(
    provider:
      string
  ):
    ProviderCircuitRecord {

    const normalizedProvider =
      provider.trim();


    if (!normalizedProvider) {
      throw new Error(
        'Provider name cannot be empty.'
      );
    }


    const existing =
      this.circuits.get(
        normalizedProvider
      );


    if (existing) {
      return existing;
    }


    const record =
      this.createClosedRecord();


    this.circuits.set(
      normalizedProvider,
      record
    );


    return record;

  }


  private createClosedRecord():
    ProviderCircuitRecord {

    return {

      state:
        'CLOSED',

      failures:
        0,

      openedAt:
        null,

    };

  }

}


export {
  DEFAULT_POLICY,
  normalizePolicy,
};
