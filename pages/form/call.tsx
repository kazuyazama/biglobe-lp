import FormLayout from "../../components/Layout/form";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";

const call :NextPageWithLayout= () => {
    return (
        <>
         <div>
            call
         </div>
        
        </>
    );
}

call.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
  }

export default call;