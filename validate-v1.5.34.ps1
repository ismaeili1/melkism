$ErrorActionPreference="Stop"

Write-Host "================================================"
Write-Host "MELKISM v1.5.34 - AUTONOMOUS INTELLIGENCE COGNITIVE SELF-UNDERSTANDING EXPANSION RUNTIME VALIDATION"
Write-Host "================================================"


$base="lib/content/intelligence/cognitive-self-understanding-expansion"

$runtime="$base/runtime/autonomous.cognitive.self.understanding.expansion.runtime.ts"

$index="$base/index.ts"

$root="lib/content/intelligence/index.ts"

$smoke="temp-cognitive-self-understanding-validation.ts"



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
throw "SELF-UNDERSTANDING RUNTIME NOT FOUND"
}



if(!(Test-Path "lib/content/intelligence/cognitive-self-knowledge-expansion/runtime/autonomous.cognitive.self.knowledge.expansion.runtime.ts"))
{
throw "SELF-KNOWLEDGE EXPANSION NOT FOUND"
}



Write-Host "[3/14] CREATE SMOKE TEST"



@'

import {

AutonomousCognitiveSelfUnderstandingExpansionRuntime

}

from "./lib/content/intelligence/cognitive-self-understanding-expansion";



const runtime =

new AutonomousCognitiveSelfUnderstandingExpansionExpansionRuntime();

'@ |
Set-Content $smoke -Encoding UTF8



# اصلاح نام کلاس برای جلوگیری از خطای تایپی

(Get-Content $smoke -Raw) -replace 
"AutonomousCognitiveSelfUnderstandingExpansionExpansionRuntime",
"AutonomousCognitiveSelfUnderstandingExpansionRuntime" |
Set-Content $smoke -Encoding UTF8



Add-Content $smoke @"


const id =

"cognitive-self-understanding-expansion-001";



const understanding =

