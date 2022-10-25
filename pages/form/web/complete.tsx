import { ReactElement, useEffect } from "react"; 
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";

import type { NextPageWithLayout } from "../../_app";
import FormLayout from "../../../components/form/Layout";

const Complete:NextPageWithLayout = () => {
  
  const [isDisplay,setIsDisplay] = useState('');

    // 直アクセスのリダイレクト処理
    const router = useRouter();

    useEffect(() => {
      if(router.isReady) {
        if (router.query.display === 'ok') 
       { setIsDisplay(router.query.display);
      } else {
        router.push('/')
      }
    }
    },[router.isReady]);

    
    return (

      <>
      <NextSeo
      title="ビッグローブ光 お申し込みフォーム"
      openGraph={{
          url:"http://localhost:3000/form/web",
      }}
      />
      <div className="overflow-x-hidden pb-20">
      
      <div className="container mx-auto px-40 text-center ">
      <div className="text-sm breadcrumbs pb-10">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><a>お申し込みフォーム</a></li> 
        </ul>
        </div>

    
        <ul className="steps w-1/2 py-5">
        <li className="step step-primary">ご入力</li>
        <li className="step step-primary">ご確認</li>
        <li className="step step-primary">完了</li>
        </ul>


        <div className="py-5 space-y-5">
        <h1 className="text-2xl">webからのお申し込みありがとうございました。</h1>
        <p className="text-lg">指定の日時に「0120-197-802」の番号よりご契約内容の確認のご連絡をさせていただきますので、
          ご対応の程よろしくお願いいたします。
        </p>
        </div>
        
        <Link href="/">
        <a className="btn btn-ghost">トップに戻る</a>
        </Link>
      </div>
      </div>
      </>
    );
};

Complete.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}
  
  export default Complete;