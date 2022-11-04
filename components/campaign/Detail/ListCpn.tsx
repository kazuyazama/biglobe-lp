type Props = {
    title:string; 
    discription?:string;
    list1?:string;
    list2?:string | Array<string|JSX.Element>;
    list3?:string | Array<string|JSX.Element>;
    others?:string;
}

const ListCpn = ({title,list1,list2,list3,discription,others}:Props) => {
    return (
        <div className="col-span-6 justify-self-start w-full">
        <h2 className="border-b-2 border-secondary "><span className="text-lg md:text-xl">{title}</span></h2>
           <hr />
           {discription &&
            ( <p className="py-3">{discription}</p> ) 
           }
           <ul className="list-disc list-inside space-y-2 pt-3 ">
               {list1 && (<li>{list1}</li> ) }  
               {list2 && (<li>{list2}</li> ) }  
               {list3 && (<li>{list3}</li> ) }
               {others && (<p className="py-2">{others}</p> )}  
           </ul>
        </div>
    );
}

export default ListCpn;