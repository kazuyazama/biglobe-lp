import Image from "next/image";

const Onayami = () => {
    return (
        <div className="pt-20">
            <Image src="/images/main/nayami.png" width={500} height={300} layout="responsive" />
            {/* こんなお悩みありませんか？

            ケータイがauだけど、au光が対応していない、、、
            ipV6を無料で使いたい
            引っ越しするたびに工事費用がかかる、、 */}
        </div>
    );
}

export default Onayami;