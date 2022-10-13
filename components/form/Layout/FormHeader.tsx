import Link from "next/link";

const FormHeader = () => {
    return (
        <>
        <div className="navbar bg-base-100 ">
           
        <div className="flex flex-row mx-auto space-x-10">

            <div className="">
            <Link href="/">
            <a className="normal-case md:text-lg"><img src="/vercel.svg" alt="" /></a>
            
            </Link>
            </div>
            <div className="">
            <h1>ビッグローブ光正規代理店株式会社リ・スターツ</h1>
            </div>  
        </div>
        </div>
        </>
    );
}

export default FormHeader;