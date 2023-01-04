
type notes = {
    desc:string;
}

type Props = {
    id?:string;
    title:string;
    notes:notes[];
}


const Notes  = ({title,id,notes}:Props) => {
    return (
        <div  className="col-span-6 justify-self-start w-full" id={id}>
        <div tabIndex={0} className="collapse collapse-arrow md:collapse-open">
        <input type="checkbox" /> 

        <h2 className="text-lg md:text-xl collapse-title border border-secondary  hover:bg-red-50 md:hover:bg-yellow-50">{title}</h2>


        <ul className="collapse-content list-disc list-inside space-y-2 border-b border-l border-r">

            {notes?.map((li) => (
                <li className=" first-of-type:pt-3" key={li.desc}>{li.desc}</li>
            ))}
            
        </ul>
        </div>
     </div>

    );
}

export default Notes ;