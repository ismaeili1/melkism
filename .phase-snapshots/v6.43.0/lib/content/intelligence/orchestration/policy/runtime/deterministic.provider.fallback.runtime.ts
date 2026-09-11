/**
 * MELKISM Deterministic Provider Fallback Runtime
 *
 * v0.7.1
 */

import type {
  IntelligenceProviderFallbackRequest,
  IntelligenceProviderFallbackDecision,
  IntelligenceProviderFallbackContract,
} from '../intelligence.provider.fallback.contract';


export class DeterministicProviderFallbackRuntime
  implements IntelligenceProviderFallbackContract {

  next(
    request:
      IntelligenceProviderFallbackRequest
  ):
    IntelligenceProviderFallbackDecision | null {

    const attempted =
      new Set(
        request.attemptedProviders.map(
          provider =>
            provider.trim()
        )
      );


    const candidates =
      request.provider.trim();


    if (!candidates) {
      return null;
    }


    if (
      attempted.has(
        candidates
      )
    ) {
      return null;
    }


    return {

      provider:
        candidates,

      fallback:
        request.attemptedProviders.length >
        0,

    };

  }

}
