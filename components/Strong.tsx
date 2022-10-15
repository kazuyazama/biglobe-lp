const Strong = () => {
    return (
        <div>
        <h1 className="text-center text-xl md:text-2xl py-10 md:py-20 font-semibold">当サイトが選ばれる理由</h1>

        <div className="flex-col md:flex md:flex-row justify-evenly space-y-10 md:space-y-0 ">

        
            <div className="card  md:w-1/4 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">顧客からの圧倒的な信頼感</h2>
                <p>私たちは業界において、10年以上携わっているプロフッショナル集団です。その経験からお客様に適正なソリューションをお約束します。</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
      
       
            <div className="card md:w-1/4 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">最短2分でのお申し込み</h2>
                    <p>webお申し込みであれば最短2分でお申し込みが可能です。その後のアフターなども非常にスピーディに行うことが可能です。</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
      
     
            <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">最大29,800円オトク！</h2>
                <p>当サイトからお申し込み頂くと、当サイト限定キャンペーンとキャリア公式キャンペーンが併用できますので最大29,800円お得に利用できます。
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>

        </div>
            

        </div>
    );
}

export default Strong;