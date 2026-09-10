export class MELKISMIntelligenceSafetyGuard {

    check(input: any) {

        return {
            melkismGovernance: true,
            data: input
        }

    }

}
