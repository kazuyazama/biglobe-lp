import FormLayout from "../../../components/form/Layout";
import type { NextPageWithLayout } from "../../_app";
import { ReactElement, useEffect } from "react"; 
import { useRouter } from "next/router";
import Link from "next/link";

const complete:NextPageWithLayout = () => {
    //直アクセスのリダイレクト処理
    // const router = useRouter();
    // useEffect(() => {
    //     router.replace('/')
    // },[])
    
    return (

      <>
      <div className="container mx-auto px-40 py-20 text-center">

    
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
      </>
    );
};

complete.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}
  
  export default complete;