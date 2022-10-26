import Image from "next/image";

const Crosing = () => {
    return (
        <div className="flex items-center">
            <div className="basis-1/2">不安を解消 キャンセルは工事前であれば可能です。ご不明な点があればまずはご相談ください。</div>
        <div className="basis-1/2"><Image src="/main/crosing/footer.svg" width={800} height={500} layout='responsive' /></div>
          
        </div>
    );
}

export default Crosing;