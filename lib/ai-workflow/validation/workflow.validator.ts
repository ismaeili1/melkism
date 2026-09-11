export interface ValidationResult {

approved:boolean;

reason:string;

}


export function validateWorkflow():

ValidationResult {


return {

approved:false,

reason:
"Human governance required"

};


}


