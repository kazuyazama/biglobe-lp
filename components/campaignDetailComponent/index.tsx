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

const List = ({title1,title2,title3,discription1,discription2,discription3,price1,price2,price3}:Props) => {
    return (
    <>
        <ul className="outline outline-primary rounded-2xl">
        <li className="flex flex-row justify-center">
        <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
            <p className="">{title1}</p>
        </div>
        <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
            <p><span className="text-secondary font-bold ">{price1}</span> {discription1}</p>
        </div>
        </li>
        <li className="flex flex-row justify-center">
        <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
            <p className="">{title2}</p>
        </div>
        <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
        <p><span className="text-secondary font-bold">{price2}</span> {discription2}</p>
        </div>
        </li>
        <li className="flex flex-row justify-center">
        <div className="basis-1/2 bg-yellow-100 text-center py-3">
            <p className="">{title3}</p>
        </div>
        <div className="basis-1/2 text-center  bg-red-50 py-3">
        <p><span className="text-secondary font-bold">{price3}</span> {discription3}</p>
        </div>
        </li>
        </ul>
    </>
    );
}

export default List;