import type { SupportedLocale } from "./navigation.config";


const items = [

"Intelligence",

"Markets",

"Architecture",

"Reports",

"Data",

"Cities"

];


interface Props {

locale: SupportedLocale;

}


export function DesktopNavigation({
locale
}:Props){

return (

<nav data-locale={locale}>

{items.map((item)=>(

<span key={item}>

{item}

</span>

))}

</nav>

);

}

