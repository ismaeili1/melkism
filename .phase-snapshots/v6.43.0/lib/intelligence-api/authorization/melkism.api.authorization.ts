export class MELKISMApiAuthorization {

    authorize(input: any) {

        return {
            melkismApiSecurity: true,
            data: input
        }

    }

}
