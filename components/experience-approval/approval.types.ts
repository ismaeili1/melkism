export type ExperienceArea =

"visitor" |

"researcher" |

"investor" |

"professional";


export type ApprovalStatus =

"pending" |

"approved";


export interface ExperienceApproval{


id:string;

area:ExperienceArea;

status:ApprovalStatus;

description:string;


}