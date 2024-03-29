import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import FormLayout from "../components/form/Layout";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

import { NextSeo } from "next-seo";
import Table from "../components/campaign/Detail/TableCpn";
import ListCpn from "../components/campaign/Detail/ListCpn";
import Notes from "../components/campaign/Detail/Notes ";

const cpnNotes = [
  {
    desc: "本キャンペーンは対象のサービスを8カ月以上継続して利用していただく事が条件となります。上記期間内の解約（お引越し等による解約や引越し先エリア外継続利用不可も含む）や料金不払いによる強制解約となった場合、本キャンペーンの違約金としてキャッシュバック金額を全額ご請求させていただきます。お引越し先で継続利用をしていただければ本キャンペーン違約金の対象外となります。",
  },
  {
    desc: "本キャンペーンの権利を第三者へ譲渡することはできません。譲渡が発覚した場合、本キャンペーンは無効とさせていただきます。",
  },
  
  {
    desc: "当サイト経由以外でのお申込みは本キャンペーンの対象外となります。",
  },
  {
    desc: "本キャンペーンの適用条件は予告無く変更となる場合があります。",
  },
  {
    desc: "本キャンペーンにお申込みをされた場合は、適用条件のすべての条件に同意いただいたものとみなされます。予めご了承ください。",
  },
  {
    desc: "サイト内に記載の当社キャッシュバック還元率は、設備の提供状況やお客様都合によるキャンセルなどで、ビッグローブ光を開通されなかった場合を除きます。",
  },
  {
    desc: "キャンペーン提供主体：株式会社リスターツ",
  },
];

const wifiNotes = [
  {
    desc: " 機器解約時には、返送手数料（解約手数料）として1,430円（機器返却送料含む）がかかりますが特典により６ヶ月間は無料となります。。",
  },
  {
    desc: "解約から1カ月を過ぎても機器が返却されない場合、端末代金相当額として6,000円（※不課税）が請求されます。接続機器（無線LAN付き）は概ね以下日程で発送されます",
  },
  {
    desc: "－回線新規の場合 概ね開通工事の前※開通工事後となる場合もあります（不達の場合、工事予定日を前倒し変更した場合など）",
  },
  {
    desc: "－転用の場合 NTT東日本エリアの場合、概ねビッグローブ光への切り替え前 NTT西日本エリアの場合、概ねビッグローブ光への切り替え後7日以内",
  },
  {
    desc: "ビッグローブ光と同時申し込みの場合、接続機器（無線LAN付き）の契約開始日は、「機器の着荷をビッグローブが認識した日」と「ビッグローブ光の契約開始を認識した日」のうち遅い方の日となります。",
  },
  {
    desc: "本キャンペーンにお申込みをされた場合は、適用条件のすべての条件に同意いただいたものとみなされます。予めご了承ください。",
  },
  {
    desc: "接続機器（無線LAN付き）の着荷がビッグローブ光の契約開始後となった場合は、着荷日を起点として接続機器（無線LAN付き）の月額料金と値引きが開始します。",
  },
  {
    desc: "ビッグローブ光をキャンセルした場合、接続機器（無線LAN付き）のお申込みもキャンセルとなります。接続機器（無線LAN付き）の着荷後、ビッグローブ光をキャンセルされた場合、返却キットがお客様に送付されます。返却に関わる代金は不要です。",
  },
  {
    desc: "接続機器（無線LAN付き）を 使った高速接続サービス（IPv6接続（IPoE方式））をご利用の場合、「固定IPアドレスオプション／ダイナミックDNSサービス」「一部通信型ゲームなど特定 ポートを使用するサービスまたは複数のユーザでIPアドレスを共有すると利用できないサービス」 「外部サーバへの公開」が利用できなくなります。機器は予告なく変更となる場合があります。",
  },
];

