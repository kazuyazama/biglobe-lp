const Point = () => {
    return (
        <>
        <h1 className="text-center text-2xl py-20 font-semibold">ビッグローブ光なら解決！４つのポイント</h1>

        <div className="flex flex-col space-y-10">

        
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">月額料金が安い</h2>
            <p>auひかりなどに対応していない集合住宅や地域の方でも安心です。BIGLOBE光ならauひかりサービスと同様のauスマートバリューがご利用できます。</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">スマホとセットでよりお得に！</h2>
            <p>auひかりなどに対応していない集合住宅や地域の方でも安心です。BIGLOBE光ならauひかりサービスと同様のauスマートバリューがご利用できます。</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>
      
       
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">IPv6対応で速度が速い</h2>
            <p>ビッグローブ光なら超光速通信IPv6が無料でご利用できます。今ならIPv6対応ルーターが６ヶ月間無料で利用できます。</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>
      
     
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">引っ越しも安心の移転費用永年無料</h2>
            <p>急な引っ越しや転勤が多い方でも安心！通常は15000円程かかる移転工事費が何度でも無料で利用できます。NTT回線のため、全国で利用できないエリアは稀です。
            </p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>

        </div>
            
  

        </>
       
    );
}

export default Point;