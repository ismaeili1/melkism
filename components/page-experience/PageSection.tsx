type Props={

children:React.ReactNode;

};


export default function PageSection({

children

}:Props){


return (

<section>

{children}

</section>

);

}