export class CognitiveAgentRegistry {


private agents:any[]=[];


register(agent:any){


this.agents.push(agent);


return {


registered:true,


count:this.agents.length


};


}



list(){


return this.agents;


}


}
