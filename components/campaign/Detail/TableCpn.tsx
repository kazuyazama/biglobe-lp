type Props = {
    title1:string;
    title2:string;
    title3:string;
    price1:string;
    price2:string;
    price3?:string;
    discription1:string;
    discription2?:string;
    discription3?:string;
}

const Table = ({title1,title2,title3,discription1,discription2,discription3,price1,price2,price3}:Props) => {
    return (
    <>

        {/* <div className="outline outline-primary rounded-2xl">
       
        <ul className="grid grid-cols-2 items-center">
        <li className=" border-b-2 bg-yellow-100 text-center py-5 h-24 md:h-20 ">
            <p className="md:text-lg translate-y-3 md:translate-y-1">{title1}</p> 
        </li>
        <li className=" text-center  bg-red-50 py-5 border-b-2 h-24 md:h-20">
        <p className="-translate-y-1 md:translate-y-1">
            <span className="text-secondary font-bold block md:inline">{price1}</span> {discription1}
        </p>
        </li>
        <li className="border-b-2 bg-yellow-100 text-center py-5 h-20">
            <p className="md:text-lg  translate-y-2 md:translate-y-1">{title2}</p> 
        </li>      
      
        <li className="text-center  bg-red-50 py-5 border-b-2 h-20 ">
        <p className="-translate-y-1 md:translate-y-1">
            <span className="text-secondary font-bold block md:inline">{price2}</span> {discription2}
        </p>
        </li>

        <li className="border-b-2 bg-yellow-100 text-center py-5 h-20">
            <p className=" translate-y-2 md:translate-y-1">{title3}</p> 
        </li>      
      
        <li className=" text-center  bg-red-50 py-3 border-b-2 h-20">
        <p className="translate-y-1 md:translate-y-1 md:leading-10">
            <span className="text-secondary font-bold block md:inline">{price3}</span> {discription3}
        </p>
        </li>


        </ul>
        </div> */}

        <table className="table-auto w-full border-2 border-primary rounded-lg border-separate ">
      
            <tbody>
                <tr className="">
                <td className="w-1/2 bg-yellow-100 border-b-2 rounded-tl-lg">
                <div className="text-center py-5">
                 <p className="md:text-lg ">{title1}</p> 
                </div>
                </td>
                <td className="w-1/2 bg-red-50 border-b-2 rounded-tr-lg">
                <div className=" text-center  py-5 ">
                <p className="">
                    <span className="text-secondary font-bold block md:inline md:text-lg">{price1}</span> {discription1}
                </p>
                </div>
                </td>
         
                </tr>
                <tr>
                <td className="w-1/2 bg-yellow-100 border-b-2 ">
                <div className="text-center py-5">
                 <p className="md:text-lg ">{title2}</p> 
                </div>
                </td>
                <td className="w-1/2 bg-red-50 border-b-2">
                <div className=" text-center  py-5 ">
                <p className="">
                    <span className="text-secondary font-bold block md:inline md:text-lg">{price2}</span> {discription2}
                </p>
                </div>
                </td>
         
                </tr>
                <tr className="">
                <td className="w-1/2 bg-yellow-100 border-b-2 rounded-bl-lg ">
                <div className="text-center py-5">
                 <p className="md:text-lg ">{title3}</p> 
                </div>
                </td>
                <td className="w-1/2 bg-red-50 border-b-2 rounded-br-lg">
                <div className=" text-center  py-5 ">
                <p className="">
                    <span className="text-secondary font-bold block md:inline md:text-lg">{price3}</span> {discription3}
                </p>
                </div>
                </td>
         
                </tr>
            </tbody>
        </table>


    
    
    </>
    );
}

export default Table;