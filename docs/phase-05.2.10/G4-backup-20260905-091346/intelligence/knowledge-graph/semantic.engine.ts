import type {

SemanticEntity,

SemanticSimilarity

} from "./semantic.types";



export class SemanticIntelligenceEngine {



compare(

source:SemanticEntity,

target:SemanticEntity

):SemanticSimilarity {



const matched=

source.features.filter(

sourceFeature=>

target.features.some(

targetFeature=>

targetFeature.name===sourceFeature.name

&&

targetFeature.value===sourceFeature.value

)

)

.map(

feature=>feature.name

);



const score=

source.features.length===0

?

0

:

matched.length/source.features.length;



return {


sourceId:source.entityId,


targetId:target.entityId,


score,


matchedFeatures:matched,


createdAt:new Date()


};



}



searchSimilar(

entity:SemanticEntity,

candidates:SemanticEntity[]

){



return candidates.map(

candidate=>

this.compare(entity,candidate)

)

.sort(

(a,b)=>

b.score-a.score

);



}



}

