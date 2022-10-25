import FormLayout from "../../../components/form/Layout";
import { NextPageWithLayout } from "../../_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../components/form/web/Input";
import Confirm from "../../../components/form/web/Confirm";
import { ContactType } from "../../../types/contact";


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