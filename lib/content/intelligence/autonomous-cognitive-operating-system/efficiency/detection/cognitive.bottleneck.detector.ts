export class CognitiveBottleneckDetector {


detect(record:any){


return {


bottleneck:

record.efficiency<0.8,


record:record.id

};


}

}
