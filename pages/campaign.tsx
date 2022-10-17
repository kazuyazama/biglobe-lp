import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import FormLayout from "../components/form/Layout";
import Image from "next/image";

const Campaign:NextPageWithLayout = () => {
    return (
        <>
        {/* 参考ページ：https://www.biglobe-hikari.net/campaign/ */}
        <div className="overflow-x-hidden ">
        <section className='container mx-auto md:px-20 px-5'>
        <div className="">
            <h1>BIGLOBE 光 キャンペーンのご案内</h1>
        </div>

        <div>
            <p>
            ビッグローブ光ならお得がいっぱい！
            現在開催中のお得なキャンペーンや割引をご紹介します。
            </p>

        </div>

        <div className="grid grid-cols-6 justify-items-center">

            <div className="col-span-6">
            現在、当サイトからお申し込みでお得なキャンペーンが適用されます！
            下記2つからお好きなキャンペーンをお選びいただけます。
            </div>
            <div className="col-span-3">高額キャッシュバック</div>
            <div className="col-span-3">工事費割引+キャッシュバック</div>

            <div className="col-span-6">
                <h1>選べるキャンペーン【その1】高額キャッシュバックキャンペーン</h1>
                <div>特典１の内容</div>
                <p>特典１の詳細</p>
            </div>


            <div className="col-span-6 w-full ">
                <ul className="outline outline-primary rounded-2xl flex-col items-center justify-between my-20 ">

                <li className="flex justify-center space-x-10 border-b-2 py-5">
                    <div> 新規お申込み</div>
                    <div>37,000円 現金キャッシュバック</div>
                </li>
                <li className="flex justify-center space-x-10 border-b-2 py-5">
                    <div>他社転用</div>
                    <div>37,000円 現金キャッシュバック</div>
                </li>
                <li className="flex justify-center space-x-10 py-5">
                    <div>  事業者変更</div>
                    <div>37,000円 現金キャッシュバック</div>
                </li>

                </ul>
             </div>

             <div className="col-span-6">
                <h1>選べるキャンペーン【その2】工事費無料+キャッシュバックキャンペーン</h1>
                <div>特典１の内容</div>
                <p>特典１の詳細</p>
            </div>

            {/* <div className="col-span-6 w-full ">
                <div className="outline outline-primary rounded-2xl flex-col items-center justify-evenly my-20 ">

                <div className="flex justify-center space-x-10 border-b-2 py-5 bg-amber-200">
                    <div> 新規お申込み</div>
                    <div>37,000円 現金キャッシュバック+工事費無料</div>
                </div>
                <div className="flex justify-center space-x-10 border-b-2 py-5">
                    <div>他社から転用</div>
                    <div>37,000円 現金キャッシュバック+工事費無料</div>
                </div>
                <div className="flex justify-center space-x-10 py-5">
                    <div>  事業者変更</div>
                    <div>37,000円 現金キャッシュバック+工事費無料</div>
                </div>

                </div>
             </div> */}

            <div className="col-span-6 w-full ">

                <ul className="outline outline-primary rounded-2xl">

                <li className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">新規お申込み</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>37,000円 現金キャッシュバック+工事費無料</p>
                    </div>
                </li>
                <li className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">他社から転用</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>37,000円 現金キャッシュバック+工事費無料</p>
                    </div>
                </li>
                <li className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3">
                        <p className="">事業者変更</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3">
                        <p>37,000円 現金キャッシュバック+工事費無料</p>
                    </div>
                </li>

                </ul>
            
             </div>

             <div className="col-span-6 justify-self-start">
                <h2>当社キャッシュバックの特徴</h2>
                <ul>
                    <li>開通したら最短で２ヵ月後に現金でお振込いたします！
                        ※遅くても３ヵ月後には全員もらえます</li>
                    <li>お申込みの際にお振込口座を伺うので、キャッシュバックの申請モレは一切なし！
                        キャッシュバック還元率１００％です！</li>
                    <li>不必要なオプションには一切入る必要はありません！</li>
                </ul>
             </div>

             <div className="col-span-6 justify-self-start">
                <h2>対象者</h2>
                <ul>
                    <li>開通したら最短で２ヵ月後に現金でお振込いたします！
                        ※遅くても３ヵ月後には全員もらえます</li>
                    <li>お申込みの際にお振込口座を伺うので、キャッシュバックの申請モレは一切なし！
                        キャッシュバック還元率１００％です！</li>
                    <li>不必要なオプションには一切入る必要はありません！</li>
                </ul>
             </div>

             <div className="col-span-6 justify-self-start">
                <h2>適用条件・注意事項</h2>
                <ul>
                    <li>開通したら最短で２ヵ月後に現金でお振込いたします！
                        ※遅くても３ヵ月後には全員もらえます</li>
                    <li>お申込みの際にお振込口座を伺うので、キャッシュバックの申請モレは一切なし！
                        キャッシュバック還元率１００％です！</li>
                    <li>不必要なオプションには一切入る必要はありません！</li>
                </ul>
             </div>

             <div className="col-span-6">
                <h1>無線LAN付IPv6対応ルータ月額料金無料特典</h1>
                <div>特典１の内容、画像
                </div>
                <p>特典１の詳細</p>
            </div>

            <div className="col-span-6 w-full ">

                <h1>特典適用後の料金詳細</h1>

                <div className="outline outline-primary rounded-2xl">

                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className=""></p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>特典適用後料金</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">機器利用料</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>6カ月間 0円/月</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3">
                        <p className="">機器返送手数料</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3">
                        <p>6カ月間 0円/月</p>
                    </div>
                </div>

                </div>

            </div>

            <div className="col-span-6">
                <h1>注意事項</h1> 
                <p>
                機器解約時には、返送手数料（解約手数料）として1,430円（機器返却送料含む）がかかりますが特典により無料となります。解約から1カ月を過ぎても機器が返却されない場合、端末代金相当額としてAterm WG1200HS3の場合は 6,600円が請求されます。
                接続機器（無線LAN付き）は概ね以下日程で発送されます。
                －回線新規の場合
                概ね開通工事の前※開通工事後となる場合もあります（不達の場合、工事予定日を前倒し変更した場合など）
                －転用の場合
                NTT東日本エリアの場合、概ねビッグローブ光への切り替え前
                NTT西日本エリアの場合、概ねビッグローブ光への切り替え後7日以内
                ビッグローブ光と同時申し込みの場合、接続機器（無線LAN付き）の契約開始日は、「機器の着荷をビッグローブが認識した日」と「ビッグローブ光の契約開始を認識した日」のうち遅い方の日となります。
                接続機器（無線LAN付き）の着荷がビッグローブ光の契約開始後となった場合は、着荷日を起点として接続機器（無線LAN付き）の月額料金と値引きが開始します。
                ビッグローブ光をキャンセルした場合、接続機器（無線LAN付き）のお申込みもキャンセルとなります。接続機器（無線LAN付き）の着荷後、ビッグローブ光をキャンセルされた場合、返却キットがお客様に送付されます。返却に関わる代金は不要です。
                接続機器（無線LAN付き）を 使った高速接続サービス（IPv6接続（IPoE方式））をご利用の場合、「固定IPアドレスオプション／ダイナミックDNSサービス」「一部通信型ゲームなど特定 ポートを使用するサービスまたは複数のユーザでIPアドレスを共有すると利用できないサービス」 「外部サーバへの公開」が利用できなくなります。
                機器は予告なく変更となる場合があります。
                </p>
            </div>

            <div className="col-span-6" id="au-sv">
                <h1>auスマートバリュー</h1>
                <div>特典１の内容、画像
                </div>
                <p>特典１の詳細</p>
            </div>

            <div className="col-span-6 w-full ">

                <h1>割引額と対象の料金プラン</h1>

                <div className="outline outline-primary rounded-2xl">

                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">料金プラン</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>毎月の割引額</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">使い放題MAX 5G</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>6カ月間 0円/月</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3">
                        <p className="">ピタットプラン 5G</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3">
                        <p>6カ月間 0円/月</p>
                    </div>
                </div>

                </div>

                <div className="alert shadow-lg">割引額は対象の料金プランによって異なりますので、auサイトをご確認ください。</div>
               
            </div>


            <div className="col-span-6">
            ひとりでも、家族でもおトク！
            </div>

            <div className="col-span-3">aa</div>
            <div className="col-span-3">bbb</div>

            <div className="col-span-6">
                <h3>適用条件</h3>
                <p>以下の条件(1)(2)を両方満たす方がauスマートバリューにお申し込みできます。</p>

                <ul>
                    <li>auスマートフォン(5G)、auスマートフォン(4G)、auケータイ、4G LTEタブレットで対象の料金プランにご加入している方</li>
                    <li>「ビッグローブ光」「ビッグローブ光電話」にお申し込みされた方</li>
                </ul>

                <h3>お申し込みについて</h3>
                <p>ご契約はご自宅のインターネットサービス1回線につき、au携帯電話(タブレット・PC含む)合計10回線(またはau ホームルーター 5G/au スマートポートなどの対象のルーターサービスの場合1回線につき、au携帯電話合計9回線)までです。「auスマートバリュー」をご契約の回線が「家族割プラス」グループまたはUQ mobileの「自宅セット割」グループにも加入している場合、各グループにご加入のau/UQ携帯電話も回線数のカウントに含まれます。ご自宅のインターネットサービス(au ホームルーター 5G/au スマートポートなどの対象のルーターサービス含む)とau携帯電話(タブレット・PC含む)のご契約者が同一姓・同一住所の場合、お申し込みできます。50歳以上のご家族の場合は、対象のご自宅のインターネットサービス(「ネット＋電話」、「ネット＋テレビ」 、「テレビ＋電話」 )にご契約している住所と別住所でもお申し込みできます。別姓やau携帯電話(タブレット・PC含む)が累計5回線以上の場合はご家族・同一住所であることの証明書が必要です(別住所で50歳以上はご家族の証明書のみ)。</p>
                
                <h3>割引適用についての注意事項</h3>

                <p className="border p-3">
                ご契約はご自宅のインターネットサービス1回線につき、au携帯電話(タブレット含む)合計10回線までです。「auスマートバリュー」をご契約の回線が「家族割プラス」グループまたはUQ mobileの「自宅セット割」グループにも加入している場合、各グループにご加入のau/UQ携帯電話も回線数のカウントに含まれます。ご自宅のインターネットサービスとau携帯電話(タブレット含む)のご契約者が同一姓・同一住所の場合、お申し込みできます。50歳以上のご家族の場合は、対象のご自宅のインターネットサービス(「ネット＋電話」、「ネット＋テレビ」 、「テレビ＋電話」 )にご契約している住所と別住所でもお申し込みできます。別姓やau携帯電話(タブレット含む)が累計5回線以上の場合はご家族・同一住所であることの証明書が必要です。
                auスマートバリューのお申し込み翌月以降から割引適用となります。
                スマホセット割ご加入の方がauスマートバリューを申し込みされた場合、自動的にauスマートバリューの割引に切り替わります。ただしauスマートバリュー適用前にスマホセット割を廃止した場合、前月末をもってスマホセット割は終了となり、auスマートバリューは翌月から割引が適用となります。
                auスマートバリューご加入から2年間の割引(2,200円/月(税込)、1,551円/月(税込)、1,027円/月(税込))適用は、対象のau携帯電話(タブレット含む)1回線につき、auスマートバリューの割引を初めて適用した月を1ヶ月目としてカウントし、最大24ヶ月の割引をもって終了します。3年目以降は割引額が変更となります。
                割引対象合計額が割引金額を下回る場合は、割引対象合計額を上限として割引します。
                割引額は、月末時点で加入しているau携帯電話の料金プランにより判定します。月末時点で条件を満たさない月は、割引は適用されません。
                au携帯電話(タブレット含む)を解約 (一時休止、譲渡) をされた場合、割引の適用は解約 (一時休止) 月の当月、または譲渡月の前月をもって終了します。
                ご自宅のインターネットサービスを「利用中」または「手続き中」の場合も、割引の適用となります。
                ご自宅のインターネットサービスを解約などをされた場合、割引の適用は解約月の前月をもって終了します。
                auスマートバリューお申し込み後、ご自宅のインターネットサービス (「ネット+電話」、「ネット＋テレビ」、「テレビ＋電話」)が6ヶ月経過後も開通されていない場合は、順次、割引を一時停止します。開通後、再び割引を再開します。
                ご自宅のインターネットサービスを提供会社側都合で取消された場合は、取消月の翌月から3ヶ月目まで割引を適用します。ただし、開通前にお客さま都合により取消された場合は、受付の前月利用分をもって割引を終了し、それまでの割引額をau携帯電話(タブレット含む)側のご利用料金に合算し請求します。
                別途、機種代金、通話・通信料、契約にかかる費用、ユニバーサルサービス料、電話リレーサービス料などがかかります。
                「ケーブルプラス電話　auケータイセット割」等、KDDIが実施する他の施策とは併用できない場合があります。
                ビッグローブ・KDDIが実施する他の施策とは併用できない場合があります。
                法人向けビッグローブ光は割引対象外となります。
                </p>

            </div>

        </div>

          



            





            

                
       







   





            

      


       

        

        </section>
        </div>
        </>
    );
}


Campaign.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}

export default Campaign;