type Props = {
    id?:string;
    title:string;
    list1:string;
    list2:string;
    list3:string;
    list4:string;
    list5:string;
    list6:string;
    list7:string;
    list8:string;
    list9?:string;
}


const Notes  = ({title,list1,list2,list3,list4,list5,list6,list7,list8,list9,id}:Props) => {
    return (
        <div  className="col-span-6 justify-self-start w-full" id={id}>
        <div tabIndex={0} className="collapse collapse-arrow md:collapse-open">
        <input type="checkbox" /> 

        <h2 className="text-lg md:text-xl collapse-title border border-secondary  hover:bg-red-50 md:hover:bg-yellow-50">{title}</h2>


        <ul className="collapse-content list-disc list-inside space-y-2 border-b border-l border-r">
        
            <li className="pt-3">
                {list1}
            </li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
            <li>{list5}</li>
            <li>{list6}</li>
            <li>{list7}</li>
            <li>{list8}</li>
            {list9 && (<li>{list9}</li>)}
        </ul>
        </div>
     </div>

    );
}

export default Notes ;