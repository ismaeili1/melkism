type Props={

children:React.ReactNode;

variant?:
"primary"|"secondary";

};


export default function Button({

children,
variant="primary"

}:Props){


return (

<button
data-variant={variant}
>

{children}

</button>

);

}