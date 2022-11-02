import Link from "next/link";

const Faq = () => {
    return (
        <>
        <div className="text-center text-xl tracking-widest font-bold py-20 before:content-['Faq'] before:text-6xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">よくある質問</div>

        <div className="flex flex-col space-y-6">

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100 ">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title font-medium  peer-checked:bg-sky-100 peer-checked:border-b border-primary">
        ビッグローブ光とはどんなサービスですか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4 "> 
        <p>
        ビッグローブ光は、NTT東日本・NTT西日本の光回線とBIGLOBEのプロバイダ接続サービスをひとつにまとめたサービスです（光コラボレーションモデル）。
        フレッツ光と同じ通信速度最大1Gbps※の高速光回線、充実したサポート、そして月々のお支払いをシンプルにお安くした料金体系が特長です。
        料金プラン詳細ページを見る
        ※ お住まいによっては、最大200Mbps、または100Mbpsの回線タイプとなることがあります。ビッグローブ光はベストエフォート型のサービスです。最大1Gbpsとは理論上の最大速度となり、お客さまのご利用環境や回線状況などにより、低下する場合があります。
        </p>
        </div>
        </div>

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100 ">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary">
            転用とは何ですか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p className="pb-2">
            現在NTT東日本・NTT西日本の提供しているフレッツ光およびオプションサービスをご利用のお客さまが、当社の提供する光回線（「ビッグローブ光」）およびオプションサービスに契約を変更することを「転用」といいます。転用でお申し込みの場合の流れは下記ページからご確認いただけます。
            </p>
            <span>東日本にお住まいの方⇨</span>
            <Link href="https://flets.com/app4/input/index/"><a className="link link-primary">NTT東日本公式HP</a></Link>
            <br/>
            <span>西日本にお住まいの方⇨</span>
            <Link href="https://flets-w.com/collabo/tenyou/entry/"><a className="link link-primary">NTT西日本公式HP</a></Link>
           
        </div>
        </div>

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100 ">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary">
            事業者変更とはなんですか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p className="pb-2">
            光コラボレーション事業者が提供する光回線サービスをご利用中のお客様が、ビッグローブ光およびオプションサービスに契約を変更することを「事業者変更」と言います。
            事業者変更でお申し込みの場合は、現在契約中の事業者が発行する「事業者変更承諾番号」が必要です。
            事業者変更でお申し込みの場合の流れは下記ページからご確認いただけます。
            </p>
            <span>東日本にお住まいの方⇨</span>
            <Link href="https://flets.com/app10/kaiji/"><a className="link link-primary">NTT東日本公式HP</a></Link>
            <br/>
            <span>西日本にお住まいの方⇨</span>
            <Link href="https://flets-w.com/collabo/change/"><a className="link link-primary">NTT西日本公式HP</a></Link>
            
        </div>
        </div>

        <div  className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary ">
            接続はどのようにすればよいですか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p>
            セットアップガイド（BIGLOBE設定シート）の手順のとおりに設定していただけば接続が行えます。
            会員サポートページでもご案内していますので、お困りの際はご確認ください。
            各種設定について<Link href="https://support.biglobe.ne.jp/settei/index.html"><a className="link link-primary">詳しくはこちら</a></Link>をご確認ください。
            また、BIGLOBEカスタマーサポートでもご案内していますので、ご不明点の確認や諸々のお手続きなどにご活用ください。
            BIGLOBEカスタマーサポートについて<Link href="https://support.biglobe.ne.jp/ask/index.html"><a className="link link-primary">詳しくはこちら</a></Link>をご確認ください。
            </p>
        </div>
        </div>

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary">
            現在、光コラボレーションモデルを使っているが、事業者変更ではなく新規で申し込みをしたい
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p>
            現在の光コラボレーションを解約してからであればビッグローブ光を新規で申し込み頂けます。
            その場合の手順等につきましては、<a href="tel:0120-197-802" className="underline text-primary">0120-197-802</a>までお電話して頂くか
            <Link href="/form/call"><a className="link link-primary">こちらから</a></Link>お問い合わせください。
    
           
            </p>
        </div>
        </div>

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title  font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary">
            転用には工事が必要ですか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p>
            現在フレッツ 光ネクストをご利用いただいているお客さまは工事は必要ありません。
            フレッツ光のご契約が以下のタイプの場合、工事が必要となります。その際、別途工事費がかかります。
            NTT東日本エリア：Bフレッツ ニューファミリータイプ、フレッツ 光ライト（ファミリータイプ/マンションタイプ）
            NTT西日本エリア：Bフレッツ ファミリー100タイプ、Bフレッツ マンションタイプ、Bフレッツ ワイヤレスファミリータイプ、フレッツ・光プレミアム （ファミリータイプ/マンションタイプ）、フレッツ 光ライト（ファミリータイプ/マンションタイプ）
           
            </p>
        </div>
        </div>

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title  font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary">
            事業者変更には工事が必要ですか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p className="pb-2">
            基本的には工事は必要ありません。詳しくは現在お使いの光コラボレーション事業者様にお問い合わせください。
            </p>
            <Link href="https://flets-w.com/collabo/list/index.php"><a className="link link-primary">光コラボレーション事業者一覧</a></Link>
           
        </div>
        </div>

        <div className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title  font-medium peer-checked:bg-sky-100 peer-checked:border-b border-primary">
            工事日の日程はどのように決まるのでしょうか？
        </div>
        <div className="collapse-content peer-checked:bg-base-100 peer-checked:py-4"> 
            <p>
            お申し込みの際に、お電話でご希望の工事日などについて調整いたします。基本的にはお客様の希望日時でご案内可能です。
            その後、BIGLOBEより１〜２週間程度でSMSもしくはお電話にて工事をご案内いたします。お住まいの建物やエリアによっては調査が必要となり、
            数ヶ月程度工事に時間を要する場合がございます。予めご了承ください。

            </p>
        </div>
        </div>

        </div>


      

        

        </>
    );
}

export default Faq;