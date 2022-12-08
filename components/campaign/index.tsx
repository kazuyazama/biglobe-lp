import Image from "next/image";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io"
import {Link as Scroll} from "react-scroll"




const Campaign = () => {
    return (
        <>

        <div className="pt-20 relative">
        <h1 className="text-center text-2xl tracking-widest lg:text-3xl font-semibold  before:content-['Campaign'] before:text-6xl before:absolute before:-translate-y-10 before:inset-x-0 before:opacity-10">キャンペーン</h1>
        <div className="flex justify-center pt-20 ">

          <div className="basis-full ">


            <div className="card card-compact lg:card-normal bg-base-100 shadow-xl">
            <h2 className="font-semibold bg-accent text-xl text-center py-3">
             当サイト限定！選べるキャンペーン
            </h2>
            <div className="card lg:card-side  rounded-t-none">
            <Link href="/campaignDetail">
            <figure className="w-full p-2">
              <Image loader={({src}) => src} 
              src="/main/campaign/限定キャンペーン.svg" 
              alt="当サイト限定のビッグローブ光キャンペーン！高額キャッシュバック(最大35,000円)または工事費無料+キャッシュバック(最大29,800円相当)のどちらかをお選びいただけるキャンペーンです！" 
              width={800} height={500} className="hover:scale-105 w-full hover:opacity-60" />
            </figure>
             </Link>

            <div className="card-body border-t lg:border-none border-primary">
                <h2 className="card-title">当サイトだけのお得なキャンペーン！</h2>
                <p>当サイト限定のビッグローブ光キャンペーン！高額キャッシュバック(最大35,000円)または
                  工事費無料+キャッシュバック(最大29,800円相当)のどちらかをお選びいただけるキャンペーンです！
                </p>
                <div className="card-actions justify-end">
                <Link href='/campaignDetail'>
                <button 
                className="btn btn-secondary btn-sm lg:btn-md px-8 lg:px-0 lg:w-1/3 before:content-['詳しく見る'] before:lg:text-lg  relative rounded-xl">
                <span className="text-xl absolute right-0.5 lg:right-2"><IoIosArrowForward /></span>
                </button>
                </Link>
                </div>
            </div>
            </div>


            </div>
          </div>
        </div>

        <div className="lg:flex justify-center space-y-5 lg:space-y-0 lg:space-x-5 pt-5">

        <div className="basis-1/3 ">
      
        <div className="card card-compact bg-base-100 shadow-xl ">
          <div className="bg-accent text-xl font-semibold py-2 text-center">ipV6ルーター無料特典</div>
        <Link href="/campaignDetail">
        <Image loader={({src}) => src} src="/main/campaign/IPv6.svg" alt="ビッグローブ光と同時申し込みでipV6ルーターが６ヶ月間無料レンタル可能" width={350} height={125} className="hover:scale-105 w-full hover:opacity-60" />
        </Link>
        <div className="card-body border-t border-primary ">
            <h2 className="card-title ">通常550円/月が６ヶ月間無料に！</h2>
            <p>ビッグローブ光と無線LAN付きルーターの同時申込で無線LAN付きルーターが６ヶ月間無料！</p>
            <div className="card-actions justify-end pt-5">
            <Link href="/campaignDetail/#ip-v6">
            <button className="relative btn btn-secondary btn-sm px-8 rounded-xl "> 
                <span className="">詳しく見る</span>
                <span className="text-lg absolute right-1"><IoIosArrowForward /></span>
            </button>
            </Link>
            </div>
        </div>
        </div>
        </div>

        <div className="basis-1/3">

        <div className="card card-compact bg-base-100 shadow-xl ">
          <div className="bg-accent text-xl font-semibold py-2 text-center">auスマートバリュー</div>
        <Link href="/campaignDetail">
        <Image loader={({src}) => src}  src="/main/campaign/au-smart-value.svg" alt="auスマートバリューで家族みんなのスマホが永年割引 1人あたり最大1100円/月割引"  width={350} height={125} className="hover:scale-105 w-full hover:opacity-60" />
        </Link>
        <div className="card-body border-t border-primary ">
            <h2 className="card-title ">auの携帯料金がお得に！</h2>
            <p>ビッグローブ光(ネット＋電話)とauスマートフォン等をセットでのご利用でau携帯電話のご利用料金が割引！</p>
            <div className="card-actions justify-end pt-5 lg:pt-0 2xl:pt-5">
            <Link href="/campaignDetail/#au-sv">
            <button className="relative btn btn-secondary btn-sm px-8 rounded-xl"> 
                <span className="">詳しく見る</span>
                <span className="text-lg absolute right-1"><IoIosArrowForward /></span>
            </button>
            </Link>
            </div>
        </div>
        </div>

          

      
        </div>

        <div className="basis-1/3">

        <div className="card card-compact bg-base-100 shadow-xl ">
          <div className="bg-accent text-xl font-semibold py-2 text-center">UQモバイル自宅セット割</div>
        <Link href="/campaignDetail">
        <Image loader={({src}) => src} src="/main/campaign/UQmobile.svg" alt="UQモバイル自宅セット割 ビッグローブ光とUQMoblieの同時利用で家族みんなのスマホが1人あたり最大858円割引" width={350} height={125} className="hover:scale-105 w-full hover:opacity-60" />
        </Link>
        <div className="card-body border-t border-primary ">
            <h2 className="card-title ">UQモバイルの携帯料金がお得に！</h2>
            <p>ビッグローブ光(ネット＋電話)とUQmobileをセットでのご利用でUQmobileのご利用料金が割引！</p>
            <div className="card-actions justify-end pt-5">
            <Link href="/campaignDetail/#uq-set">
            <button className="relative btn btn-secondary btn-sm px-8 rounded-xl"> 
                <span className="">詳しく見る</span>
                <span className="text-lg absolute right-1"><IoIosArrowForward /></span>
            </button>
            </Link>
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