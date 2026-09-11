type Props={

children:React.ReactNode;

title?:string;

};


export default function PageShell({

children,
title

}:Props){


return (

<main>


{title &&

<h1>{title}</h1>

}


{children}


</main>

);

}