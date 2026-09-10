/**
 * MELKISM Deterministic Provider Retry Runtime
 *
 * v0.7.2
 *
 * Calculates retry decisions without performing delays.
 *
 * The runtime is:
 *
 * - deterministic
 * - provider-agnostic
 * - side-effect free
 * - network-independent
 */

import type {
  ProviderRetryContract,
  ProviderRetryDecision,
  ProviderRetryPolicy,
  ProviderRetryRequest,
} from '../provider.retry.contract';


const DEFAULT_POLICY:
  ProviderRetryPolicy = {

  maxAttempts:
    3,

  backoffMs:
    250,

  maxBackoffMs:
    2000,

};


function normalizePolicy(
  policy:
    ProviderRetryPolicy
):
  ProviderRetryPolicy {

  const maxAttempts =
    Number.isFinite(
      policy.maxAttempts
    )
      ? Math.max(
          1,
          Math.floor(
            policy.maxAttempts
          )
        )
      : 1;


  const backoffMs =
    Number.isFinite(
      policy.backoffMs
    )
      ? Math.max(
          0,
          policy.backoffMs
        )
      : 0;


  const maxBackoffMs =
    Number.isFinite(
      policy.maxBackoffMs
    )
      ? Math.max(
          backoffMs,
          policy.maxBackoffMs
        )
      : backoffMs;


  return {

    maxAttempts,

    backoffMs,

    maxBackoffMs,

  };

}


function calculateDelay(
  attempt:
    number,

  policy:
    ProviderRetryPolicy
):
  number {

  const safeAttempt =
    Math.max(
      1,
      Math.floor(
        attempt
      )
    );


  const exponentialDelay =
    policy.backoffMs *
    (2 ** (
      safeAttempt - 1
    ));


  return Math.min(
    exponentialDelay,
    policy.maxBackoffMs
  );

}


export class DeterministicProviderRetryRuntime
  implements ProviderRetryContract {

  decide(
    request:
      ProviderRetryRequest,

    policy:
      ProviderRetryPolicy =
        DEFAULT_POLICY
  ):
    ProviderRetryDecision {

    const normalizedPolicy =
      normalizePolicy(
        policy
      );


    const attempt =
      Number.isFinite(
        request.attempt
      )
        ? Math.max(
            1,
            Math.floor(
              request.attempt
            )
          )
        : 1;


    const retry =
      attempt <
      normalizedPolicy.maxAttempts;


    const nextAttempt =
      retry
        ? attempt + 1
        : attempt;


    const delayMs =
      retry
        ? calculateDelay(
            attempt,
            normalizedPolicy
          )
        : 0;


    return {

      retry,

      nextAttempt,

      delayMs,

    };

  }

}


export {
  DEFAULT_POLICY,
  normalizePolicy,
  calculateDelay,
};
