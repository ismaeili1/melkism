
import {
 intelligenceRuntimeRegistry
}
from "./intelligence.runtime.registry";



export async function executeIntelligenceRuntime(
moduleId:string,
input:unknown
){


const runtimeModule =
intelligenceRuntimeRegistry.get(moduleId);



if(!runtimeModule){

throw new Error(
`Runtime runtimeModule not found: ${moduleId}`
);

}



return runtimeModule.execute(input);



}
/**
 * Canonical runtime execution entry point.
 *
 * Preferred:
 *   executeRuntime(moduleId, input)
 *
 * Object form:
 *   executeRuntime({ moduleId, input })
 *
 * Single-module compatibility:
 *   executeRuntime(input)
 */
export async function executeRuntime(
  moduleIdOrRequest:
    string |
    { moduleId: string; input?: unknown } |
    unknown,
  input?: unknown
) {
  if (typeof moduleIdOrRequest === "string") {
    return executeIntelligenceRuntime(
      moduleIdOrRequest,
      input
    );
  }

  if (
    moduleIdOrRequest !== null &&
    typeof moduleIdOrRequest === "object" &&
    "moduleId" in moduleIdOrRequest
  ) {
    const request =
      moduleIdOrRequest as {
        moduleId?: unknown;
        input?: unknown;
      };

    if (typeof request.moduleId === "string") {
      return executeIntelligenceRuntime(
        request.moduleId,
        request.input
      );
    }
  }

  const modules =
    intelligenceRuntimeRegistry.list();

  if (modules.length === 1) {
    return modules[0].execute(
      moduleIdOrRequest
    );
  }

  throw new Error(
    "Runtime moduleId is required when zero or multiple runtime modules are registered."
  );
}