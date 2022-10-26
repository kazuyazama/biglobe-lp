import Image from "next/image";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io"


const Campaign = () => {
    return (
        <>

        <div className="pt-20 relative">
        <h1 className="text-center text-2xl md:text-3xl font-semibold  before:content-['Campaign'] before:text-7xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">キャンペーン</h1>
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
                <p>当サイト限定のビッグローブ光キャンペーン！高額キャッシュバック(最大35,000円)または
                  工事費無料+キャッシュバック(最大29,800円相当)のどちらかをお選びいただけるキャンペーンです！
                </p>
                <div className="card-actions justify-center md:justify-end">
                <Link href='/campaignDetail'>
                <button 
                className="btn btn-secondary btn-wide before:content-['詳しく見る'] before:text-lg relative">
                <span className="text-xl absolute right-2"><IoIosArrowForward /></span>
                </button>
                </Link>
                </div>
            </div>
            </div>


            </div>
          </div>
        </div>

        <div className="md:flex justify-center space-y-5 md:space-y-0 md:space-x-5 pt-5">

        <div className="basis-1/3 ">
      
        <div className="card card-compact bg-base-100 shadow-xl ">
          <div className="bg-accent text-xl font-semibold py-2 text-center">ipV6ルーター無料特典</div>
        <Link href="/campaignDetail">
        <Image src="/main/campaign/ipv6.svg" alt="ipV6ルーター無料" width={350} height={125} className="hover:scale-105 w-full hover:opacity-60" />
        </Link>
        <div className="card-body border-t border-primary">
            <h2 className="card-title ">IPv6ルーターがレンタル無料！</h2>
            <p>ビッグローブ光と無線LAN付きルーターの同時申込で無線LAN付きルーターが６ヶ月間無料に</p>
            <div className="card-actions justify-end pt-3">
            <Link href="/campaignDetail">
            <button className="relative btn btn-secondary btn-sm px-8 "> 
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
        <Image src="/main/campaign/au-smart-value.svg" alt="ipV6ルーター無料" width={350} height={125} className="hover:scale-105 w-full hover:opacity-60" />
        </Link>
        <div className="card-body border-t border-primary">
            <h2 className="card-title ">auの携帯料金がお得に！</h2>
            <p>ビッグローブ光(ネット＋電話)とauスマートフォン等をセットでのご利用でau携帯電話のご利用料金が割引！</p>
            <div className="card-actions justify-end pt-3">
            <Link href="/campaignDetail">
            <button className="relative btn btn-secondary btn-sm px-8 "> 
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
        <Image src="/main/campaign/UQmobile.svg" alt="ipV6ルーター無料" width={350} height={125} className="hover:scale-105 w-full hover:opacity-60" />
        </Link>
        <div className="card-body border-t border-primary">
            <h2 className="card-title ">UQモバイルの携帯料金がお得に！</h2>
            <p>ビッグローブ光(ネット＋電話)とUQmobileをセットでのご利用でUQmobileのご利用料金が割引！</p>
            <div className="card-actions justify-end pt-3">
            <Link href="/campaignDetail">
            <button className="relative btn btn-secondary btn-sm px-8 "> 
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