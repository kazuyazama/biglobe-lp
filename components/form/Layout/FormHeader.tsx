import Link from "next/link";
import Image from "next/image";

const FormHeader = () => {
    return (
        <>
        <div className="overflow-x-hidden ">

        <div className="navbar bg-base-100 px-5 border-b border-primary">
           
        <div className="flex flex-row mx-auto lg:space-x-10 ">
            <div className="basis-2/3 lg:basis-auto">
            <Link href="/">
            <a className="normal-case flex">
                <Image loader={({src}) => src} src="/logo/BIGLOBE_logo_A-01.png" width={160} height={80} alt="BIGLOBE"  />
            </a>
            </Link>
            </div>
            <div className="basis-1/2 lg:basis-auto text-center">
            <span className="text-xs lg:text-base ">正規代理店</span>
            <span className="text-xs lg:text-base inline-block">株式会社リ・スターツ </span>
            </div>
        </div>
        </div>

        </div>
        </>
    );
}

export default FormHeader;