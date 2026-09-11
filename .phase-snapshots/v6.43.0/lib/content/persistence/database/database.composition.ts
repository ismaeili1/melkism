/**
 * MELKISM Database Persistence Composition
 *
 * v0.2.6
 *
 * Creates database persistence runtime dependencies.
 *
 * This layer selects runtime objects only.
 *
 * No database technology is selected here.
 */

import {
  DatabasePersistenceRuntime,
} from "./database.persistence.runtime";

import {
  DatabaseProviderRuntime,
} from "./providers";


import type {
  DatabaseProviderContract,
} from "./providers";


export function createDatabasePersistenceRuntime(
  provider:
  DatabaseProviderContract,
): DatabasePersistenceRuntime {


 const providerRuntime =
 new DatabaseProviderRuntime(
   provider
 );


 return new DatabasePersistenceRuntime(
   providerRuntime
 );


}
