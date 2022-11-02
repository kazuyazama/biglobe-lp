import Image from "next/image";

const Onayami = () => {
    return (
        <>
       

         
    
        <div>
            

            <h1 className="text-center text-xl tracking-widest md:text-3xl py-20 font-bold before:content-['Problem'] before:text-6xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">
                こんなお悩みありませんか？
            </h1>

            

            <div className="md:flex space-y-8 md:space-y-0 bg-base-100">
            <div className="basis-full relative">
                <p className="-mb-10 bg-slate-200 p-6 rounded-2xl w-3/4 h-1/4 mx-auto relative self-center flex items-center justify-center">ケータイがauだけど、au光が建物に対応していない、、、</p>
                {/* <span className="bg-primary before:content-['ケータイがauだけど、au光が対応していない、、、'] before:absolute before:inset-x-1/2 before:-translate-x-40 before:whitespace-nowrap "></span> */}
                <span className="rounded-full bg-slate-200 h-6 w-6 inline-flex absolute right-20 top-24 md:top-24"></span>
                <span className="rounded-full bg-slate-200 h-3 w-3 inline-flex absolute right-28 top-32 md:top-32"></span>
                {/* <span className="border-b-[30px] md:border-t-[30px] border-b-base-100 border-r-[0px] md:border-r-[30px] 
            border-l-[300px] md:border-l-[30px] 
            border-b-transparent border-r-transparent border-l-transparent absolute inset-x-1/2 -translate-x-1/2"></span> */}
                
            <figure className="py-5"><Image loader={({src}) => src} src="/main/onayami/悩み1.svg" alt="ケータイがauだけど、au光が建物に対応していない、、"　 width={500} height={350} layout='responsive' /></figure>
            </div>
            <div className="basis-full relative">
                <p className="-mb-10 bg-slate-200 p-6 rounded-2xl w-3/4 h-1/4 mx-auto relative flex items-center justify-center">オンラインゲームをやるからIPv6を無料で使いたい</p>
                
                <span className="rounded-full bg-slate-200 h-6 w-6 inline-flex absolute right-20 top-24 md:top-24 "></span>
                <span className="rounded-full bg-slate-200 h-3 w-3 inline-flex absolute right-28 top-32 md:top-32"></span>
            <figure className="py-5"><Image loader={({src}) => src} src="/main/onayami/悩み2.svg" alt="オンラインゲームをやるからIPv6を無料で使いたい" width={500} height={350}  layout='responsive' /></figure>
            </div>
            <div className="basis-full relative">
                <p className="-mb-10 text-center bg-slate-200 p-6 rounded-2xl w-3/4 h-1/4 mx-auto relative flex items-center justify-center">引っ越しするたびに工事費用がかかる、、、</p>
              
                <span className="rounded-full bg-slate-200 h-6 w-6 inline-flex absolute right-20 top-24 md:top-24"></span>
                <span className="rounded-full bg-slate-200 h-3 w-3 inline-flex absolute right-28 top-32 md:top-32"></span>
            <figure className="py-5"><Image loader={({src}) => src} src="/main/onayami/悩み3.svg" alt="引っ越しするたびに工事費用がかかる、、、"  width={500} height={350}  layout='responsive' /></figure>
            </div>
            </div>

            
         
            <div className="relative">
           
             <div className="w-full border-t-[100px] md:border-t-[240px] border-t-base-100 border-r-[300px] md:border-r-[1100px] 
            border-l-[300px] md:border-l-[1100px] 
            border-b-transparent border-r-transparent border-l-transparent absolute inset-x-1/2 -translate-x-1/2 drop-shadow-lg">
            </div>
            </div>
  
        </div>
        </>
        
    );
}

export default Onayami;