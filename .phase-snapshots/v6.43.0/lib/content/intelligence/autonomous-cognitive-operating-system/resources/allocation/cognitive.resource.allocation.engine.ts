export class CognitiveResourceAllocationEngine {


allocate(resource:any,amount:number){


if(resource.available < amount)
{

return {

allocated:false

};

}



resource.available-=amount;


resource.status="allocated";


return {

allocated:true,

amount

};


}



release(resource:any,amount:number){


resource.available+=amount;

resource.status="available";


return resource;

}

}
