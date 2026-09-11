export class MELKISMPersistenceTransaction {

    transaction(input: any) {

        return {
            melkismPersistence: true,
            data: input
        }

    }

}
