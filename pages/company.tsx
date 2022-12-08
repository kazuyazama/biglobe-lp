import type { ReactElement } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import type { NextPageWithLayout } from "./_app";
import FormLayout from "../components/form/Layout";

const Company:NextPageWithLayout = () => {
    return (
        <>
         <NextSeo
        title="会社情報"
        openGraph={{
            url:"http://localhost:3000/company",
        }}
        />

        <div className="overflow-x-hidden pb-20">
        <section className='container mx-auto md:px-20 px-5'>
        <div className="text-sm breadcrumbs pb-10">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><a>会社概要</a></li> 
        </ul>
        </div>
          

        <div className="text-center text-xl pb-5 font-semibold">会社概要</div>

        <ul className="border border-primary rounded-md divide-y">
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3 rounded-tl">会社名</div>
            <div className="basis-full py-3 pl-3">株式会社リ・スターツ</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0 ">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">所在地</div>
            <div className="basis-full py-3 pl-3">東京都町田市森野6-359 横山第2ビル 2-A</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">TEL</div>
            <div className="basis-full py-3 pl-3">042-866-3979(代表)</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">事業内容</div>
            <div className="basis-full py-3 pl-3">ビッグローブ光販売代理店<br />ビッグローブ正規代理店として、ビッグローブ光の販売業務を行っています。</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">運営責任者</div>
            <div className="basis-full py-3 pl-3">座間和也</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">営業時間</div>
            <div className="basis-full py-3 pl-3">電話：12:00～21:00<br/>WEBからのお申込み・お問合せフォーム：24時間年中無休</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">休業日</div>
            <div className="basis-full py-3 pl-3">土日</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">代理店届出番号</div>
            <div className="basis-full py-3 pl-3">C2111718</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">価格</div>
            <div className="basis-full py-3 pl-3">各サービス毎に掲載</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">商品以外の必要料金</div>
            <div className="basis-full py-3 pl-3">各通信サービスの定めるところによる</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3">お支払い期限・方法</div>
            <div className="basis-full py-3 pl-3">各通信サービスの定めるところによる</div>
          </li>
          <li className="md:flex divide-x-2 divide-y-2 md:divide-y-0 ">
            <div className="basis-1/3  bg-sky-100 flex items-center justify-center py-3 rounded-bl">返品/返還の特約</div>
            <div className="basis-full py-3 pl-3">
            【サービス提供前】<br />
            当サイト：0120-197-802 <br />
            【サービス提供後】<br />
            ビッグローブ光：0120-04-0962
            </div>
          </li>
        </ul>

        {/* <h1>株式会社リ・スターツについて</h1> */}

        {/* <ul>
          <li className="flex">
            <div className="basis-1/3">会社名</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">運営責任者</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">所在地</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">TEL</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">事業内容</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">営業時間</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">休業日</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">代理店届出番号</div>
            <div className="basis-full">株式会社リ・スターツ</div>
          </li>
        </ul> */}

        {/* <h1>特定商取引法に基づく表記</h1> */}

        {/* <ul>
          <li className="flex">
            <div className="basis-1/3">運営会社</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">サイト運営責任者</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">営業時間</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">休業日</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">価格</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">商品以外の必要料金</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">お支払い期限・方法</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
          <li className="flex">
            <div className="basis-1/3">返品/返還の特約</div>
            <div className="basis-2/3">株式会社リ・スターツ</div>
          </li>
        </ul> */}

        </section>
        </div>
        </>
    );
}

Company.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}

export default Company;