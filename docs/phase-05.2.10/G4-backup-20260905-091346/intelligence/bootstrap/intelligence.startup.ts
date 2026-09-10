
import {

intelligenceRuntimeRegistry

}

from "../runtime";



export function startIntelligenceRuntime(){


return {


status:
"started",


modules:
intelligenceRuntimeRegistry.list().length


};


}



