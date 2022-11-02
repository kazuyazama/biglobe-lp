type Props = {
    title:string; 
    list1:string;
    list2:string | Array<string|JSX.Element>;
    list3:string | Array<string|JSX.Element>;

}

const ListCpn = ({title,list1,list2,list3}:Props) => {
    return (
        <div className="col-span-6 justify-self-start w-full">
        <h2 className="border-b-2 border-secondary "><span className="text-lg md:text-xl">{title}</span></h2>
           <hr />
           <ul className="list-disc list-inside space-y-2 pt-3 ">
               <li>
               {list1}
               </li>
               <li>
               {list2}
               </li>
               <li>
               {list3}
               </li>
             
       
           </ul>
        </div>
    );
}

export default ListCpn;