const auNotes = [
  {
    desc: "ご契約はご自宅のインターネットサービス1回線につき、au携帯電話(タブレット含む)合計10回線までです。「auスマートバリュー」をご契約の回線が「家族割プラス」グループまたはUQ mobileの「自宅セット割」グループにも加入している場合、各グループにご加入のau/UQ携帯電話も回線数のカウントに含まれます。ご自宅のインターネットサービスとau携帯電話(タブレット含む)のご契約者が同一姓・同一住所の場合、お申し込みできます。50歳以上のご家族の場合は、対象のご自宅のインターネットサービス(「ネット＋電話」、「ネット＋テレビ」 、「テレビ＋電話」 )にご契約している住所と別住所でもお申し込みできます。別姓やau携帯電話(タブレット含む)が累計5回線以上の場合はご家族・同一住所であることの証明書が必要です。auスマートバリューのお申し込み翌月以降から割引適用となります。",
  },
  {
    desc: "スマホセット割ご加入の方がauスマートバリューを申し込みされた場合、自動的にauスマートバリューの割引に切り替わります。ただしauスマートバリュー適用前にスマホセット割を廃止した場合、前月末をもってスマホセット割は終了となり、auスマートバリューは翌月から割引が適用となります。auスマートバリューご加入から2年間の割引(2,200円/月(税込)、1,551円/月(税込)、1,027円/月(税込))適用は、対象のau携帯電話(タブレット含む)1回線につき、auスマートバリューの割引を初めて適用した月を1ヶ月目としてカウントし、最大24ヶ月の割引をもって終了します。3年目以降は割引額が変更となります。",
  },
  {
    desc: "割引対象合計額が割引金額を下回る場合は、割引対象合計額を上限として割引します。割引額は、月末時点で加入しているau携帯電話の料金プランにより判定します。月末時点で条件を満たさない月は、割引は適用されません。au携帯電話(タブレット含む)を解約 (一時休止、譲渡) をされた場合、割引の適用は解約 (一時休止) 月の当月、または譲渡月の前月をもって終了します。",
  },
  {
    desc: "ご自宅のインターネットサービスを「利用中」または「手続き中」の場合も、割引の適用となります。ご自宅のインターネットサービスを解約などをされた場合、割引の適用は解約月の前月をもって終了します。",
  },
  {
    desc: "auスマートバリューお申し込み後、ご自宅のインターネットサービス (「ネット+電話」、「ネット＋テレビ」、「テレビ＋電話」)が6ヶ月経過後も開通されていない場合は、順次、割引を一時停止します。開通後、再び割引を再開します。ご自宅のインターネットサービスを提供会社側都合で取消された場合は、取消月の翌月から3ヶ月目まで割引を適用します。ただし、開通前にお客さま都合により取消された場合は、受付の前月利用分をもって割引を終了し、それまでの割引額をau携帯電話(タブレット含む)側のご利用料金に合算し請求します。",
  },
  {
    desc: "別途、機種代金、通話・通信料、契約にかかる費用、ユニバーサルサービス料、電話リレーサービス料などがかかります。",
  },

  {
    desc: "KDDIが提供するサービスです。割引適用には 「auスマートバリュー」のお申し込みと「ビッグローブ光電話」のお申し込みが必要です。ビッグローブ光の他のセット割、トリプル割、およびauスマートバリューmineとの併用はできません。適用条件など詳細はau公式サイトでご確認ください。",
  },
  {
    desc: "法人向けビッグローブ光は割引対象外となります。",
  },
];

