import MELKISMLogo from "../brand/MELKISMLogo";

import {
DesktopNavigation
}
from "../navigation/DesktopNavigation";


import {
LanguageSelector
}
from "../navigation/LanguageSelector";


import {
SearchAction
}
from "../navigation/SearchAction";


import type {
SupportedLocale
}
from "../navigation/navigation.config";



interface Props{

locale?:SupportedLocale;

}



export default function ProductHeader({
locale="en"
}:Props){


return (

<header className="border-b bg-white">


<MELKISMLogo />


<DesktopNavigation locale={locale}/>


<LanguageSelector locale={locale}/>


<SearchAction/>


</header>

)

}




