import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import FormLayout from "../components/form/Layout";
import Image from "next/image";

const Campaign:NextPageWithLayout = () => {
    return (
        <>
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
                <div className="outline outline-primary rounded-2xl flex-col items-center justify-between my-20 ">

                <div className="flex justify-center space-x-10 border-b-2 py-5">
                    <div> 新規お申込み</div>
                    <div>37,000円 現金キャッシュバック</div>
                </div>
                <div className="flex justify-center space-x-10 border-b-2 py-5">
                    <div>他社転用</div>
                    <div>37,000円 現金キャッシュバック</div>
                </div>
                <div className="flex justify-center space-x-10 py-5">
                    <div>  事業者変更</div>
                    <div>37,000円 現金キャッシュバック</div>
                </div>

                </div>
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

                <div className="outline outline-primary rounded-2xl">

                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">新規お申込み</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>37,000円 現金キャッシュバック+工事費無料</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3 border-b-2">
                        <p className="">他社から転用</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3 border-b-2">
                        <p>37,000円 現金キャッシュバック+工事費無料</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="basis-1/2 bg-yellow-100 text-center py-3">
                        <p className="">事業者変更</p>
                    </div>
                    <div className="basis-1/2 text-center  bg-red-50 py-3">
                        <p>37,000円 現金キャッシュバック+工事費無料</p>
                    </div>
                </div>

                </div>
            
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