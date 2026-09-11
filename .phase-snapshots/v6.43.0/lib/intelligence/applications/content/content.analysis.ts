import type {
    ContentIntelligenceResult,
    ContentIntelligenceSignal
} from "./content.types";

export interface ContentAnalysisInput {
    contentId: string;
    text: string;
}

export interface ContentAnalysisSummary {
    contentId: string;
    characterCount: number;
    wordCount: number;
    hasText: boolean;
    qualityScore: number;
    signals: ContentIntelligenceSignal[];
}

export class ContentAnalysisEngine {

    analyze(
        input: ContentAnalysisInput
    ): ContentAnalysisSummary {

        const text = input.text.trim();

        const wordCount =
            text.length === 0
                ? 0
                : text.split(/\s+/).length;

        const characterCount = text.length;

        const hasText = text.length > 0;

        const qualityScore =
            !hasText
                ? 0
                : Math.min(
                    100,
                    Math.round(
                        Math.min(wordCount, 100)
                    )
                );

        const signal: ContentIntelligenceSignal = {
            id: crypto.randomUUID(),
            contentId: input.contentId,
            type: "quality",
            score: qualityScore,
            status: "analyzed",
            metadata: {
                characterCount,
                wordCount,
                hasText
            },
            createdAt: new Date()
        };

        return {
            contentId: input.contentId,
            characterCount,
            wordCount,
            hasText,
            qualityScore,
            signals: [signal]
        };
    }

    toIntelligenceResult(
        input: ContentAnalysisInput
    ): ContentIntelligenceResult {

        const analysis = this.analyze(input);

        return {
            contentId: analysis.contentId,
            signals: analysis.signals,
            qualityScore: analysis.qualityScore,
            createdAt: new Date()
        };
    }
}
