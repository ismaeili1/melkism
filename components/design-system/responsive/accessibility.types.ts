export type DeviceType =

"mobile" |

"tablet" |

"desktop";


export type Direction =

"rtl" |

"ltr";


export interface ResponsiveRule{

device:DeviceType;

direction:Direction;

description:string;

}