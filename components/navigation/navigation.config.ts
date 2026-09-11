export type SupportedLocale =
"fa"
|
"en"
|
"ar"
|
"tr";


export interface NavigationItem {

label:string;

href:string;

}



export const navigationItems:NavigationItem[]=[

{
label:"News",
href:"/news"
},

{
label:"Articles",
href:"/articles"
},

{
label:"Research",
href:"/research"
},

{
label:"Markets",
href:"/markets"
},

{
label:"Cities",
href:"/cities"
},

{
label:"Countries",
href:"/countries"
},

{
label:"Trends",
href:"/trends"
},

{
label:"Data",
href:"/data"
},

{
label:"Reports",
href:"/reports"
}

];