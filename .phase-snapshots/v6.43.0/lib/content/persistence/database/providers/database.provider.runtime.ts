/**
 * MELKISM Database Provider Runtime
 *
 * v0.2.6
 *
 * Runtime lifecycle wrapper around database providers.
 *
 * This layer does not:
 * - create database connections
 * - import database libraries
 * - execute queries
 *
 * It only manages provider lifecycle.
 */


import type {
  DatabaseProviderContract,
  DatabaseProviderStatus,
} from "./database.provider.contract";


export class DatabaseProviderRuntime {

  constructor(
    private readonly provider:
      DatabaseProviderContract,
  ) {}


  async connect(): Promise<void> {
    await this.provider.connect();
  }


  async disconnect(): Promise<void> {
    await this.provider.disconnect();
  }


  async healthCheck(): Promise<boolean> {
    return this.provider.healthCheck();
  }


  status(): DatabaseProviderStatus {
    return this.provider.status();
  }


  metadata() {
    return this.provider.metadata();
  }
}
