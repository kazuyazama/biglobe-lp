import Link from "next/link";
import {AiOutlineForm} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {IoIosArrowDroprightCircle} from "react-icons/io"




const ContactSection = () => {

 
    return (
        <>
         <div className="md:flex flex-row justify-center md:space-x-5">
         
            <div className="pb-5 md:pb-0 md:text-xl 2xl:text-2xl font-semibold flex flex-col items-center">
                <h1 className="">当サイトからのお申し込みで
                <span className="after:content-['35000円'] after:text-secondary after:font-bold after:text-lg after:md:text-3xl " >
                最大</span>
                {/* <span className="text-secondary font-bold text-lg md:text-3xl">35,000円</span> */}
                お得!</h1>
                <h1 className="text-primary text-xs md:text-xl">WEBお申し込みは２４時間受付中!</h1>
            </div>

            <div className="flex space-x-3 md:space-x-5 justify-center">

            <div className="">
            <Link href="/form/web">
            <button className="w-full px-2 btn btn-secondary md:btn-wide lg:btn-lg rounded-full space-x-2 md:space-x-5 hover:scale-105 hover:transition duration-300 ease-in-out relative drop-shadow-xl border-4 border-double border-base-100">
         
                <AiOutlineForm className="text-xl md:text-3xl md:absolute left-6" />
    
                <span className=" md:text-xl">webお申し込み</span>
               
                <IoIosArrowDroprightCircle className="text-xl md:text-2xl md:absolute right-3" />
               
            </button>
            </Link>
            </div>
            <div className="">
            <Link href="/form/call">
            <button className="w-full px-2 btn btn-primary md:btn-wide lg:btn-lg rounded-full space-x-2 md:space-x-5 hover:scale-105 hover:transition duration-300 ease-in-out relative drop-shadow-xl border-4 border-double border-base-100" >
                <FiPhoneCall className="text-xl md:text-3xl text-slate-100 md:absolute left-9"  />
                <span className="text-slate-100 md:text-xl ">でんわで相談</span> 
                <IoIosArrowDroprightCircle className="text-xl md:text-2xl text-slate-100 md:absolute right-3 "/>
            </button>
            </Link>
            </div>

            </div>

            

           



        </div>
        {/* <div className="grid grid-cols-6 py-20  ">
            <div className="col-span-3 text-center self-center">当社限定キャンペーンなら最大68,000円おトク！WEB申込は２４時間受付！</div>
            <div className="flex justify-between space-x-10">
            <button className="btn btn-secondary btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg">web申込</button>
            <button className="btn btn-accent btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg">電話相談</button>
            </div>
        </div> */}
        </>
    );
}

export default ContactSection;