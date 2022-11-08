type Props = {
    title:string;
    image:JSX.Element;
    discription:string;
    arrow?:JSX.Element;
}

const FlowCpn = ({title,image,discription,arrow}:Props) => {
    return (
        <div className="basis-1/5">
        <div className="card card-compact bg-base-100 shadow-xl h-96 w-80 md:w-[500px] lg:w-auto">
            
        <figure className="bg-primary h-48">
            {image}
        </figure>
        
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{discription}</p>
        {arrow 
            &&  (
            <div className="card-actions ">
            <div className="flex justify-center mx-3 space-x-1 md:space-x-5 lg:space-x-1">
            <a href="tel:0120-197-802" className=" btn btn-primary  text-slate-100 before:content-['電話する'] relative btn-circle w-1/2 px-2">
            <span className="absolute right-0 2xl:right-0">{arrow}</span>
            </a>
            <a className=" btn btn-secondary  before:content-['webフォーム'] relative btn-circle  w-3/4 px-2">
            <span className="absolute right-0 2xl:right-">{arrow}</span>
            </a>
            </div>

            </div>
            )
        }
        </div>
        </div>
        
        </div>
    );
}

export default FlowCpn;