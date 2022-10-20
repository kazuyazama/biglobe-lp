const Faq = () => {
    return (
        <>
        <div className="text-center text-2xl font-semibold py-20 before:content-['Faq'] before:text-7xl before:absolute before:-translate-y-10 before:inset-x-2 before:opacity-10">よくある質問</div>

        <div className="flex flex-col space-y-6">

        <div tabIndex={0} className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100 ">
        <input type="checkbox" /> 
        <div className="collapse-title font-medium ">
        ビッグローブ光とはどんなサービスですか？
        </div>
        <div className="collapse-content "> 
        <p>
        ビッグローブ光は、NTT東日本・NTT西日本の光回線とBIGLOBEのプロバイダ接続サービスをひとつにまとめたサービスです（光コラボレーションモデル）。
        フレッツ光と同じ通信速度最大1Gbps※の高速光回線、充実したサポート、そして月々のお支払いをシンプルにお安くした料金体系が特長です。
        料金プラン詳細ページを見る
        ※ お住まいによっては、最大200Mbps、または100Mbpsの回線タイプとなることがあります。ビッグローブ光はベストエフォート型のサービスです。最大1Gbpsとは理論上の最大速度となり、お客さまのご利用環境や回線状況などにより、低下する場合があります。
        </p>
        </div>
        </div>

        <div tabIndex={1} className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100 ">
        <input type="checkbox" /> 
        <div className="collapse-title font-medium">
            転用とは何ですか？
        </div>
        <div className="collapse-content"> 
            <p>
            現在NTT東日本・NTT西日本の提供しているフレッツ光およびオプションサービスをご利用のお客さまが、当社の提供する光回線（「ビッグローブ光」）およびオプションサービスに契約を変更することを「転用」といいます。転用でお申し込みの場合の流れは下記ページからご確認いただけます。
            </p>
        </div>
        </div>
        <div tabIndex={2} className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" /> 
        <div className="collapse-title font-medium ">
            接続はどのようにすればよいですか？
        </div>
        <div className="collapse-content"> 
            <p>
            セットアップガイド（BIGLOBE設定シート）の手順のとおりに設定していただけば接続が行えます。
            会員サポートページでもご案内していますので、お困りの際はご確認ください。
            各種設定について詳しくはこちらをご確認ください。
            また、BIGLOBEカスタマーサポートでもご案内していますので、ご不明点の確認や諸々のお手続きなどにご活用ください。
            BIGLOBEカスタマーサポートについて詳しくはこちらをご確認ください。
            </p>
        </div>
        </div>
        <div tabIndex={3} className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" /> 
        <div className="collapse-title font-medium">
            インターネット接続や設定をしてほしいです。
        </div>
        <div className="collapse-content"> 
            <p>
            スタッフがお客さまのご自宅に訪問するBIGLOBE訪問サポート（有料）をご利用ください。インターネット設定やウイルス駆除、個人レッスンなどなどのメニューがございます。
            BIGLOBE訪問サポートについては下記ページをご確認ください。
            BIGLOBE訪問サポート詳細ページを見る
            </p>
        </div>
        </div>
        <div tabIndex={3} className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" /> 
        <div className="collapse-title  font-medium">
            乗り換え（転用）には工事が必要ですか？
        </div>
        <div className="collapse-content"> 
            <p>
            現在フレッツ 光ネクストをご利用いただいているお客さまは工事は必要ありません。
            フレッツ光のご契約が以下のタイプの場合、工事が必要となります。その際、別途工事費がかかります。
            NTT東日本エリア：Bフレッツ ニューファミリータイプ、フレッツ 光ライト（ファミリータイプ/マンションタイプ）
            NTT西日本エリア：Bフレッツ ファミリー100タイプ、Bフレッツ マンションタイプ、Bフレッツ ワイヤレスファミリータイプ、フレッツ・光プレミアム （ファミリータイプ/マンションタイプ）、フレッツ 光ライト（ファミリータイプ/マンションタイプ）
            開通までの詳しい流れは下記よりご確認いただけます。
            乗り換え（転用）の場合の開通までの流れを見る
            </p>
        </div>
        </div>
        <div tabIndex={3} className="collapse collapse-plus border border-primary bg-base-100 rounded-box hover:bg-sky-100">
        <input type="checkbox" /> 
        <div className="collapse-title  font-medium">
            工事日の日程はどのように決まるのでしょうか？
        </div>
        <div className="collapse-content"> 
            <p>
            お申し込みの際に、お電話でご希望の光回線のタイプや工事日などについて調整いたします。
            開通までの詳しい流れは下記よりご確認いただけます。
            新規お申し込みの場合の開通までの流れを見る
            </p>
        </div>
        </div>

        </div>


      

        

        </>
    );
}

export default Faq;