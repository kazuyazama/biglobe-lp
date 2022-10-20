import Link from "next/link";


const Campaign = () => {
    return (
        <>

        <div className="pt-20 relative">
        <h1 className="text-center text-xl md:text-2xl font-semibold  before:content-['Campaign'] before:text-7xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">キャンペーン</h1>
        <div className="flex justify-center pt-20 ">

          <div className="basis-full ">


            <div className="card bg-base-100 shadow-xl">
            <div className="bg-accent text-xl text-center py-3">
             当サイト限定！選べるキャンペーン
            </div>
            <div className="card md:card-side  rounded-t-none">
            <figure className="w-full "><img src="https://placeimg.com/400/225/arch" 
            alt="Shoes" className="w-full hover:opacity-75" />
            </figure>

            <div className="card-body ">
                <h2 className="card-title">当サイトだけのお得なキャンペーン！</h2>
                <p>当サイト限定のビッグローブ光キャンペーン！高額キャッシュバック(最大30,000円)または
                  工事費無料+キャッシュバックキャンペーン(最大15,000円)のどちらかをお選びいただけるキャンペーンです！
                  両方ともに高速wifiルーターは付いてきます。</p>
                <div className="card-actions justify-end">
                <Link href='/campaignDetail'>
                <button className="btn btn-secondary btn-wide">詳細</button>
                </Link>
                </div>
            </div>
            </div>


            </div>
          </div>
        </div>

        <div className="md:flex justify-center space-y-5 md:space-y-0 md:space-x-5 pt-5">

          <div className="basis-1/3 ">


                
        <div className="card bg-base-100 shadow-xl ">
          <div className="bg-accent text-xl py-3 text-center">ipV6ルーター無料</div>
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full hover:opacity-75" /></figure>
        <div className="card-body">
            <h2 className="card-title">IPv6ルーター月額料金無料特典</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        </div>

        <div className="basis-1/3">

       
        <div className="card bg-base-100 shadow-xl">
        <div className="bg-accent text-xl py-3 text-center">ipV6ルーター無料</div>
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full hover:opacity-75" /></figure>
        <div className="card-body">
            <h2 className="card-title">auスマートバリュー</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        </div>

        <div className="basis-1/3">


        <div className="card bg-base-100 shadow-xl">
        <div className="bg-accent text-xl py-3 text-center">ipV6ルーター無料</div>
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full hover:opacity-75" /></figure>
        <div className="card-body">
            <h2 className="card-title">UQモバイル自宅セット割</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>

        </div>
        </div>
  


        </div>


        {/* <h1>キャンペーン</h1>
          

          当サイト限定キャンペーン
          工事費無料
          ipv6ルーター
          auスマートバリュー
          uqモバイルセット割 */}
        </>
    );
}

export default Campaign;