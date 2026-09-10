/**
 * MELKISM Provider Circuit-Breaker Contract
 *
 * v0.7.2
 */

export type ProviderCircuitState =
  | 'CLOSED'
  | 'OPEN'
  | 'HALF_OPEN';


export type ProviderCircuitBreakerPolicy = {

  failureThreshold:
    number;


  cooldownMs:
    number;

};


export type ProviderCircuitStatus = {

  provider:
    string;


  state:
    ProviderCircuitState;


  failures:
    number;


  openedAt:
    number | null;

};


export interface ProviderCircuitBreakerContract {

  allow(
    provider:
      string
  ):
    boolean;


  recordSuccess(
    provider:
      string
  ):
    void;


  recordFailure(
    provider:
      string
  ):
    void;


  getStatus(
    provider:
      string
  ):
    ProviderCircuitStatus;

}
