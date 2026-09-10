/**
 * MELKISM Provider Composition
 *
 * v0.6.0
 *
 * Provider-agnostic registry and selection composition.
 */

import type {
  AINLPProviderContract,
} from '../contracts';

import type {
  ProviderSelectionContract,
  ProviderSelectionRequest,
} from './provider.selection.contract';


export class ProviderComposition
  implements ProviderSelectionContract {

  private readonly providers:
    Map<
      string,
      AINLPProviderContract
    >;


  constructor(
    providers:
      ReadonlyMap<
        string,
        AINLPProviderContract
      >
  ) {

    this.providers =
      new Map(
        providers
      );
  }


  select(
    request:
      ProviderSelectionRequest
  ):
    AINLPProviderContract {

    const provider =
      this.providers.get(
        request.provider
      );


    if (!provider) {

      throw new Error(
        `AI/NLP provider not registered: ${request.provider}`
      );
    }


    return provider;
  }


  has(
    provider:
      string
  ):
    boolean {

    return this.providers.has(
      provider
    );
  }


  list():
    readonly string[] {

    return Array.from(
      this.providers.keys()
    );
  }

}
