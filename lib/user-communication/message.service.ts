export function sendMessage(
from:string,
to:string,
content:string
){

return {

from,

to,

content,

sentAt:
new Date().toISOString()

};

}

