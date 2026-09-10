/**
 * MELKISM Intelligence Runtime Diagnostics Binding
 */


export interface RuntimeDiagnosticsBinding {


source:string;


type:string;


createdAt:string;


}



const bindings:
RuntimeDiagnosticsBinding[]=[];



export function bindDiagnosticsSource(
source:string,
type:string
){


const binding:RuntimeDiagnosticsBinding={


source,

type,

createdAt:
new Date().toISOString()


};


bindings.push(binding);


return binding;

}



export function collectBoundDiagnostics(){


return bindings.map(item=>({


source:item.source,


type:item.type,


status:"available"


}));

}



export function getDiagnosticsBindings(){

return bindings;

}



export function clearDiagnosticsBindings(){

bindings.length=0;

}

