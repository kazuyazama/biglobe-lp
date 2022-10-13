import FormLayout from "../../../components/form/Layout";
import type { NextPageWithLayout } from "../../_app";
import { ReactElement, useEffect } from "react"; 
import { useRouter } from "next/router";

const complete:NextPageWithLayout = () => {
    //直アクセスのリダイレクト処理
    // const router = useRouter();
    // useEffect(() => {
    //     router.replace('/')
    // },[])
    
    return (
      <div className="wrapper">
        <h1>お問い合わせありがとうございました。</h1>
        <p>
          <a href="/">トップに戻る</a>
        </p>
      </div>
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