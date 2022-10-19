import Image from "next/image";

const Onayami = () => {
    return (
        <>

         
    
        <div className="pt-20 mx-auto relative">
            <div className="">
            <Image src="/images/main/nayami.png" width={500} height={300} layout="responsive" className="z-10"  />
            </div>
            
            {/* <img src="/images/main/lp_pc.png" width="100%" className="absolute -translate-y-full top-60 z-10 -skew-y-12"  /> */}
         
            {/* こんなお悩みありませんか？
            ケータイがauだけど、au光が対応していない、、、
            ipV6を無料で使いたい
            引っ越しするたびに工事費用がかかる、、 */}
            <div className=" ">
            {/* <div className="border-t-[100px] md:border-t-[200px] border-t-base-100 border-r-[190px] md:border-r-[960px] 
            border-l-[190px] md:border-l-[960px] 
            border-b-transparent border-r-transparent border-l-transparent absolute inset-x-0 inset-y-1/2 ">
            </div>
            </div> */}
             <div className="border-t-[100px] md:border-t-[200px] border-t-base-100 border-r-[190px] md:border-r-[960px] 
            border-l-[190px] md:border-l-[960px] 
            border-b-transparent border-r-transparent border-l-transparent absolute inset-x-1/2 -translate-x-1/2 inset-y-2/3 md:inset-y-3/4 translate-y-3/4 ">
            </div>
            </div>
  
        </div>
        </>
        
    );
}

export default Onayami;