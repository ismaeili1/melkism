/**
 * MELKISM Conversation Intelligence
 * v38.20.14
 */


export interface ConversationMessage {


role:string;

content:string;

createdAt:Date;

}



export interface ConversationRecord {


id:string;

messages:ConversationMessage[];

createdAt:Date;

}



export class ConversationIntelligence {


private history:
ConversationRecord[] = [];



createConversation(){


const conversation:
ConversationRecord={


id:
crypto.randomUUID(),


messages:[],


createdAt:new Date()


};


this.history.push(conversation);


return conversation;


}



addMessage(

conversationId:string,

role:string,

content:string

){


const conversation =
this.history.find(
item=>item.id===conversationId
);



if(!conversation){

return null;

}



const message:ConversationMessage={


role,

content,

createdAt:new Date()


};



conversation.messages.push(message);


return message;


}



getConversationHistory(){


return this.history;


}


}
