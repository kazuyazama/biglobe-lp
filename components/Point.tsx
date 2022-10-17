import {FaRegBuilding} from "react-icons/fa";
import {BsHouse} from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

const Point = () => {
    return (
        <>
        <h1 className="text-center text-xl md:text-2xl py-10 md:py-20 font-semibold">ビッグローブ光なら解決！４つのポイント</h1>

        <div className="flex flex-col space-y-10 ">

        <div className="flex items-center space-x-5 -mb-10">
        <p className="text-5xl font-extrabold text-accent">01</p>  
        <h1 className="text-2xl font-semibold">月額料金が安い</h1>
        </div>

    

    

        <div className="grid grid-cols-2 justify-items-center gap-y-10 border-4 p-10 bg-base-100 rounded-xl">


            <div className="col-span-2 ">
                <h2 className="text-center text-lg">
                BIGLOBE 光なら、月額3,980円(税込3,080円)からご利用いただけます！
                回線とプロバイダ料金込みなのでとってもおトクです！
                </h2>
            </div>



            <div className="col-span-2 md:col-span-1 w-full md:w-5/6 ">

            <div className="card card-side bg-base-100 shadow-xl items-center border border-primary">
            <figure className="pl-3 md:pl-10"><FaRegBuilding className="text-5xl md:text-7xl" /></figure>
            <div className="card-body items-center px-0">
                <h2 className="card-title">マンションタイプ</h2>
                <h1 className="font-semibold self-center"><span className="text-3xl md:text-5xl text-secondary pr-2">4378円</span>円 / 月</h1>
            
            </div>
            </div>
            </div>

            <div className="col-span-2 md:col-span-1 w-full md:w-5/6 ">

            <div className="card card-side bg-base-100 shadow-xl items-center border border-primary">
            <figure className="pl-3 md:pl-10"><BsHouse className="text-5xl md:text-7xl" /></figure>
            <div className="card-body items-center px-0">
                <h2 className="card-title">戸建タイプ</h2>
                <h1 className="font-semibold self-center"><span className="text-3xl md:text-5xl text-secondary pr-2">4378円</span>円 / 月</h1>

            </div>
            </div>
            </div>

            <div className="col-span-2">
                <h1>コミコミでお得な料金の画像</h1>
                

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

            <div className="text-xl text-center">+</div>

            <h2 className="text-xl text-center">当サイト限定！キャッシュバックキャンペーン</h2>

            <p className="text-center">
            当サイトからお申し込み頂くと
            高額キャッシュバック(最大30,000円)または 工事費無料+キャッシュバックキャンペーン(最大15,000円)のどちらか
            がお選びいただけます。
            </p>

            </div>

            <div className="col-span-2">
                ↑の詳細画像とリンク
            </div>


        </div>

        <div className="flex items-center space-x-5 -mb-10">
        <p className="text-5xl font-extrabold text-accent">02</p>  
        <h1 className="text-2xl font-semibold">スマホとセットでよりお得に！</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center gap-y-10  p-10 border-4 bg-base-100 ">

            <div className="col-span-2 ">

                <h2 className="text-center">
                auひかりなどに対応していない集合住宅や地域の方でも安心です。BIGLOBE光ならauひかりサービスと同様のauスマートバリューがご利用できます。
                </h2>

        
            </div>

            <div className="col-span-2">
                 <Image src="/images/sample/ausmart_top2.webp" width={500} height={150} />
            </div>
       
    
            <div className="col-span-2">
            ひとりでも、家族でもおトク！画像
            </div>

            <div className="col-span-2">
            <Link href="campaign/#au-sv">
            <a className="btn">詳細</a>
            </Link>
            </div>

        </div>

        <h1 className="text-2xl font-semibold">IPv6対応で速度が速い</h1>
        <div className="grid grid-cols-2 justify-items-center gap-y-10  p-10 border-4 bg-base-100  ">

            <div className="col-span-2 ">

                <h2 className="text-center">
                ビッグローブ光なら超光速通信IPv6が無料でご利用できます。今ならIPv6対応ルーターが６ヶ月間無料で利用できます。
                </h2>
            </div>


            <div className="col-span-2">
            <p>IPv6とは説明亜エフェfエフェげふぇ</p>
            </div>

            <div className="col-span-2">
            <Image src="/images/sample/ipv6比較.webp" width={500} height={150} />
            </div>
       
            <div className="col-span-2">
                <p className="text-sm text-justify leading-relaxed">
                    詳細
            
                </p>
            </div> 

        </div>

        <h1 className="text-2xl font-semibold">引っ越しも安心の移転費用永年無料</h1>
        <div className="grid grid-cols-2 justify-items-center gap-y-10  p-10 border-4 bg-base-100 ">

            <div className="col-span-2 ">

                <h3 className="text-center">
                急な引っ越しや転勤が多い方でも安心！通常は15000円程かかる移転工事費が何度でも無料で利用できます。
                </h3>
            </div>

            <div className="col-span-2">
                引っ越し無料の画像
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