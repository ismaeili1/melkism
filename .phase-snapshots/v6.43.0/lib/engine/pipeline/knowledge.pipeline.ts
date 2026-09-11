import type {
KnowledgeItem
} from "../knowledge";


import type {
ProcessingResult
} from "../processing";


export interface KnowledgePipeline {

process(
item:KnowledgeItem
):
Promise<ProcessingResult>;

}

