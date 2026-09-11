/**
 * MELKISM v6.42.0
 * Persistence registry
 */

export interface PersistenceRegistryEntry {

    name:
        string;

    enabled:
        boolean;

}


export const persistenceRegistry:
PersistenceRegistryEntry[] =
[
    {
        name:
            "knowledge-graph",
        enabled:
            true
    }
];

