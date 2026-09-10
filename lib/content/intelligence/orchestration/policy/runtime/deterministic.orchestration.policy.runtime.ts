/**
 * MELKISM Deterministic Orchestration Policy Runtime
 *
 * v0.7.1
 */

import type {
  AINLPProviderCapability,
} from '../../../providers';

import type {
  IntelligenceProviderCandidate,
  IntelligenceOrchestrationPolicyRequest,
  IntelligenceOrchestrationPolicyDecision,
  IntelligenceOrchestrationPolicyContract,
} from '../intelligence.orchestration.policy.contract';


function normalizeCandidates(
  candidates:
    readonly IntelligenceProviderCandidate[]
):
  readonly IntelligenceProviderCandidate[] {

  const unique =
    new Map<
      string,
      IntelligenceProviderCandidate
    >();


  for (
    const candidate
    of candidates
  ) {

    const provider =
      candidate.provider.trim();


    if (!provider) {
      continue;
    }


    const priority =
      Number.isFinite(
        candidate.priority
      )
        ? candidate.priority
        : Number.MAX_SAFE_INTEGER;


    const existing =
      unique.get(
        provider
      );


    if (
      !existing ||
      priority <
      existing.priority
    ) {

      unique.set(
        provider,
        {
          provider,
          priority,
        }
      );
    }
  }


  return Array.from(
    unique.values()
  ).sort(
    (
      left,
      right
    ) => {

      if (
        left.priority !==
        right.priority
      ) {

        return (
          left.priority -
          right.priority
        );
      }


      return left.provider.localeCompare(
        right.provider
      );
    }
  );

}


export class DeterministicOrchestrationPolicyRuntime
  implements IntelligenceOrchestrationPolicyContract {

  select(
    request:
      IntelligenceOrchestrationPolicyRequest
  ):
    IntelligenceOrchestrationPolicyDecision {

    const candidates =
      normalizeCandidates(
        request.candidates
      );


    if (
      candidates.length ===
      0
    ) {

      throw new Error(
        `No provider candidates available for capability "${request.capability}".`
      );
    }


    return {

      capability:
        request.capability,

      provider:
        candidates[0].provider,

      fallback:
        false,

      candidates,

    };

  }

}


export {
  normalizeCandidates,
};
