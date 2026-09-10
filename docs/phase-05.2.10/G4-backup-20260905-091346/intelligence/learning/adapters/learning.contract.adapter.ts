import type {
  LearningExperience,
  LearningFeedback,
} from "../learning.types";


import type {
  LearningExperience as LearningContractExperience,
  LearningFeedback as LearningContractFeedback,
} from "@/lib/content/intelligence/contracts/learning.contracts";



export function toLearningContractExperience(
  input: LearningExperience
): LearningContractExperience {

  return {
    id: input.id,
    agentId: input.agentId ?? "unknown",
    context: "",
    createdAt: input.createdAt,
  };

}



export function toLearningContractFeedback(
  input: LearningFeedback
): LearningContractFeedback {

  return {
    id: input.id,
    experienceId: input.experienceId ?? "",
    signal: "",
    score: 0,
    createdAt: input.createdAt,
  };

}



export function fromLearningContractExperience(
  input: LearningContractExperience
): LearningExperience {

  return {
    id: input.id,
    type: "interaction",
    input: input.context,
    output: "",
    success: false,
    agentId: input.agentId ?? "unknown",
    createdAt: input.createdAt,
  };

}






