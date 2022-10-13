const Point = () => {
    return (
        <>
        <h1 className="text-center text-2xl py-20 font-semibold">ビッグローブ光なら解決！４つのポイント</h1>

        <div className="flex flex-col space-y-10 ">

        <div className="flex items-center space-x-5 -mb-10">
        <p className="text-5xl font-extrabold text-accent">01</p>  
        <h1 className="text-2xl font-semibold">月額料金が安い</h1>
        </div>


        <div className="grid grid-cols-2 justify-items-center gap-y-10 border-4 border-secondary p-10 bg-base-100 rounded-xl">


            <div className="col-span-2 ">

                <p className="text-center">
                SoftBank 光なら、キャンペーン適用で月額2,800円(税込3,080円)からご利用いただけます！
                回線とプロバイダ料金込みなのでとってもおトクです！
                </p>

            </div>
       

            <div className=" card  bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">マンション</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className=" card  bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">戸建</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


            <div className="col-span-2">

                <p className="text-sm text-justify leading-relaxed">
            【月額料金の内訳】
            ・集合住宅タイプ：集合住宅タイプ月額料金4,180円(税込) － SoftBank 光 乗り換え新規で割引キャンペーン（1,100円(税込)×24ヵ月割引） ＝ 3,080円(税込)
            ・戸建住宅タイプ：戸建住宅タイプ月額料金 5,720円(税込) － SoftBank 光 乗り換え新規で割引キャンペーン（1,100円(税込)×24ヵ月割引） ＝ 4,620円(税込)
            【SoftBank 光】○SoftBank 光 2年自動更新プランの場合、契約期間は2年間です。契約期間満了月の末日までに解約が完了しなかった場合、本サービスの契約は2年単位での自動更新となります。契約期間満了月の当月・翌月・翌々月以外で解約をされた場合、解約時の契約プラン・回線タイプに応じた割引前の月額料金相当額を解除料としてご請求します。契約成立日が2022年6月30日以前の場合、10,450円の解除料が必要です。詳しくはWeb（https://u.softbank.jp/3KFwQRZ）をご確認ください。ブロードバンドサービスと付随するオプションサービスを同月内に解約し解除料が重複して発生する場合は、11,000円を解除料の上限金額としてお支払いいただきます。
                </p>

            </div>

            <div className="col-span-2 ">

            <h2 className="text-xl text-center">集合住宅の割引イメージ</h2>

            <p className="text-center">
            SoftBank 光なら、キャンペーン適用で月額2,800円(税込3,080円)からご利用いただけます！
            回線とプロバイダ料金込みなのでとってもおトクです！
            </p>

            </div>

            <div className="col-span-2">
                画像
            </div>



        </div>

        <h1 className="text-2xl font-semibold">スマホとセットでよりお得に！</h1>
        <div className="grid grid-cols-2 justify-items-center gap-y-10  p-10 border-4 border-secondary bg-base-100">

            <div className="col-span-2 ">

                <p className="text-center">
                auひかりなどに対応していない集合住宅や地域の方でも安心です。BIGLOBE光ならauひかりサービスと同様のauスマートバリューがご利用できます。
                さらに離れて暮らしているご家族の月額料金も割引！
                </p>
            </div>

            <div className="col-span-2">
                画像
            </div>
       
            <div className="col-span-2">
                <p className="text-sm text-justify leading-relaxed">
                    auセット割の詳細
            
                </p>
            </div>
        
            <div className="col-span-2">
                画像
            </div>

        </div>

        <h1 className="text-2xl font-semibold">IPv6対応で速度が速い</h1>
        <div className="grid grid-cols-2 justify-items-center gap-y-10  p-10 border-4 border-secondary  bg-base-100">

            <div className="col-span-2 ">

                <p className="text-center">
                ビッグローブ光なら超光速通信IPv6が無料でご利用できます。今ならIPv6対応ルーターが６ヶ月間無料で利用できます。
                </p>
            </div>

            <div className="col-span-2">
                画像
            </div>

            <div className="col-span-2">
                画像
            </div>
       
            <div className="col-span-2">
                <p className="text-sm text-justify leading-relaxed">
                    詳細
            
                </p>
            </div> 

        </div>

        <h1 className="text-2xl font-semibold">引っ越しも安心の移転費用永年無料</h1>
        <div className="grid grid-cols-2 justify-items-center gap-y-10  p-10 border-4 border-secondary bg-base-100">

            <div className="col-span-2 ">

                <p className="text-center">
                急な引っ越しや転勤が多い方でも安心！通常は15000円程かかる移転工事費が何度でも無料で利用できます。NTT回線のため、全国で利用できないエリアは稀です。
                </p>
            </div>

            <div className="col-span-2">
                画像
            </div>

            <div className="col-span-2">
                画像
            </div>
       
            <div className="col-span-2">
                <p className="text-sm text-justify leading-relaxed">
                    詳細
            
                </p>
            </div> 

        </div>

     
      
       

        </div>
            
  

        </>
       
    );
}

export default Point;