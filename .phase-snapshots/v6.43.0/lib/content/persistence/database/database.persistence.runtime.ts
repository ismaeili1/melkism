/**
 * MELKISM Database Persistence Runtime
 *
 * v0.2.6
 *
 * Runtime lifecycle boundary for database persistence.
 *
 * This layer coordinates provider lifecycle only.
 *
 * No database technology is introduced here.
 */

import {
  DatabaseProviderRuntime,
} from "./providers";


export class DatabasePersistenceRuntime {

  constructor(
    private readonly provider:
      DatabaseProviderRuntime,
  ) {}


  async initialize(): Promise<void> {
    await this.provider.connect();
  }


  async shutdown(): Promise<void> {
    await this.provider.disconnect();
  }


  async healthCheck(): Promise<boolean> {
    return this.provider.healthCheck();
  }


  status() {
    return this.provider.status();
  }


  metadata() {
    return this.provider.metadata();
  }
}
