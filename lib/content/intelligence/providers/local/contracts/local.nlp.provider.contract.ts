/**
 * MELKISM Local NLP Provider Contract
 *
 * v0.6.1
 *
 * Defines the adapter-specific boundary for the
 * deterministic local NLP provider.
 *
 * This contract remains independent from:
 *
 * - OpenAI SDK
 * - external network services
 * - cloud APIs
 * - model-specific SDKs
 */

import type {
  AINLPProviderContract,
} from '../../contracts';


export interface LocalNLPProviderContract
  extends AINLPProviderContract {

  readonly providerName:
    string;


  readonly deterministic:
    true;

}
