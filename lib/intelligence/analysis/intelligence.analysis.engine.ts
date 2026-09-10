
import {

saveInsight

}
from "./intelligence.analysis.store";



export function runAnalysis(
request:any
){


const insight={


id:
request.id || crypto.randomUUID(),


summary:
"Generated intelligence insight",


confidence:
0.5,


signals:
[],


createdAt:
new Date()


};



return saveInsight(insight);


}



