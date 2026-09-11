export type ReviewArea =

"homepage" |

"content" |

"intelligence" |

"reports" |

"ai" |

"responsive";


export interface VisualReviewItem{

id:string;

area:ReviewArea;

description:string;

status:"pending"|"approved";

}