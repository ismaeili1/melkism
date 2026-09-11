export class CognitiveResourceMonitor {


check(resource:any){


return {

resource:resource.id,

status:resource.status,

healthy:true

};


}

}
