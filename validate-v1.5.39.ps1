$ErrorActionPreference="Stop"


Write-Host "================================================"
Write-Host "MELKISM v1.5.39 - Cognitive Self-Evaluation Advanced Integration Runtime Validation"
Write-Host "================================================"


$projectRoot="C:\Projects\melkism"


$basePath=
"lib/content/intelligence/cognitive-self-evaluation-advanced-integration"


$runtimePath=
"$basePath/runtime/autonomous.cognitive.self.evaluation.advanced.integration.runtime.ts"


$contractPath=
"$basePath/contracts/autonomous.cognitive.self.evaluation.advanced.integration.contract.ts"


$indexPath=
"$basePath/index.ts"


$smokeFile=
"temp-self-evaluation-validation.ts"



try {


Set-Location $projectRoot



Write-Host "[1/12] Verify project"



if(!(Test-Path "package.json"))
{
throw "package.json not found"
}


if(!(Test-Path "tsconfig.json"))
{
throw "tsconfig.json not found"
}



Write-Host "[2/12] Verify v1.5.39 foundation"



foreach($file in @(
$runtimePath,
$contractPath,
$indexPath
))
{

if(!(Test-Path $file))
{
throw "$file missing"
}

}



Write-Host "[3/12] Verify v1.5.38 dependency"



$dependency=
"lib/content/intelligence/cognitive-self-reflection-advanced-integration/runtime/autonomous.cognitive.self.reflection.advanced.integration.runtime.ts"



if(!(Test-Path $dependency))
{
throw "v1.5.38 Self-Reflection dependency missing"
}



Write-Host "[4/12] Create runtime smoke test"



@'

import {

AutonomousCognitiveSelfEvaluationAdvancedIntegrationRuntime

}

from "./lib/content/intelligence/cognitive-self-evaluation-advanced-integration";



const runtime =
new AutonomousCognitiveSelfEvaluationAdvancedIntegrationRuntime();



const id =
"self-evaluation-advanced-integration-test";



const created = runtime.create({

id,


cognitiveSelfReflectionAdvancedIntegrationId:
"cognitive-self-reflection-advanced-integration-001",


cognitiveSelfEvaluationAdvancedIntegrationId:
id,



selfEvaluations:[

{
evaluation:"integrated-self-evaluation",
description:"structured cognitive evaluation",
confidence:0.99
},

{
evaluation:"capability-evaluation",
description:"capability quality evaluation",
confidence:0.98
},

{
evaluation:"evolution-evaluation",
description:"growth evaluation",
confidence:0.97
}

],



evaluationAcquisitions:[

{
acquisition:"reflection-derived-evaluation",
value:0.99
},

{
acquisition:"representation-derived-evaluation",
value:0.98
},

{
acquisition:"experience-derived-evaluation",
value:0.97
}

],



evaluationConstructions:[

{
construction:"evaluation-framework",
score:0.99
},

{
construction:"quality-framework",
score:0.98
},

{
construction:"improvement-framework",
score:0.97
}

],



evaluationAnalyses:[

{
analysis:"self-analysis",
score:0.99
},

{
analysis:"performance-analysis",
score:0.98
},

{
analysis:"evolution-analysis",
score:0.97
}

],



evaluationIntegrations:[

{
integration:"reflection-integration",
score:0.99
},

{
integration:"representation-integration",
score:0.98
},

{
integration:"knowledge-integration",
score:0.97
}

],



evaluationResults:[

{
result:"evaluation-result",
score:0.99
},

{
result:"quality-result",
score:0.98
},

{
result:"improvement-result",
score:0.97
}

],



evaluationInsights:[

{
insight:"evaluation-enables-correction",
value:0.99
},

{
insight:"evaluation-enables-improvement",
value:0.98
},

{
insight:"evaluation-enables-evolution",
value:0.97
}

],



capabilityEvaluations:[

{
capability:"reasoning",
score:0.99
},

{
capability:"learning",
score:0.98
},

{
capability:"adaptation",
score:0.97
}

],



knowledgeEvaluations:[

{
knowledge:"self-knowledge",
score:0.99
},

{
knowledge:"domain-knowledge",
score:0.98
},

{
knowledge:"experience-knowledge",
score:0.97
}

],



experienceEvaluations:[

{
experience:"runtime",
score:0.99
},

{
experience:"interaction",
score:0.98
},

{
experience:"historical",
score:0.97
}

],



reasoningEvaluations:[

{
reasoning:"logical",
score:0.99
},

{
reasoning:"analytical",
score:0.98
},

{
reasoning:"creative",
score:0.97
}

],



decisionEvaluations:[

{
decision:"optimization",
score:0.99
},

{
decision:"adaptation",
score:0.98
},

{
decision:"quality",
score:0.97
}

],



behaviorEvaluations:[

{
behavior:"adaptive",
score:0.99
},

{
behavior:"learning",
score:0.98
},

{
behavior:"optimized",
score:0.97
}

],



adaptationEvaluations:[

{
adaptation:"environment",
score:0.99
},

{
adaptation:"knowledge",
score:0.98
},

{
adaptation:"behavior",
score:0.97
}

],



evaluationVerifications:[

{
verification:"evaluation-integrity",
score:0.99
},

{
verification:"runtime-integrity",
score:0.98
},

{
verification:"dependency-integrity",
score:0.97
}

],



evaluationMetrics:[

{
metric:"evaluation-depth",
value:0.99
},

{
metric:"evaluation-quality",
value:0.98
},

{
metric:"evaluation-growth",
value:0.97
}

],



evaluationEvolutionRecords:[

{
event:"evaluation-growth",
growth:0.98
},

{
event:"evaluation-evolution",
growth:0.97
},

{
event:"evaluation-improvement",
growth:0.96
}

],



evaluationContext:{

domain:"autonomous-intelligence",

operation:"self-evaluation",

mode:"runtime-validation"

},



evaluationState:"completed",

evaluationVersion:1,

confidence:0.99,

status:"completed",

createdAt:new Date()

});



if(!created)
{
throw new Error("create failed");
}



const checks=[

runtime.evaluate(id),

runtime.analyzeEvaluation(id),

runtime.integrateEvaluation(id),

runtime.generateInsights(id),

runtime.evaluateCapabilities(id),

runtime.evaluateKnowledge(id),

runtime.evaluateExperience(id),

runtime.evaluateReasoning(id),

runtime.evaluateDecision(id),

runtime.evaluateBehavior(id),

runtime.evaluateAdaptation(id),

runtime.verifyEvaluation(id),

runtime.trackEvolution(id)

];



checks.forEach(item=>{

if(!item || item.length!==3)
{
throw new Error("API validation failed");
}

});



const resolved=runtime.resolve(id);



if(!resolved)
{
throw new Error("resolve failed");
}



if(
resolved.cognitiveSelfReflectionAdvancedIntegrationId
!=="cognitive-self-reflection-advanced-integration-001"
)
{
throw new Error("dependency link failed");
}



if(resolved.evaluationState!=="completed")
{
throw new Error("state validation failed");
}



if(resolved.confidence!==0.99)
{
throw new Error("confidence validation failed");
}



if(runtime.list().length!==1)
{
throw new Error("list validation failed");
}



console.log(
"SELF-EVALUATION ADVANCED INTEGRATION RUNTIME VALIDATION PASSED"
);

'@ |
Set-Content $smokeFile -Encoding UTF8



Write-Host "[5/12] TypeScript validation"


npx tsc --noEmit


if($LASTEXITCODE -ne 0)
{
throw "TypeScript validation failed"
}



Write-Host "[6/12] Execute runtime validation"


npx tsx $smokeFile


if($LASTEXITCODE -ne 0)
{
throw "Runtime validation failed"
}



Write-Host "[7/12] Remove temporary file"


Remove-Item $smokeFile -Force



Write-Host "[8/12] Final TypeScript validation"


npx tsc --noEmit



Write-Host "[9/12] Verify module structure"



Get-ChildItem $basePath -Recurse |
Select FullName



Write-Host "[10/12] Dependency validation PASSED"

Write-Host "[11/12] Runtime API validation PASSED"

Write-Host "[12/12] COMPLETE"



Write-Host "================================================"

Write-Host "MELKISM v1.5.39 Cognitive Self-Evaluation Advanced Integration Runtime Validation PASSED"

Write-Host "================================================"


}


catch {


if(Test-Path $smokeFile)
{
Remove-Item $smokeFile -Force
}


Write-Host "================================================"

Write-Host "VALIDATION FAILED"

Write-Host $_.Exception.Message

Write-Host "================================================"


exit 1

}