import { ReactElement } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useForm, FormProvider } from "react-hook-form";

import { NextPageWithLayout } from "../../_app";
import Input from "../../../components/form/call/Input";
import Confirm from "../../../components/form/call/Confirm";
import FormLayout from "../../../components/form/Layout";

import type { ContactType } from "../../../types/contact";

const Call :NextPageWithLayout= () => {
    const router = useRouter();
    const isConfirm = router.query.confirm;
   
    const methods = useForm<ContactType>({
        mode:"onChange",
        criteriaMode:"all"
    });

    return (
        <>
         <NextSeo
        title="電話折り返しフォーム"
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

Call.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}

export default Call;