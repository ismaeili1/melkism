import type { SupportedLocale } from "./navigation.config";


interface Props {

locale: SupportedLocale;

}


export function LanguageSwitcher({
locale
}:Props){

return (

<button data-locale={locale}>

Language

</button>

);

}

