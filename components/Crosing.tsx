import Image from "next/image";

const Crosing = () => {
    return (
        <div className="flex items-end pt-10">
            {/* <div className="basis-1/3 "> */}
                {/* 不安を解消 キャンセルは工事前であれば可能です。ご不明な点があればまずはご相談ください。 */}
                {/* <Image src="/main/crosing/crosing2.png" width={300} height={200} layout='responsive'/> */}
            {/* </div> */}
            {/* <div className="basis-full">
                <Image src="/main/crosing/footer.svg" width={600} height={170} layout='responsive'  />
            </div> */}
            <div className="basis-full">
                <Image loader={({src}) => src} src="/main/crosing/不安を解消.svg" width={600} height={170} layout='responsive'  />
            </div>
          
        </div>
    );
}

export default Crosing;