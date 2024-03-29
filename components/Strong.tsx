import {VscWorkspaceTrusted} from "react-icons/vsc"
import Image from "next/image";

const Strong = () => {
    return (
        <div>
        <h1 className="text-center tracking-widest text-xl lg:text-3xl py-20 font-bold before:content-['Strong'] before:text-6xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">当サイトが選ばれる理由</h1>

        <div className="flex-col lg:flex lg:flex-row justify-evenly space-y-10 lg:space-y-0 lg:space-x-10 ">

        
            <div className="card lg:w-1/3 bg-base-100 shadow-xl hover:-translate-y-3 ease-in-out duration-700">
            {/* <figure className="pt-5 "><VscWorkspaceTrusted size={100}/></figure> */}
            <figure className="bg-gradient-to-r from-cyan-500 to-blue-500"><Image loader={({src}) => src} src="/main/strong/信頼2.svg" alt="顧客からの信頼" width={250} height={250}  /></figure>
            <div className="card-body">
                <h2 className="card-title">顧客からの圧倒的な信頼感</h2>
                <p>私たちは業界において、10年以上携わっているプロフッショナル集団です。その経験からお客様に適正なソリューションをお約束します。</p>
                
            </div>
            </div>
      
       
            <div className="card lg:w-1/3 bg-base-100 shadow-xl hover:-translate-y-3 ease-in-out duration-700">
                <figure className="bg-gradient-to-r from-cyan-500 to-blue-500"><Image loader={({src}) => src} src="/main/strong/最短.svg" alt="最短2分でのお申し込み" width={250} height={250}/></figure>
                <div className="card-body">
                    <h2 className="card-title">最短2分でのお申し込み</h2>
                    <p>webお申し込みであれば最短2分でお申し込みが可能です。その後のアフターなども非常にスピーディに行うことが可能です。</p>
                    
                </div>
            </div>
      
     
            <div className="card lg:w-1/3 bg-base-100 shadow-xl hover:-translate-y-3 ease-in-out duration-700">
            <figure className="bg-gradient-to-r from-cyan-500 to-blue-500"><Image loader={({src}) => src} src="/main/strong/お得.svg" alt="最大3,5万円お得" width={200} height={250} /></figure>

            <div className="card-body">
                <h2 className="card-title">最大35,000円オトク！</h2>
                <p>当サイトからお申し込み頂くと、当サイト限定キャンペーンとキャリア公式キャンペーンが併用できますので最大35,000円お得に利用できます。
                </p>
                
            </div>
            </div>

        </div>
            

        </div>
    );
}

export default Strong;