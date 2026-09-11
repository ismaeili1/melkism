/**
 * MELKISM Deterministic Local NLP Provider
 *
 * v0.6.1
 *
 * Deterministic, dependency-free local NLP provider.
 */

import type {
  AINLPProviderCapability,
  AINLPProviderRequest,
  AINLPProviderResponse,
} from '../../contracts';

import type {
  LocalNLPProviderContract,
} from '../contracts';

import {
  EntityType,
} from '../../../entities';


const SUPPORTED_CAPABILITIES:
  readonly AINLPProviderCapability[] = [

  'ENTITY_EXTRACTION',

  'SEMANTIC_EXTRACTION',

  'CLASSIFICATION',

];


const SUPPORTED_LANGUAGES = [
  'fa',
  'en',
  'ar',
  'tr',
] as const;


const ENTITY_PATTERNS: ReadonlyArray<{
  readonly pattern:
    RegExp;

  readonly type:
    EntityType;

}> = [

  {
    pattern:
      /\bMELKISM\b/gi,

    type:
      EntityType.Organization,
  },

  {
    pattern:
      /\breal estate\b/gi,

    type:
      EntityType.Concept,
  },

  {
    pattern:
      /\bproperty\b/gi,

    type:
      EntityType.Property,
  },

  {
    pattern:
      /\bproject\b/gi,

    type:
      EntityType.Project,
  },

];


function uniqueStrings(
  values:
    readonly string[]
):
  readonly string[] {

  return Array.from(
    new Set(
      values
    )
  );

}


function normalizeText(
  text:
    string
):
  string {

  return text
    .trim()
    .replace(
      /\s+/g,
      ' '
    );

}


function extractEntityNames(
  text:
    string
):
  readonly string[] {

  const names: string[] = [];


  for (
    const entry
    of ENTITY_PATTERNS
  ) {

    const matches =
      text.match(
        entry.pattern
      );


    if (!matches) {
      continue;
    }


    names.push(
      ...matches
    );
  }


  return uniqueStrings(
    names
  );

}


function classifyText(
  text:
    string
):
  {
    readonly label:
      string;

    readonly confidence:
      number;
  } {

  const normalized =
    text.toLowerCase();


  if (
    normalized.includes(
      'real estate'
    ) ||
    normalized.includes(
      'property'
    ) ||
    normalized.includes(
      'project'
    )
  ) {

    return {

      label:
        'REAL_ESTATE',

      confidence:
        0.95,

    };
  }


  if (
    normalized.includes(
      'architecture'
    )
  ) {

    return {

      label:
        'ARCHITECTURE',

      confidence:
        0.90,

    };
  }


  return {

    label:
      'GENERAL',

    confidence:
      0.50,

  };

}


function extractSemantic(
  text:
    string
):
  {
    readonly topics:
      readonly string[];

    readonly concepts:
      readonly string[];

  } {

  const normalized =
    text.toLowerCase();


  const topics: string[] = [];

  const concepts: string[] = [];


  if (
    normalized.includes(
      'real estate'
    )
  ) {

    topics.push(
      'real-estate'
    );

    concepts.push(
      'real estate'
    );
  }


  if (
    normalized.includes(
      'property'
    )
  ) {

    topics.push(
      'property'
    );

    concepts.push(
      'property'
    );
  }


  if (
    normalized.includes(
      'project'
    )
  ) {

    topics.push(
      'project'
    );

    concepts.push(
      'project'
    );
  }


  if (
    normalized.includes(
      'architecture'
    )
  ) {

    topics.push(
      'architecture'
    );

    concepts.push(
      'architecture'
    );
  }


  return {

    topics:
      uniqueStrings(
        topics
      ),

    concepts:
      uniqueStrings(
        concepts
      ),

  };

}


export class DeterministicLocalNLPProvider
  implements LocalNLPProviderContract {

  readonly providerName =
    'local-deterministic-nlp';


  readonly deterministic =
    true as const;


  async getCapabilities() {

    return {

      provider:
        this.providerName,

      capabilities:
        SUPPORTED_CAPABILITIES,

      languages:
        SUPPORTED_LANGUAGES,

    };

  }


  async execute(
    request:
      AINLPProviderRequest
  ):
    Promise<AINLPProviderResponse> {

    const text =
      normalizeText(
        request.text
      );


    if (!text) {
      throw new Error(
        'NLP provider text cannot be empty.'
      );
    }


    if (
      request.operation ===
      'ENTITY_EXTRACTION'
    ) {

      const entityNames =
        extractEntityNames(
          text
        );


      return {

        provider:
          this.providerName,

        model:
          'deterministic-local-rules',

        operation:
          request.operation,

        contentId:
          request.contentId,

        result: {

          entities:
            entityNames.map(
              (
                name,
                index
              ) => ({

                id:
                  `local-entity-${index + 1}`,

                type:
                  this.resolveEntityType(
                    name
                  ),

                name,

              })
            ),

        },

        confidence:
          entityNames.length >
          0
            ? 1
            : 0,

      };

    }


    if (
      request.operation ===
      'SEMANTIC_EXTRACTION'
    ) {

      const semantic =
        extractSemantic(
          text
        );


      return {

        provider:
          this.providerName,

        model:
          'deterministic-local-rules',

        operation:
          request.operation,

        contentId:
          request.contentId,

        result:
          semantic,

        confidence:
          semantic.topics.length >
          0
            ? 1
            : 0.5,

      };

    }


    const classification =
      classifyText(
        text
      );


    return {

      provider:
        this.providerName,

      model:
        'deterministic-local-rules',

      operation:
        request.operation,

      contentId:
        request.contentId,

      result:
        classification,

      confidence:
        classification.confidence,

    };

  }


  private resolveEntityType(
    name:
      string
  ):
    EntityType {

    const normalized =
      name.toLowerCase();


    if (
      normalized ===
      'melkism'
    ) {
      return EntityType.Organization;
    }


    if (
      normalized ===
      'real estate'
    ) {
      return EntityType.Concept;
    }


    if (
      normalized ===
      'property'
    ) {
      return EntityType.Property;
    }


    return EntityType.Project;

  }

}
