type Props={
title:string
children:React.ReactNode
}

export default function Section({title,children}:Props){

return(
<section className="py-12">

<h2 className="text-3xl font-bold mb-6">
{title}
</h2>

{children}

</section>
)

}
