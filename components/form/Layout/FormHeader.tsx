import Link from "next/link";
import Image from "next/image";

const FormHeader = () => {
    return (
        <>
        <div className="overflow-x-hidden ">

        <div className="navbar bg-base-100 px-5">
           
        <div className="flex flex-row mx-auto md:space-x-10 ">
            <div className="basis-2/3 md:basis-auto">
            <Link href="/">
            <a className="normal-case text-2xl flex ">
                <Image src="/BIGLOBE_logo_A-01.png" width={160} height={80} alt=""  />
            </a>
            </Link>
            </div>
            <div className="basis-1/2 md:basis-auto text-center">
            <span className="text-xs md:text-base ">正規代理店</span>
            <span className="text-xs md:text-base inline-block">株式会社リ・スターツ </span>
            </div>
        </div>
        </div>

        </div>
        </>
    );
}

export default FormHeader;