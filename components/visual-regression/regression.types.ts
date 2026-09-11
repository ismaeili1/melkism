export type Viewport=

"desktop" |

"tablet" |

"mobile";


export type ExperienceArea=

"homepage" |

"content" |

"intelligence" |

"reports" |

"ai";


export interface VisualRegressionItem{


id:string;

area:ExperienceArea;

viewport:Viewport;

status:"pending"|"approved";


}