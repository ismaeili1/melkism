
import {

intelligenceRuntimeRegistry

}
from "../runtime";



import {

ContentIntelligenceModule

}
from "./content-intelligence.module";




export function registerIntelligenceModules(){



intelligenceRuntimeRegistry.register(
ContentIntelligenceModule
);



}



