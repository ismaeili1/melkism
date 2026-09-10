/**
 * MELKISM Runtime Failure Recovery
 */


export interface RuntimeRecoveryState {


status:string;


failures:number;


lastError:string|null;


timestamp:string;


}



let recoveryState:
RuntimeRecoveryState =
{


status:"healthy",


failures:0,


lastError:null,


timestamp:
new Date().toISOString()


};



export function registerRuntimeFailure(
error:unknown
){


recoveryState={


status:"failed",


failures:
recoveryState.failures + 1,


lastError:
String(error),


timestamp:
new Date().toISOString()


};


return recoveryState;

}



export function recoverRuntime(){


recoveryState.status="recovering";


recoveryState.timestamp=
new Date().toISOString();



recoveryState.status="healthy";


return recoveryState;

}



export function getRuntimeRecoveryState(){

return recoveryState;

}



export function resetRuntimeRecovery(){


recoveryState={


status:"healthy",


failures:0,


lastError:null,


timestamp:
new Date().toISOString()


};


return recoveryState;

}

