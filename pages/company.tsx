import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import FormLayout from "../components/form/Layout";

const Company:NextPageWithLayout = () => {
    return (
        <>
        <div className="overflow-x-hidden ">
        <section className='container mx-auto md:px-20 px-5'>

        <div>会社概要ページ</div>

        <h1>株式会社リ・スターツについて</h1>

        <ul>
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
        </ul>

        <h1>特定商取引法に基づく表記</h1>

        <ul>
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
        </ul>

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