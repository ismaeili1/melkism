export class MELKISMApiAuthentication {

    authenticate(input: any) {

        return {
            melkismApiSecurity: true,
            data: input
        }

    }

}
