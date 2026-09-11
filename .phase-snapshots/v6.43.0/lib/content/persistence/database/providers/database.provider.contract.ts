/**
 * MELKISM Database Provider Contract
 *
 * v0.2.6
 *
 * Defines the lifecycle boundary for database providers.
 *
 * This contract defines capabilities only.
 * Concrete storage technologies remain outside this layer.
 */


export type DatabaseProviderStatus =
  | "initialized"
  | "connected"
  | "disconnected"
  | "failed";


export type DatabaseProviderMetadata = {
  name: string;
  version: string;
};


export interface DatabaseProviderContract {

  connect(): Promise<void>;

  disconnect(): Promise<void>;

  healthCheck(): Promise<boolean>;

  status(): DatabaseProviderStatus;

  metadata(): DatabaseProviderMetadata;
}
