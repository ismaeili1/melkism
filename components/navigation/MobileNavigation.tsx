import type { SupportedLocale } from "./navigation.config";


interface Props {

locale: SupportedLocale;

}


export function MobileNavigation({
locale
}:Props){

return (

<nav data-locale={locale}>

<button>

Menu

</button>

</nav>

);

}

