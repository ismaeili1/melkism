export class MELKISMIntelligenceAuditLayer {

    record(input: any) {

        return {
            melkismGovernance: true,
            data: input
        }

    }

}
