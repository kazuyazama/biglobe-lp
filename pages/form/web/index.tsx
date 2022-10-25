import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { NextSeo } from "next-seo";

import { NextPageWithLayout } from "../../_app";
import FormLayout from "../../../components/form/Layout";
import Input from "../../../components/form/web/Input";
import Confirm from "../../../components/form/web/Confirm";

import type { ContactType } from "../../../types/contact";


const Web :NextPageWithLayout= () => {
    const router = useRouter();

    const isConfirm = router.query.confirm;
    // console.log(isConfirm);
   
    const methods = useForm<ContactType>({
        mode:"onChange",
        criteriaMode:"all"
    });

    return (
        <>   
        <NextSeo
        title="webお申し込みフォーム"
        openGraph={{
            url:"http://localhost:3000/form/web",
        }}
        />
         <FormProvider {...methods}>
                {!isConfirm ? (
                    <Input />
                ) : (
                    <Confirm />
                )}
        </FormProvider>
       
        
        </>
    );
}

Web.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}

export default Web;