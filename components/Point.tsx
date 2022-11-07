import {FaRegBuilding} from "react-icons/fa";
import {BsHouse} from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";


const Point = () => {
    return (
        <>
        {/* <div className="relative">
        <div className="border-t-[250px] border-t-base-100 border-r-[100px] md:border-r-[960px] 
        border-l-[100px] md:border-l-[960px] 
        border-b-transparent border-r-transparent border-l-transparent ">
           
    
        </div>
        </div> */}
        <h1 className="text-center text-xl tracking-widest md:text-3xl pb-10 pt-16 md:pt-32 md:pb-20 font-bold before:content-['Point'] before:text-6xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">ビッグローブ光なら解決！４つのポイント</h1>

      

        <div className="flex flex-col ">

        <div className="flex items-center space-x-3 md:space-x-5 ">
        <p className="text-4xl md:text-5xl font-extrabold text-accent">01</p>  
        <h1 className="text-xl md:text-2xl font-semibold">月額料金が安い</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center gap-y-10 border-4 py-10 px-4 md:px-10 bg-base-100 rounded-xl ">


            <div className="col-span-2 ">
                <h2 className="text-center text-">
                BIGLOBE 光なら、月額3,980円(税込4,378円)からご利用いただけます！
                回線とプロバイダ料金込みなのでとってもおトクです！
                </h2>
            </div>


            <div className="col-span-2 md:col-span-1 w-full md:w-5/6 ">

            <div className="card card-side bg-sky-50 shadow-2xl items-center border-2 border-primary card-compact md:py-2">
            <div className="pl-4 md:pl-10"><FaRegBuilding  className="text-4xl md:text-7xl" /></div>
            <div className="card-body items-center px-0">
                <h2 className="card-title">マンションタイプ</h2>
                <h1 className="font-semibold self-center"><span className="text-2xl md:text-5xl text-secondary pr-2">4,378円</span>円 / 月</h1>
            
            </div>
            </div>
            </div>

            <div className="col-span-2 md:col-span-1 w-full md:w-5/6 ">

            <div className="card card-side bg-sky-50 shadow-2xl items-center border-2 border-primary card-compact md:py-2">
            <div className="pl-4 md:pl-10"><BsHouse className="text-4xl md:text-7xl" /></div>
            <div className="card-body items-center px-0">
                <h2 className="card-title">戸建タイプ</h2>
                <h1 className="font-semibold self-center"><span className="text-2xl md:text-5xl text-secondary pr-2">5,478円</span>円 / 月</h1>

            </div>
            </div>
            </div>

            <div className="col-span-2">
                <div className="-mx-10 md:-mx-0">
                <Image loader={({src}) => src} src="/main/point/all-in.svg" alt="BIGLOBE 光なら、月額3,980円(税込4,378円)からご利用いただけます！ 回線とプロバイダ料金込みなのでとってもおトクです！" width={700} height={400}  />
                </div>
                {/* <div className="w-full hidden md:block">
                <Image loader={({src}) => src} src="/main/point/all-in.svg" alt="BIGLOBE 光なら、月額3,980円(税込4,378円)からご利用いただけます！ 回線とプロバイダ料金込みなのでとってもおトクです！" width={700} height={400}  />
                </div> */}
            </div>


            <div className="col-span-2">

                <p className="text-xs text-justify leading-relaxed">
                特に注記のない限り、記載の金額は全て税込金額です。消費税計算の都合上、実際の請求額とは異なる場合があります。
                1 集合住宅にお住まいでも、東日本エリアでは3戸以下、西日本エリアでは5戸以下の集合住宅の場合、ファミリータイプの料金となります。
                2 東日本エリアでギガビットに対応したWi-Fiルータ（1ギガ対応無線LANルータ）をレンタルでご利用される場合、別途機器利用料550円/月がかかります。
                ※BIGLOBE光3年プランの場合の料金です。BIGLOBE 光 3年自動更新プランの場合、契約期間は3年間です。契約期間満了月の末日までに解約が完了しなかった場合、本サービスの契約は3年単位での自動更新となります。契約期間満了月の当月・翌月・翌々月以外で解約をされた場合、ファミリータイプ：4230円　マンションタイプ：3360円を解除料（不課税）としてご請求します。但し、お引っ越し先でも継続して利用
                していただく場合は解除料は発生しません。詳しくはWeb（https://u.softbank.jp/3KFwQRZ）をご確認ください。
                </p>

            </div>

            {/* <div className="col-span-2 ">

            <div className="text-xl text-center">+</div>

            <h2 className="text-xl text-center">当サイト限定！キャッシュバックキャンペーン</h2>

            <p className="text-center">
            当サイトからお申し込み頂くと
            高額キャッシュバック(最大35,000円)または 工事費無料+キャッシュバック(最大29,800円相当)のどちらか
            がお選びいただけます。
            </p>

            </div>

            <div className="col-span-2">
                ↑の詳細画像とリンク
            </div> */}

        </div>

        <div className="flex items-center space-x-3 md:space-x-5 pt-10 ">
        <p className="text-4xl md:text-5xl font-extrabold text-accent">02</p>  
        <h1 className="text-xl md:text-2xl font-semibold whitespace-nowrap">スマホとセットでよりお得に!</h1>
        </div>

        

    
 
        <div className="grid grid-cols-2 justify-items-center gap-y-10 border-4 py-10 px-4 md:px-10 bg-base-100 rounded-xl">


            <div className="col-span-2 ">

                <h2 className="text-center">
                auひかりなどに対応していない集合住宅や地域の方でも安心です。BIGLOBE光ならauひかりサービスと同様のauスマートバリューがご利用できます。
                </h2>
            
            </div>

            <div className="col-span-2 space-y-5 text-center">
                <h1 className="text-lg md:text-2xl font-semibold">auスマートバリュー</h1>
                <div className="shadow-lg border-2 border-primary bg-sky-50 rounded-xl md:hidden">
                 <Image loader={({src}) => src} src="/main/campaign/au-smart-value.svg" width={600} height={230} />     
                </div>
                <div className="shadow-lg border-2 border-primary bg-sky-50 rounded-xl hidden md:block">
                 <Image loader={({src}) => src} src="/main/campaign/au-smart-value.svg" width={600} height={200} />     
                </div>
            </div>

            <div className="col-span-2 ">

          

            </div>
       
    
            

            <div className="col-span-2 text-center space-y-5 ">

            <h1 className="text-lg md:text-2xl font-semibold">ひとりでも家族でもお得！</h1>   

            <div className="md:hidden">
            <Image loader={({src}) => src} src="/main/campaign/ひとりでも家族でもお得.svg" width={700} height={300} />     
            </div>
            <div className="hidden md:block">
            <Image loader={({src}) => src} src="/main/campaign/ひとりでも家族でもお得.svg" width={700} height={250} />     
            </div>

            <p className="text-start md:px-20">
            一人でも家族でも、同居家族が割引き対象です。
            さらに50歳以上なら離れて暮らす家族も割引き対象に。
            最大10回線まで、1回線あたりの月々のauスマホなどの月額利用料金が割引きされます。
            </p>

            </div>


            <div className="col-span-2">
            <Link href="campaignDetail/#au-sv">
            <a className="btn btn-wide btn-primary rounded-xl text-slate-100">詳細</a>
            </Link>
            </div>

        </div>

       

        <div className="flex items-center space-x-3 md:space-x-5 pt-10">
        <p className="text-4xl md:text-5xl font-extrabold text-accent">03</p>  
        <h1 className="text-xl md:text-2xl font-semibold">IPv6対応で速度が速い</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center gap-y-10  py-10 px-4 md:px-10 border-4 bg-base-100 rounded-xl  ">

            <div className="col-span-2 ">

                <h2 className="text-center">
                ビッグローブ光なら超光速通信IPv6が無料でご利用できます。今ならIPv6対応ルーターが６ヶ月間無料で利用できます。
                </h2>
            </div>


            <div className="col-span-2 ">

            <div className="flex flex-col md:flex-row col-span-2 gap-4 md:gap-0 justify-center ">
            <div className="basis-1/3 block md:hidden">
            <Image loader={({src}) => src} src="/main/point/IPv4ver.svg" width={600} height={350}  />
            </div>
            <div className="hidden md:block basis-1/3">
            <Image loader={({src}) => src} src="/main/point/IPv4ver.svg" width={500} height={350}  />
            </div>
            <div className="basis-1/3 block md:hidden ">
            <Image loader={({src}) => src} src="/main/point/IPv6ver.svg" width={600} height={350}  />
            </div>
            <div className="hidden md:block basis-1/3 ">
            <Image loader={({src}) => src} src="/main/point/IPv6ver.svg" width={500} height={350}  />
            </div>
        
            </div>

            </div>
            {/* <div>
            <Image loader={({src}) => src} src="/main/Point/IPv6ver.svg" width={600} height={350} />
            </div> */}
            
           
            <div className="col-span-2">
            <p>回線速度はフレッツ光と同じ最大1Gbpsで快適です。</p>
            </div>

            <div className="col-span-2">
            <figure className="-mx-3">
            <Image loader={({src}) => src} src="/main/point/フレッツ光と同じ速度.svg" width={600} height={250}   />   
            </figure>
            {/* <figure className="block md:hidden">
            <Image loader={({src}) => src} src="/main/point/フレッツ光と同じ速度.svg" width={330} height={150} layout='fixed' />   
            </figure> */}
     
            </div>

            <div className="col-span-2">
            <p>※ お住まいによっては、最大200Mbps、または100Mbpsの回線タイプとなることがあります。
            ビッグローブ光はベストエフォート型のサービスです。最大1Gbpsとは理論上の最大速度となり、
            お客さまのご利用環境や回線状況などにより、低下する場合があります。
            </p>
            </div>

            
       
            <div className="col-span-2">
                <p className="text-sm text-justify leading-relaxed">
                    詳細
            
                </p>
            </div> 

        </div>

        <div className="flex items-center space-x-3 md:space-x-5 pt-10">
        <p className="text-4xl md:text-5xl font-extrabold text-accent">04</p>  
        <h1 className="text-xl md:text-2xl font-semibold whitespace-nowrap">引っ越しも安心!移転費用無料</h1>
        </div>


        <div className="grid grid-cols-2 justify-items-center gap-y-10  py-10 px-4 md:px-10 border-4 bg-base-100 rounded-xl ">

            <div className="col-span-2 ">

                <h3 className="text-center">
                急な引っ越しや転勤が多い方でも安心！通常は15000円程かかる移転工事費が何度でも無料で利用できます。
                </h3>
            </div>

            <div className="col-span-2 -mx-2">
            <Image loader={({src}) => src} src="/main/point/引っ越し無料.svg" width={600} height={250}  /> 
            </div>

       
            <div className="col-span-2 ">
                <p className="text-sm text-justify leading-relaxed">
                ※引っ越し先で継続利用されることが条件です。
                土曜日、日曜日、祝日（国民の祝日に関する法律に定める休日）に工事を行う場合は、3,300円の追加費用がかかります。
                追加オプション工事やビッグローブ光テレビ等のオプションサービスの工事費は別途かかります。
            
                </p>
            </div> 

        </div>

     
      
       

        </div>
       
            
  

        </>
       
    );
}

export default Point;