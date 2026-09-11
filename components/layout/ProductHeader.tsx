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

<header>


<div>
MELKISM
</div>


<DesktopNavigation locale={locale}/>


<LanguageSelector locale={locale}/>


<SearchAction/>


</header>

)

}