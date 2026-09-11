import type {
ContentClassification
} from "./content.types";


export function classifyContent(
title:string
):ContentClassification{


return {

category:"general",

confidence:title.length>0 ? 0.5 : 0

};


}

