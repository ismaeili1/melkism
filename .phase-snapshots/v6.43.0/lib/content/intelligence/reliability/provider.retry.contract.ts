/**
 * MELKISM Provider Retry Contract
 *
 * v0.7.2
 */

export type ProviderRetryPolicy = {

  maxAttempts:
    number;


  backoffMs:
    number;


  maxBackoffMs:
    number;

};


export type ProviderRetryRequest = {

  provider:
    string;


  operation:
    string;


  attempt:
    number;


  error:
    unknown;

};


export type ProviderRetryDecision = {

  retry:
    boolean;


  nextAttempt:
    number;


  delayMs:
    number;

};


export interface ProviderRetryContract {

  decide(
    request:
      ProviderRetryRequest,

    policy:
      ProviderRetryPolicy
  ):
    ProviderRetryDecision;

}