const uqNotes = [
  {
    desc: "対象サービス1契約につき、UQ mobile回線合計10回線(BIGLOBE WiMAX +5Gの場合、サービス1回線につき、UQ mobile合計9回線)までとなります。「くりこしプラン +5G」でご家族がau回線をお持ちの場合、割引となるUQ mobile回線は、ご家族のau回線と合わせて10回線までとなります(au回線は⾃宅セット割の割引対象外です)。対象サービスとUQ mobileのご契約者が同一姓・同一住所の場合、お申し込みできます。ただし、50歳以上のご家族の場合は対象サービスにご契約している住所と別住所でもお申し込みできます。別姓やUQ mobile回線が累計5回線以上の場合はご家族・同一住所であることの証明書が必要です(別住所で50歳以上はご家族の証明書のみ)。",
  },
  {
    desc: "自宅セット割 お申し込み翌月以降、条件を満たした月のご利用分から割引を適用します。「でんきコース」と「インターネットコース」は重複して適用されず、「インターネットコース」を適用します。",
  },
  {
    desc: "UQ mobileの解約をした場合、お手続きの当月分をもって割引の適用を終了します。UQ mobileの月額基本料が日割となる場合は本割引も日割を適用します。対象サービスが開通前の場合も割引の適用となりますが、適用開始から6ヵ月経過後も開通されていない場合は、順次、割引を終了します。ただし、お申し込み条件外などの理由により開通できないことを当社が確認した場合は、6ヵ月以内でも割引を終了する場合があります。お客さま都合により対象サービスのお申し込みを取消された場合は、割引を終了し、それまでの割引額をUQ mobileのご利用料金に合算し請求する場合があります。",
  },
  {
    desc: "割引額は、月末時点で加入しているUQ mobileの料金プランにより判定します。月末時点で条件を満たさない月は、割引は適用されません。対象サービスを解約された場合、割引の適用は解約月の前月をもって終了します。",
  },
  {
    desc: "「インターネットコース」適用中のお客さまがauへ番号移行し、「auスマートバリュー」の適用条件を満たした場合、番号移行月の翌月より「auスマートバリュー」が自動で適用されます。 auで「auスマートバリュー」適用中のお客さまがUQ mobileに番号移行し、「インターネットコース」の適用条件を満たした場合、番号移行の翌月より「インターネットコース」が自動で適用されます。",
  },
  {
    desc: "新規契約または機種変更と同時にお申し込みの場合、料金プランは加入日または変更日当日から適用となります。プラン変更の場合は、翌月から適用となります。",
  },
  {
    desc: "auおよびpovo2.0への番号移行の場合、基本料および当社所定の割引サービス、オプションサービス料金等は番号移行の完了日の前日までの日割りとなりますが、当面の間、全額を一旦ご請求した上で、番号移行の翌月以降に差額を調整します。ただし、沖縄セルラーへのMNPは対象外です。             ",
  },
  {
    desc: "UQmobileが提供するサービスです。割引適用には 「UQ mobile自宅セット割」のお申し込みと「ビッグローブ光電話」のお申し込みが必要です。ビッグローブ光の他のセット割、トリプル割、およびauスマートバリューとの併用はできません。適用条件など詳細はUQmobile公式サイトでご確認ください。",
  },
  {
    desc: "別途、機種代金、通話・通信料、契約にかかる費用、ユニバーサルサービス料、電話リレーサービス料などがかかります。",
  },
];

