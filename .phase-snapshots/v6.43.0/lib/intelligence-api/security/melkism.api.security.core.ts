export class MELKISMApiSecurityCore {

    protect(input: any) {

        return {
            melkismApiSecurity: true,
            data: input
        }

    }

}
