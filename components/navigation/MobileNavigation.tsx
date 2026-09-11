type SupportedLocale =
 | "fa"
 | "en"
 | "ar"
 | "tr";


interface MobileNavigationProps {

locale: SupportedLocale;

}



export function MobileNavigation(
{
locale
}: MobileNavigationProps
){


return (

<nav 
className="mobile-navigation"
data-locale={locale}
>


<button>

Menu

</button>


</nav>

)


}



export default MobileNavigation;