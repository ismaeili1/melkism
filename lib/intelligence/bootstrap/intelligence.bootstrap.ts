
import {

startIntelligenceRuntime

}

from "./intelligence.startup";



export function bootstrapIntelligence(){


const runtime =
startIntelligenceRuntime();



return {


system:
"MELKISM_INTELLIGENCE",


runtime


};



}



