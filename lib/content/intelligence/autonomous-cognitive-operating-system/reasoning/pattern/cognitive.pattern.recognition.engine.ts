export class CognitivePatternRecognitionEngine {


detect(data:any[]){


return {


patternsFound:data.length>0,


patterns:data.length


};


}

}
