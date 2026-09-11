import Link from "next/link";

import {
navigationItems,
type SupportedLocale
}
from "./navigation.config";


interface Props {

locale?: SupportedLocale;

}


export function DesktopNavigation({
locale="en"
}:Props){


return (

<nav>

{
navigationItems.map(item=>(

<Link
key={item.href}
href={`/${locale}${item.href}`}
>

{item.label}

</Link>

))
}

</nav>

)

}