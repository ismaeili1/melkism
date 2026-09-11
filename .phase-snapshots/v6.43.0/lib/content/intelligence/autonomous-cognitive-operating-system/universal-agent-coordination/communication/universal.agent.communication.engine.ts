
export class UniversalAgentCommunicationEngine {


send(message:any){

return {

sent:true,

message

};

}



receive(message:any){

return {

received:true,

message

};

}


}