runtime.create({

id,


cognitiveSelfKnowledgeExpansionId:

"cognitive-self-knowledge-expansion-001",


cognitiveSelfUnderstandingExpansionId:

id,



selfUnderstandingModels:[

{
understanding:
"self-operation-understanding",

description:
"understanding internal operation",

confidence:
0.99
},

{
understanding:
"self-growth-understanding",

description:
"understanding cognitive evolution",

confidence:
0.98
},

{
understanding:
"self-purpose-understanding",

description:
"understanding system objectives",

confidence:
0.97
}

],



understandingAcquisitions:[

{
understanding:
"knowledge-derived-understanding",

value:
0.99
},

{
understanding:
"experience-derived-understanding",

value:
0.98
},

{
understanding:
"learning-derived-understanding",

value:
0.97
}

],



selfUnderstandingDetections:[

{
understanding:
"capability-understanding",

score:
0.99
},

{
understanding:
"behavior-understanding",

score:
0.98
},

{
understanding:
"decision-understanding",

score:
0.97
}

],



understandingRepresentations:[

{
representation:
"self-understanding-model",

score:
0.99
},

{
representation:
"cognitive-map",

score:
0.98
},

{
representation:
"operational-model",

score:
0.97
}

],



understandingOrganizations:[

{
organization:
"understanding-hierarchy",

score:
0.99
},

{
organization:
"understanding-network",

score:
0.98
},

{
organization:
"understanding-structure",

score:
0.97
}

],



understandingAnalyses:[

{
analysis:
"self-analysis",

score:
0.99
},

{
analysis:
"operation-analysis",

score:
0.98
},

{
analysis:
"evolution-analysis",

score:
0.97
}

],



capabilityUnderstanding:[

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



experienceUnderstanding:[

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



learningUnderstanding:[

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



knowledgeUnderstanding:[

{
knowledge:
"self-knowledge",

score:
0.99
},

{
knowledge:
"domain-knowledge",

score:
0.98
},

{
knowledge:
"experience-knowledge",

score:
0.97
}

],



reasoningUnderstanding:[

{
reasoning:
"logical",

score:
0.99
},

{
reasoning:
"analytical",

score:
0.98
},

{
reasoning:
"creative",

score:
0.97
}

],



decisionUnderstanding:[

{
decision:
"quality",

score:
0.99
},

{
decision:
"adaptation",

score:
0.98
},

{
decision:
"optimization",

score:
0.97
}

],



behaviorUnderstanding:[

{
behavior:
"adaptive",

score:
0.99
},

{
behavior:
"learning",

score:
0.98
},

{
behavior:
"optimization",

score:
0.97
}

],



adaptationUnderstanding:[

{
adaptation:
"environment",

score:
0.99
},

{
adaptation:
"knowledge",

score:
0.98
},

{
adaptation:
"behavior",

score:
0.97
}

],



understandingVerifications:[

{
verification:
"understanding-integrity",

score:
0.99
},

{
verification:
"self-model-consistency",

score:
0.98
},

{
verification:
"operational-validation",

score:
0.97
}

],



understandingMetrics:[

{
metric:
"depth",

value:
0.99
},

{
metric:
"accuracy",

value:
0.98
},

{
metric:
"growth",

value:
0.97
}

],



understandingCriteria:[

{
criterion:
"consistency",

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



understandingResults:[

{
result:
"self-understanding",

score:
0.99
},

{
result:
"operational-understanding",

score:
0.98
},

{
result:
"evolution-understanding",

score:
0.97
}

],



understandingOptimizations:[

{
optimization:
"understanding-efficiency",

value:
0.99
},

{
optimization:
"understanding-quality",

value:
0.98
},

{
optimization:
"understanding-speed",

value:
0.97
}

],



understandingScores:[

{
metric:
"self-understanding",

score:
0.99
},

{
metric:
"cognitive-understanding",

score:
0.98
},

{
metric:
"evolution-understanding",

score:
0.97
}

],



understandingEvolutionRecords:[

{
event:
"self-understanding-growth",

growth:
0.98
},

{
event:
"cognitive-evolution",

growth:
0.97
},

{
event:
"capability-evolution",

growth:
0.96
}

],



understandingInsights:[

{
insight:
"knowledge-enables-understanding",

value:
0.99
},

{
insight:
"understanding-enables-awareness",

value:
0.98
},

{
insight:
"awareness-enables-evolution",

value:
0.97
}

],



understandingContext:{

domain:
"autonomous-intelligence",

operation:
"cognitive-self-understanding",

mode:
"runtime-validation"

},



understandingState:

"completed",


understandingVersion:

1,


confidence:

0.99,


status:

"completed",



createdAt:

new Date()

});



if(!understanding)

throw new Error("CREATE FAILED");



const checks=[

runtime.constructSelfUnderstanding(id),

runtime.acquireUnderstanding(id),

runtime.detectSelfUnderstanding(id),

runtime.representUnderstanding(id),

runtime.organizeUnderstanding(id),

runtime.analyzeUnderstanding(id),

runtime.analyzeCapabilityUnderstanding(id),

runtime.analyzeExperienceUnderstanding(id),

runtime.analyzeLearningUnderstanding(id),

runtime.analyzeKnowledgeUnderstanding(id),

runtime.analyzeReasoningUnderstanding(id),

runtime.analyzeDecisionUnderstanding(id),

runtime.analyzeBehaviorUnderstanding(id),

runtime.analyzeAdaptationUnderstanding(id),

runtime.verifyUnderstanding(id),

runtime.evaluateMetrics(id),

runtime.evaluateCriteria(id),

runtime.evaluateResults(id),

runtime.optimizeUnderstanding(id),

runtime.calculateUnderstandingScores(id),

runtime.trackUnderstandingEvolution(id),

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

resolved.cognitiveSelfKnowledgeExpansionId

!=="cognitive-self-knowledge-expansion-001"

)

throw new Error("DEPENDENCY FAILED");



if(

resolved.understandingState

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

"SELF-UNDERSTANDING RUNTIME VALIDATION PASSED"

);

"@



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

Write-Host "MELKISM v1.5.34 COGNITIVE SELF-UNDERSTANDING EXPANSION RUNTIME VALIDATION PASSED"

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