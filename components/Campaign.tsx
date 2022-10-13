

const Campaign = () => {
    return (
        <>

        <div className="">
        <h1 className="text-center text-2xl py-20">キャンペーン</h1>

        <div className="flex justify-center ">

          <div className="basis-full ">

        
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">当サイトだけのお得なキャンペーン！</h2>
                <p>当サイト限定のビッグローブ光キャンペーン！高額キャッシュバック(最大30,000円)または
                  工事費無料+キャッシュバックキャンペーン(最大15,000円)のどちらかをお選びいただけるキャンペーンです！
                  両方ともに高速wifiルーターは付いてきます。</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-5 pt-5">

          <div className="basis-1/3 ">

                
        <div className="card bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
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
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
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
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
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