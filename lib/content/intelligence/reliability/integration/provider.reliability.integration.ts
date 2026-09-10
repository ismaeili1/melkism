/**
 * MELKISM Provider Reliability Integration
 *
 * v0.7.2
 *
 * Reliability-aware provider execution boundary.
 *
 * Responsibilities:
 *
 * - circuit admission
 * - retry decisions
 * - failure recording
 * - success recording
 *
 * This layer does not select providers.
 * Provider selection remains the responsibility of
 * orchestration policy and fallback layers.
 */

import type {
  AINLPProviderContract,
  AINLPProviderRequest,
  AINLPProviderResponse,
} from '../../providers';

import type {
  ProviderRetryPolicy,
} from '../provider.retry.contract';

import type {
  ProviderReliabilityComposition,
} from '../composition';


export type ProviderReliabilityExecutionRequest = {

  provider:
    string;


  request:
    AINLPProviderRequest;


  retryPolicy?:
    ProviderRetryPolicy;

};


export class ProviderReliabilityIntegration {

  constructor(
    private readonly composition:
      ProviderReliabilityComposition
  ) {}


  async execute(
    provider:
      AINLPProviderContract,

    execution:
      ProviderReliabilityExecutionRequest
  ):
    Promise<AINLPProviderResponse> {

    const providerName =
      execution.provider.trim();


    if (!providerName) {
      throw new Error(
        'Provider name cannot be empty.'
      );
    }


    let attempt =
      1;


    while (true) {

      const allowed =
        this.composition.circuitBreaker.allow(
          providerName
        );


      if (!allowed) {

        throw new Error(
          `Provider circuit is OPEN: ${providerName}`
        );

      }


      try {

        const response =
          await provider.execute(
            execution.request
          );


        this.composition.circuitBreaker
          .recordSuccess(
            providerName
          );


        return response;

      }
      catch (error) {

        this.composition.circuitBreaker
          .recordFailure(
            providerName
          );


        const decision =
          this.composition.retry.decide(

            {

              provider:
                providerName,

              operation:
                execution.request.operation,

              attempt,

              error,

            },

            execution.retryPolicy ??
              {
                maxAttempts:
                  3,

                backoffMs:
                  250,

                maxBackoffMs:
                  2000,
              }

          );


        if (!decision.retry) {
          throw error;
        }


        attempt =
          decision.nextAttempt;

      }

    }

  }

}
