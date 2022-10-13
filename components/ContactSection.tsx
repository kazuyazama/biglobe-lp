import Link from "next/link";

const ContactSection = () => {

 
    return (
        <>
         <div className="md:flex flex-row justify-center md:space-x-5">
         
            <div className="pb-5 md:pb-0 md:text-2xl font-semibold flex flex-col items-center">
                <h1>当社限定キャンペーンなら最大29,800円おトク！</h1>
                <h1 className="text-primary">WEB申込は２４時間受付！</h1>
            </div>

            <div className="flex space-x-5 justify-center">

            <div className="">
            <Link href="/form/web">
            <button className="btn btn-secondary md:btn-wide md:btn-md lg:btn-lg w-40">web申込</button>
            </Link>
            </div>
            <div className="">
            <Link href="/form/call">
            <button className="btn btn-primary md:btn-wide md:btn-md lg:btn-lg w-40">電話相談</button>
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