const Campaign: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="キャンペーン一覧"
        openGraph={{
          url: "http://localhost:3000/campaignDetail",
        }}
      />

      <div className="overflow-x-hidden ">
        <section className="mx-auto px-2">
          <div className="text-sm breadcrumbs pb-10 lg:px-20 mx-auto">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a>キャンペーン詳細</a>
              </li>
            </ul>
          </div>
          <div className="text-center ">
            <h1 className="text-xl lg:text-2xl pb-5 font-semibold">
              ビッグローブ光 キャンペーンのご案内
            </h1>
            <h2 className="lg:text-lg pb-2">
              ビッグローブ光ならお得がいっぱい！現在開催中のお得なキャンペーンや割引をご紹介します。
            </h2>
            <div className="divider mb-0"></div>
          </div>

          <div className=" bg-yellow-50 pt-10">
            <div className="grid grid-cols-6 justify-items-center gap-10 lg:px-20 container mx-auto pb-20">
              <div className="col-span-6 space-y-3 text-center " id="original">
                <h1 className="text-xl lg:text-xl font-semibold ">
                  当サイト限定選べるキャンペーン
                </h1>
                <h2 className="lg:text-lg">
                  当サイトからお申し込みでお得なキャンペーンが適用されます！下記2つからお好きなキャンペーンをお選びいただけます。
                </h2>
                <figure className="full">
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/キャンペーン.svg"
                    alt="当サイト限定のビッグローブ光キャンペーン！高額キャッシュバック(最大35,000円)または工事費無料+キャッシュバック(最大29,800円相当)のどちらかをお選びいただけるキャンペーンです！"
                    width={1000}
                    height={350}
                  />
                </figure>
              </div>


              <div className="col-span-6 w-full ">
                <p className="text-sm lg:px-20 text-center">
                対象期間：2023年1月4日～2023年3月31日
                
                </p>
              </div>

              <div className="col-span-6 space-y-5 text-center">
                <h1 className="text-lg lg:text-xl font-semibold">
                  【特典A】高額キャッシュバックキャンペーン
                </h1>
                {/* <figure><Image loader={({src}) => src} src="/main/campaign/キャンペーン特典A.svg" alt="選べるキャンペーン" width={600} height={350}  /></figure> */}
                <div className="lg:text-lg text-start lg:text-center">
                  キャッシュバック金額はなんと最大35,000円！とにかくキャッシュバックを多く受け取り方向けのキャンペーンです。
                  <br />
                  詳細は下記のキャッシュバック金額一覧表をご覧ください。
                </div>
              </div>

              <div className="col-span-6 w-full ">
                <div className="">キャッシュバック金額一覧表</div>

                <Table
                  title1="新規お申込み"
                  title2="他社から転用"
                  title3="事業者変更"
                  price1="35,000円"
                  price2="15,000円"
                  price3="15,000円"
                  discription1="現金キャッシュバック"
                  discription2="現金キャッシュバック"
                  discription3="現金キャッシュバック"
                />
              </div>

              <div className="col-span-6 space-y-5 text-center">
                <h1 className="text-lg lg:text-xl font-semibold">
                  【特典B】工事費割引+キャッシュバックキャンペーン
                </h1>
                {/* <figure><Image loader={({src}) => src} src="/main/campaign/キャンペーン特典B.svg" alt="選べるキャンペーン" width={600} height={350}  /></figure> */}
                <div className="lg:text-lg text-start lg:text-center">
                  工事費を実質無料にしたい方向けのキャンペーンです。
                  <br />
                  詳細は下記のキャッシュバック金額一覧表をご覧ください。
                </div>
              </div>

              <div className="col-span-6 w-full ">
                <div className="pl-2 ">キャッシュバック金額一覧表</div>

                <Table
                  title1="新規お申込み"
                  title2="他社から転用"
                  title3="事業者変更"
                  price1="10,000円"
                  price2="15,000円"
                  price3="15,000円"
                  discription1="現金キャッシュバック+工事費無料"
                  discription2="現金キャッシュバック"
                  discription3="現金キャッシュバック"
                />

                <p className="text-sm">
                  他社からの転用・事業者変更の方は原則工事がない為、特典１と特典２は同じ内容となります。{" "}
                </p>
              </div>

              <ListCpn
                title={"当社キャッシュバックの特徴"}
                list1={
                  " 開通したら最短で２ヵ月後に現金でお振込いたします！※公式キャッシュバックは12カ月後にお振込みとなります。"
                }
                list2={
                  "キャッシュバック時期になりましたら弊社からお電話でご連絡をしますので、キャッシュバックの申請モレは一切なし！キャッシュバック還元率１００％です！（電話に応答しない方を除く）"
                }
                list3={"不必要なオプションには一切入る必要はありません！"}
              />

              <ListCpn
                title={"対象者"}
                list1={
                  "上記キャンペーン期間中に当サイト（お申込みフォームまたは、電話によるお申込み）からお申し込みいただいた方。"
                }
                list2={
                  "ご利用確認時にキャンペーン対象の光回線の利用を継続されている方。"
                }
                list3={
                  "お申し込み月を含む6ヵ月後の月末日までに対象サービスを開通された方。。"
                }
              />

              <ListCpn
                title={"適用条件（特典A）"}
                list1={
                  "※キャッシュバックは2回に分けて振り込まれます。2回目のキャッシュバックには受取手続が必要です。"
                }
                list2={[
                  "【1回目(最大5,000円)：2カ月後】",
                  <br key="list2" />,
                  "新規申込の場合は、2カ月後に5000円がキャッシュバックされます。他社転用・事業者変更の場合も、2カ月後に15,000円がキャッシュバックされます。",
                ]}
                list3={[
                  "【2回目(30,000円)：開通月を1カ月目として12カ月目】※新規の方のみ",
                  <br key="list3" />,
                  "開通月を1カ月目として12カ月目が適用月となり、適用月の月初2日～45日間以内にBIGLOBEのマイページからの受け取り手続きが必要となります。適用月にBIGLOBEより、BIGLOBEメール、BIGLOBEにご登録の連絡先メールアドレス宛にメールが送信されます。受け取り手続きが完了後、数日以内にご指定の口座にキャッシュバックされます。※期間内に受け取り手続きされない場合は特典をお受け取りいただくことが出来ません。※受け取り期間前に退会、コース変更、移転をされたお客さまはキャンペーン適用外となります。",
                ]}
              />

              <ListCpn
                title={"適用条件（特典B）"}
                list1={
                  "※工事費割引はBIGLOBE側のキャンペーン施策になります。キャッシュバックは弊社側より行います。"
                }
                list2={[
                  "【工事費割引】※新規の方のみ",
                  <br key="list2" />,
                  "新規工事費分割払い相当をBIGLOBE利用料金から値引きします。土日休日工事費、ビッグローブ光電話工事費、ビッグローブ光テレビ工事費、特別な工事が必要な場合の追加工事費は別途初回にお支払いいただきます。工事費割賦期間、継続利用期間内に解約や料金不払いによる強制解約となった場合、割引は停止となり、工事費残債はお支払いいただきます。",
                ]}
                list3={[
                  "【キャッシュバック】",
                  <br key="list3" />,
                  "新規申込の場合は、2カ月後に10,000円がキャッシュバックされます。他社転用・事業者変更の場合も、2カ月後に15,000円がキャッシュバックされます。",
                ]}
              />

              <Notes title={"その他注意事項"} notes={cpnNotes} />
            </div>
          </div>

          <div className="bg-base-100 pt-10">
            <div className="grid grid-cols-6 justify-items-center gap-10 lg:px-20  container mx-auto pb-20">
              <div className="col-span-6 space-y-3 text-center" id="ip-v6">
                <h1 className="text-lg lg:text-xl font-semibold">
                  無線LAN付IPv6対応ルータ月額料金無料特典
                </h1>
                <h2 className="lg:text-lg">
                  ビッグローブ光と無線LAN付きルーターの同時申込で無線LAN付きルーターが６ヶ月間無料に!
                </h2>
                <div>
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/IPv6.svg"
                    alt="無線LAN付IPv6対応ルータ月額料金無料特典"
                    width={800}
                    height={300}
                  />
                </div>
              </div>

              <div className="col-span-6 w-full ">
                <h1 className="">特典適用後の料金詳細</h1>

                <Table
                  title1=""
                  title2="機器利用料 550円/月"
                  title3="機器返送手数料 1430円/月"
                  price1=""
                  price2="無料"
                  price3="無料"
                  discription1="特典適用後料金"
                  discription2="(6カ月間)"
                  discription3="(6カ月以内)"
                />
              </div>

              <Notes title={"注意事項"} notes={wifiNotes} />
            </div>
          </div>

          <div className="bg-yellow-50 pt-10">
            <div className="grid grid-cols-6 justify-items-center gap-10 lg:px-20  container mx-auto pb-20">
              <div className="col-span-6 space-y-3 text-center" id="au-sv">
                <h1 className="text-lg lg:text-xl font-semibold">
                  auスマートバリュー
                </h1>
                <h2 className="lg:text-lg">
                  ビッグローブ光(ネット＋電話)とauスマートフォン等をセットでのご利用でau携帯電話のご利用料金が割引！
                </h2>
                <div>
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/au-smart-value.svg"
                    alt="auスマートバリューで家族みんなのスマホが永年割引 1人あたり最大1100円/月割引"
                    width={800}
                    height={300}
                  />
                </div>
                {/* <p>特典１の詳細</p> */}
              </div>

              <div className="col-span-6 w-full ">
                <h1>割引額と対象の料金プラン</h1>

                <Table
                  title1="料金プラン"
                  title2="使い放題MAX 5G"
                  title3="ピタットプラン 5G"
                  price1=""
                  price2="1,000円"
                  price3="500円"
                  discription1="毎月の割引額"
                  discription2="(税込1,100円)永年割引"
                  discription3="(税込550円)永年割引"
                />

                <div className="text-sm">
                  割引額は対象の料金プランによって異なりますので、au公式サイトをご確認ください。
                </div>
              </div>

              <div className="col-span-6 text-lg lg:text-xl font-semibold">
                ひとりでも、家族でもおトク！
              </div>

              <div className="col-span-6 lg:col-span-3  self-center">
                一人でも家族でも、同居家族が割引き対象です。
                さらに50歳以上なら離れて暮らす家族も割引き対象に。
                最大10回線まで、1回線あたりの月々のauスマホなどの月額利用料金が割引きされます。
                <br />
                <p>
                  割引適用についての注意事項は
                  <Scroll to="au-notes" smooth={true} duration={600}>
                    <span className="link">こちら</span>
                  </Scroll>
                </p>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <div>
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/ひとりでも家族でもお得.svg"
                    alt="一人でも家族でもお得"
                    width={800}
                    height={300}
                  />
                </div>
              </div>

              <ListCpn
                title={"適用条件"}
                discription={
                  "以下の条件を両方満たす方がauスマートバリューにお申し込みできます。"
                }
                list1={
                  "auスマートフォン(5G)、auスマートフォン(4G)、auケータイ、4G LTEタブレットで対象の料金プランにご加入している方"
                }
                list2={
                  "ビッグローブ光」「ビッグローブ光電話」にお申し込みされた方"
                }
              />

              {/* <ListCpn 
             title={'お申し込みについて'}
             discription={'ご契約はご自宅のインターネットサービス1回線につき、au携帯電話(タブレット・PC含む)合計10回線(またはau ホームルーター 5G/au スマートポートなどの対象のルーターサービスの場合1回線につき、au携帯電話合計9回線)までです。「auスマートバリュー」をご契約の回線が「家族割プラス」グループまたはUQ mobileの「自宅セット割」グループにも加入している場合、各グループにご加入のau/UQ携帯電話も回線数のカウントに含まれます。ご自宅のインターネットサービス(au ホームルーター 5G/au スマートポートなどの対象のルーターサービス含む)とau携帯電話(タブレット・PC含む)のご契約者が同一姓・同一住所の場合、お申し込みできます。50歳以上のご家族の場合は、対象のご自宅のインターネットサービス(「ネット＋電話」、「ネット＋テレビ」 、「テレビ＋電話」 )にご契約している住所と別住所でもお申し込みできます。別姓やau携帯電話(タブレット・PC含む)が累計5回線以上の場合はご家族・同一住所であることの証明書が必要です(別住所で50歳以上はご家族の証明書のみ)'}
             
              /> */}

              <Notes
                id={"au-notes"}
                title={"割引適用についての注意事項"}
                notes={auNotes}
              />
            </div>
          </div>

          <div className="bg-base-100 pt-10">
            <div className="grid grid-cols-6 justify-items-center gap-10 lg:px-20  container mx-auto pb-20">
              <div className="col-span-6 space-y-3 text-center" id="uq-set">
                <h1 className="text-lg lg:text-xl font-semibold">
                  UQ mobile 自宅セット割
                </h1>
                <h2 className="lg:text-lg">
                  ビッグローブ光(ネット＋電話)とUQmobileをセットでのご利用でUQmobileのご利用料金が割引！
                </h2>
                <div className="">
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/UQmobile.svg"
                    alt="UQモバイル自宅セット割 ビッグローブ光とUQMoblieの同時利用で家族みんなのスマホが1人あたり最大858円割引"
                    width={800}
                    height={300}
                  />
                </div>
              </div>

              <div className="col-span-6 w-full space-y-3 -my-10 lg:-my-0">
                <div className="hidden lg:block">
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/UQmobile自宅セット割.svg"
                    alt="UQmobile自宅セット割"
                    width={500}
                    height={250}
                    layout="responsive"
                  />
                </div>
                <div className="block lg:hidden">
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/UQmobile自宅セット割.svg"
                    alt="UQmobile自宅セット割"
                    width={500}
                    height={450}
                    layout="responsive"
                  />
                </div>
              </div>

              <div className="col-span-6 w-full ">
                <p className="text-sm lg:px-20">
                  1：ビッグローブ光1契約につき、 UQ
                  mobile回線合計10回線までとなります。 「くりこしプラン ＋
                  5G」でご家族がau回線をお持ちの場合、 割引となるUQ
                  mobile回線は、ご家族のau回線と合わせて10回線までとなります。ビッグローブ光とUQ
                  mobileのご契約者が同一姓・同一住所の場合、お申込みできます。
                  但し、50歳以上のご家族の場合はビッグローブ光にご契約している住所と別住所でもお申込みできます。別姓やUQ
                  mobile回線が累計5回線以上の場合はご家族・同一住所であることの証明書が必要です(別住所で50歳以上はご家族の証明書のみ)。
                </p>
              </div>

              <div className="col-span-6 w-full ">
                <h1>割引額と対象の料金プラン</h1>

                <Table
                  title1="料金プラン"
                  title2="くりこしプランS,M+5G"
                  title3="くりこしプランL+5G"
                  price1=""
                  price2="580円"
                  price3="780円"
                  discription1="毎月の割引額"
                  discription2="(税込638円)割引"
                  discription3="(税込858円)割引"
                />

                <div>
                  割引額は対象の料金プランによって異なりますので、UQmobile公式サイトをご確認ください。
                </div>
              </div>

              <div className="col-span-6 text-lg lg:text-xl font-semibold">
                家族もおトク！最大10回線まで割引対象
              </div>

              <div className="col-span-6 lg:col-span-3 self-center">
                ビッグローブ光インターネットとビッグローブ光電話のご利用で、UQ
                mobileの対象プランにご加入の方はUQ
                mobileのご利用料金を割引いたします。（ UQ
                mobileへのお申込みが必要です。）。
                <p>
                  割引適用についての注意事項は
                  <Scroll to="uq-notes" smooth={true} duration={600}>
                    <span className="link">こちら</span>
                  </Scroll>
                </p>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <div>
                  <Image
                    loader={({ src }) => src}
                    src="/main/campaign/ひとりでも家族でもお得.svg"
                    alt="ひとりでも家族でもお得"
                    width={800}
                    height={300}
                  />
                </div>
              </div>

              <ListCpn
                title={"適用条件"}
                discription={
                  "以下の条件を両方満たす方がUQMobileセット割にお申し込みできます。"
                }
                list1={"UQ mobileの対象プラン(S/M/L)にご加入している方"}
                list2={
                  "ビッグローブ光」「ビッグローブ光電話」にお申し込みされた方"
                }
              />

              <ListCpn
                title={"お申し込みについて"}
                discription={
                  "対象サービス契約者のご家族がUQ mobileをご利用の場合ビッグローブ光のお申し込みと、対象サービス契約者のご家族であることの登録が必要です。ご家族であることの登録は、UQスポット、au Style、auショップおよびUQ mobileお客さまセンターにてお手続き可能です。"
                }
              />

              <Notes
                id={"uq-notes"}
                title={"割引適用についての注意事項"}
                notes={uqNotes}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Campaign.getLayout = (page: ReactElement) => {
  return <FormLayout>{page}</FormLayout>;
};

export default Campaign;
