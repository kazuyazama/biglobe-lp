import Image from "next/image";

const Onayami = () => {
    return (
        <>
       

         
    
        <div className="mt-20 mx-auto">
            <div className="">
            <Image src="/images/main/nayami.png" width={500} height={300} layout="responsive" className="z-10"  />
            </div>
            
         
            {/* こんなお悩みありませんか？
            ケータイがauだけど、au光が対応していない、、、
            ipV6を無料で使いたい
            引っ越しするたびに工事費用がかかる、、 */}
            <div className="relative">
           
           
             <div className="w-full border-t-[80px] md:border-t-[200px] border-t-base-100 border-r-[280px] md:border-r-[1100px] 
            border-l-[280px] md:border-l-[1100px] 
            border-b-transparent border-r-transparent border-l-transparent absolute inset-x-1/2 -translate-x-1/2 inset-y-full  ">
            </div>
            </div>
  
        </div>
        </>
        
    );
}

export default Onayami;