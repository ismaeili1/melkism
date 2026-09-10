import type {

LearningSignal,

LearningSignalType

} from "./learning.types";



export class LearningEngine {



private signals:LearningSignal[] = [];



extract(

feedbackId:string,

type:LearningSignalType,

strength:number,

description:string

){


const signal:LearningSignal={


id:crypto.randomUUID(),


feedbackId,


type,


strength,


description,


createdAt:new Date()


};



this.signals.push(signal);


return signal;


}



getByType(

type:LearningSignalType

){


return this.signals.filter(

signal=>

signal.type===type

);


}



getAll(){

return this.signals;

}



}

