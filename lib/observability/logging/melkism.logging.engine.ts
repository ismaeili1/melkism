export class MELKISMLoggingEngine {

    log(input: any) {

        return {
            melkismObservability: true,
            data: input
        }

    }

}
