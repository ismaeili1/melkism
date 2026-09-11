type Props={

placeholder?:string;

};


export default function AIPromptBox({

placeholder="Ask MELKISM AI"

}:Props){


return (

<section>


<input

placeholder={placeholder}

/>


<button>

Ask AI

</button>


</section>

)

}