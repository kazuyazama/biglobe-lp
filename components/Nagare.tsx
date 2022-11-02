import {MdArrowForwardIos} from "react-icons/md"
import {IoIosArrowForward} from "react-icons/io"

import Image from "next/image";


const Nagare = () => {
    return (
        <>
        <div className="text-center text-2xl md:text-3xl py-20 font-semibold before:content-['Flow'] before:text-7xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10"><h1>利用までの流れ</h1></div>
    

        <div className="flex flex-col md:flex-row justify-evenly items-center space-y-5 md:space-y-0">
            <div className="basis-1/5">
            <div className="card card-compact bg-base-100 shadow-xl h-96 ">
                
            <figure className="bg-primary h-48"><Image loader={({src}) => src} src="/main/nagare/web申し込み2.svg" alt="お申し込み" width={250} height={150} /></figure>
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">お申し込み</h2>
                <p>お電話またはwebフォームよりお申し込みください。</p>
                <div className="card-actions ">
                <div className="flex justify-center mx-3 space-x-1">
                <a href="tel:0120-197-802" className=" btn btn-primary  text-slate-100 before:content-['電話する'] relative btn-circle w-1/2 px-2">
                <span className="absolute right-0 2xl:right-0"><IoIosArrowForward /></span>
                </a>
                <a className=" btn btn-secondary  before:content-['webフォーム'] relative btn-circle  w-3/4 px-2">
                <span className="absolute right-0 2xl:right-"><IoIosArrowForward /></span>
                </a>
                </div>

                 
            
                </div>
            </div>
            </div>
            </div>

            <div className="basis-1/8 rotate-90 md:-rotate-0"><MdArrowForwardIos className="text-2xl"/> </div>

            <div className="basis-1/5">
            <div className="card card-compact bg-base-100 shadow-xl h-96">
            <figure className="bg-primary h-48"><Image loader={({src}) => src} src="/main/nagare/内容確認連絡.svg" alt="確認" width={300} height={200} /></figure>
          
            <div className="card-body items-center text-center">
                <h2 className="card-title">確認</h2>
                <p>弊社より確認のお電話をさせていただきます。後日、工事日程をご案内します。</p>
               
            </div>
            </div>
            

            </div>

            <div className="basis-1/8 rotate-90 md:-rotate-0"><MdArrowForwardIos className="text-2xl"/> </div>
        
            <div className="basis-1/5">
            <div className="card card-compact bg-base-100 shadow-xl  h-96">
            <figure className="bg-primary h-48"><Image loader={({src}) => src} src="/main/nagare/工事.svg" alt="開通工事" width={300} height={200} /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">開通工事</h2>
                <p>工事業者がご自宅にお伺いし、回線の開通に必要な工事を実地致します。</p>
                
            </div>
            </div>
            </div>
            <div className="basis-1/8 rotate-90 md:-rotate-0"><MdArrowForwardIos className="text-2xl"/> </div>
            <div className="basis-1/5">

            <div className="card card-compact bg-base-100 shadow-xl h-96">
            <figure className="bg-primary h-48"><Image loader={({src}) => src} src="/main/nagare/開通2.svg" alt="利用開始" width={250} height={150} /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">利用開始</h2>
                <p>接続設定をしていただいた後、インターネットをお使いいただけます。</p>
               
            </div>
            </div>
            </div>
        </div>


        </>
    );
}

export default Nagare;