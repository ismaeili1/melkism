export type JourneyType =

"visitor" |

"researcher" |

"investor" |

"professional";


export interface JourneyItem{

id:string;

title:string;

description:string;

type:JourneyType;

}