export class MELKISMHealthCheckEngine {

    check(input: any) {

        return {
            melkismInfrastructure: true,
            data: input
        }

    }

}
