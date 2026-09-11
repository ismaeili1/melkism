import type {
SupportedLocale
}
from "./navigation.config";


interface Props {

locale?:SupportedLocale;

}


export function LanguageSelector({
locale="en"
}:Props){


return (

<div>

{locale}

</div>

)

}


export default LanguageSelector;