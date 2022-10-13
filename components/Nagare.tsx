import {MdArrowForwardIos} from "react-icons/md"

const Nagare = () => {
    return (
        <>
        <div className="text-center text-2xl py-20"><h1>利用までの流れ</h1></div>
        {/* <div className="grid grid-cols-7 space-x-10 justify-items-center ">   
          
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">お申し込み</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>

            <div>a</div>
          
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">確認</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>

            <div>a</div>
            
    
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">開通工事</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>

            <div>a</div>
          
       
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">利用開始</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
          
        </div> */}

        <div className="flex flex-col md:flex-row justify-evenly items-center space-y-5 md:space-y-0">
            <div className="shrink w-64 ">
            <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">お申し込み</h2>
                <p>お電話(0120-197-802)またはお申し込みフォームよりお申し込みください。</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>

            <div className="flex-none w-5 rotate-90 md:-rotate-0"><MdArrowForwardIos className="text-2xl"/> </div>

            <div className="shrink w-64">
            <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">確認</h2>
                <p>弊社より確認のお電話をさせていただきます。後日、工事日程をご案内します。</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            

            </div>

            <div className="flex-none w-5 rotate-90 md:-rotate-0"><MdArrowForwardIos className="text-2xl"/> </div>
        
            <div className="shrink w-64">
            <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">開通工事</h2>
                <p>工事業者がご自宅にお伺いし、回線の開通に必要な工事を実地致します。</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            <div className="flex-none w-5 rotate-90 md:-rotate-0"><MdArrowForwardIos className="text-2xl"/> </div>
            <div className="shrink w-64">

            <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">利用開始</h2>
                <p>接続設定をしていただいた後、インターネットをお使いいただけます。</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
        </div>


        </>
    );
}

export default Nagare;