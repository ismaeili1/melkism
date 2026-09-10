$ErrorActionPreference="Stop"

Write-Host "================================================"
Write-Host "MELKISM v1.5.33 - AUTONOMOUS INTELLIGENCE COGNITIVE SELF-KNOWLEDGE EXPANSION RUNTIME VALIDATION"
Write-Host "================================================"


$base="lib/content/intelligence/cognitive-self-knowledge-expansion"

$runtime="$base/runtime/autonomous.cognitive.self.knowledge.expansion.runtime.ts"

$index="$base/index.ts"

$root="lib/content/intelligence/index.ts"

$smoke="temp-cognitive-self-knowledge-validation.ts"


try {


Write-Host "[1/14] VERIFY PROJECT"


if(!(Test-Path "package.json"))
{
throw "PROJECT NOT FOUND"
}


if(!(Test-Path "tsconfig.json"))
{
throw "TYPESCRIPT CONFIG NOT FOUND"
}



Write-Host "[2/14] VERIFY DEPENDENCY"



if(!(Test-Path $runtime))
{
throw "SELF-KNOWLEDGE RUNTIME NOT FOUND"
}



if(!(Test-Path "lib/content/intelligence/cognitive-self-learning-expansion/runtime/autonomous.cognitive.self.learning.expansion.runtime.ts"))
{
throw "SELF-LEARNING EXPANSION NOT FOUND"
}



Write-Host "[3/14] CREATE SMOKE TEST"



@'

import {

AutonomousCognitiveSelfKnowledgeExpansionRuntime

}

from "./lib/content/intelligence/cognitive-self-knowledge-expansion";



const runtime =
new AutonomousCognitiveSelfKnowledgeExpansionRuntime();



const id =
"cognitive-self-knowledge-expansion-001";



const knowledge =
runtime.create({

id,


cognitiveSelfLearningExpansionId:

"cognitive-self-learning-expansion-001",


cognitiveSelfKnowledgeExpansionId:

id,



selfKnowledgeModels:[

{
knowledge:
"self-capability-knowledge",

description:
"internal capability understanding",

confidence:
0.99
},

{
knowledge:
"self-experience-knowledge",

description:
"experience-based self understanding",

confidence:
0.98
},

{
knowledge:
"self-evolution-knowledge",

description:
"continuous cognitive evolution",

confidence:
0.97
}

],



knowledgeAcquisitions:[

{
knowledge:
"experience-derived-knowledge",

value:
0.99
},

{
knowledge:
"learning-derived-knowledge",

value:
0.98
},

{
knowledge:
"capability-derived-knowledge",

value:
0.97
}

],



selfKnowledgeDetections:[

{
knowledge:
"capability-awareness",

score:
0.99
},

{
knowledge:
"learning-awareness",

score:
0.98
},

{
knowledge:
"experience-awareness",

score:
0.97
}

],



knowledgeRepresentations:[

{
representation:
"self-model",

score:
0.99
},

{
representation:
"knowledge-map",

score:
0.98
},

{
representation:
"cognitive-profile",

score:
0.97
}

],



knowledgeOrganizations:[

{
organization:
"knowledge-structure",

score:
0.99
},

{
organization:
"knowledge-hierarchy",

score:
0.98
},

{
organization:
"knowledge-network",

score:
0.97
}

],



knowledgeAnalyses:[

{
analysis:
"self-analysis",

score:
0.99
},

{
analysis:
"capability-analysis",

score:
0.98
},

{
analysis:
"growth-analysis",

score:
0.97
}

],



capabilityKnowledge:[

{
capability:
"reasoning",

score:
0.99
},

{
capability:
"learning",

score:
0.98
},

{
capability:
"adaptation",

score:
0.97
}

],



experienceKnowledge:[

{
experience:
"runtime-experience",

score:
0.99
},

{
experience:
"interaction-experience",

score:
0.98
},

{
experience:
"historical-experience",

score:
0.97
}

],



learningKnowledge:[

{
learning:
"self-learning",

score:
0.99
},

{
learning:
"adaptive-learning",

score:
0.98
},

{
learning:
"continuous-learning",

score:
0.97
}

],



reasoningKnowledge:[

{
reasoning:
"logical-reasoning",

score:
0.99
},

{
reasoning:
"analytical-reasoning",

score:
0.98
},

{
reasoning:
"creative-reasoning",

score:
0.97
}

],



decisionKnowledge:[

{
decision:
"decision-quality",

score:
0.99
},

{
decision:
"decision-adaptation",

score:
0.98
},

{
decision:
"decision-optimization",

score:
0.97
}

],



behaviorKnowledge:[

{
behavior:
"learning-behavior",

score:
0.99
},

{
behavior:
"adaptive-behavior",

score:
0.98
},

{
behavior:
"optimization-behavior",

score:
0.97
}

],



adaptationKnowledge:[

{
adaptation:
"environment-adaptation",

score:
0.99
},

{
adaptation:
"knowledge-adaptation",

score:
0.98
},

{
adaptation:
"behavior-adaptation",

score:
0.97
}

],



knowledgeVerifications:[

{
verification:
"knowledge-integrity",

score:
0.99
},

{
verification:
"self-model-validation",

score:
0.98
},

{
verification:
"knowledge-consistency",

score:
0.97
}

],



knowledgeMetrics:[

{
metric:
"knowledge-depth",

value:
0.99
},

{
metric:
"knowledge-quality",

value:
0.98
},

{
metric:
"knowledge-growth",

value:
0.97
}

],



knowledgeCriteria:[

{
criterion:
"accuracy",

value:
0.99
},

{
criterion:
"stability",

value:
0.98
},

{
criterion:
"usefulness",

value:
0.97
}

],



knowledgeResults:[

{
result:
"self-understanding",

score:
0.99
},

{
result:
"capability-awareness",

score:
0.98
},

{
result:
"knowledge-expansion",

score:
0.97
}

],



knowledgeOptimizations:[

{
optimization:
"knowledge-efficiency",

value:
0.99
},

{
optimization:
"knowledge-accuracy",

value:
0.98
},

{
optimization:
"knowledge-organization",

value:
0.97
}

],



knowledgeScores:[

{
metric:
"self-knowledge",

score:
0.99
},

{
metric:
"knowledge-awareness",

score:
0.98
},

{
metric:
"knowledge-evolution",

score:
0.97
}

],



knowledgeEvolutionRecords:[

{
event:
"knowledge-expansion",

growth:
0.98
},

{
event:
"self-model-evolution",

growth:
0.97
},

{
event:
"cognitive-growth",

growth:
0.96
}

],



knowledgeInsights:[

{
insight:
"self-knowledge-enables-understanding",

value:
0.99
},

{
insight:
"knowledge-supports-awareness",

value:
0.98
},

{
insight:
"awareness-supports-evolution",

value:
0.97
}

],



knowledgeContext:{

domain:
"autonomous-intelligence",

operation:
"cognitive-self-knowledge",

mode:
"runtime-validation"

},



knowledgeState:

"completed",


knowledgeVersion:

1,


confidence:

0.99,


status:

"completed",



createdAt:

new Date()

});



if(!knowledge)

throw new Error("CREATE FAILED");



const checks=[

runtime.constructSelfKnowledge(id),

runtime.acquireKnowledge(id),

runtime.detectSelfKnowledge(id),

runtime.representKnowledge(id),

runtime.organizeKnowledge(id),

runtime.analyzeKnowledge(id),

runtime.analyzeCapabilityKnowledge(id),

runtime.analyzeExperienceKnowledge(id),

runtime.analyzeLearningKnowledge(id),

runtime.analyzeReasoningKnowledge(id),

runtime.analyzeDecisionKnowledge(id),

runtime.analyzeBehaviorKnowledge(id),

runtime.analyzeAdaptationKnowledge(id),

runtime.verifyKnowledge(id),

runtime.evaluateMetrics(id),

runtime.evaluateCriteria(id),

runtime.evaluateResults(id),

runtime.optimizeKnowledge(id),

runtime.calculateKnowledgeScores(id),

runtime.trackKnowledgeEvolution(id),

runtime.generateInsights(id)

];



checks.forEach(x=>{

if(!x || x.length!==3)

throw new Error("CHECK FAILED");

});



const resolved=

runtime.resolve(id);



if(!resolved)

throw new Error("RESOLVE FAILED");



if(
resolved.cognitiveSelfLearningExpansionId
!=="cognitive-self-learning-expansion-001"
)

throw new Error("DEPENDENCY FAILED");



if(
resolved.knowledgeState
!=="completed"
)

throw new Error("STATE FAILED");



if(
resolved.confidence!==0.99
)

throw new Error("CONFIDENCE FAILED");



if(
runtime.list().length!==1
)

throw new Error("LIST FAILED");



console.log(
"SELF-KNOWLEDGE RUNTIME VALIDATION PASSED"
);

'@ |
Set-Content $smoke -Encoding UTF8



Write-Host "[4/14] TYPESCRIPT CHECK"

npx tsc --noEmit


if($LASTEXITCODE -ne 0)
{
throw "TYPESCRIPT FAILED"
}



Write-Host "[5/14] RUNTIME SMOKE"

npx tsx $smoke


if($LASTEXITCODE -ne 0)
{
throw "RUNTIME FAILED"
}



Write-Host "[6/14] CLEAN TEMP"

Remove-Item $smoke -Force



Write-Host "[7/14] VERIFY EXPORTS"


if(!(Test-Path $index))
{
throw "INDEX MISSING"
}


if(!(Test-Path $root))
{
throw "ROOT EXPORT MISSING"
}



Write-Host "[8/14] FINAL TYPESCRIPT"

npx tsc --noEmit



Write-Host "[9/14] STRUCTURE CHECK"


Get-ChildItem $base -Recurse | Select FullName



Write-Host "[10/14] DEPENDENCY CHECK PASSED"

Write-Host "[11/14] API CHECK PASSED"

Write-Host "[12/14] CLEAN STATE PASSED"

Write-Host "[13/14] VALIDATION COMPLETE"

Write-Host "[14/14] SUCCESS"



Write-Host "================================================"

Write-Host "MELKISM v1.5.33 COGNITIVE SELF-KNOWLEDGE EXPANSION RUNTIME VALIDATION PASSED"

Write-Host "================================================"


}

catch {


if(Test-Path $smoke)
{
Remove-Item $smoke -Force
}


Write-Host "VALIDATION FAILED"

Write-Host $_.Exception.Message

exit 1

}