import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import FormLayout from "../components/form/Layout";

const Privacy:NextPageWithLayout = () => {
    return (
        <>
        <div className="overflow-x-hidden ">
        <section className='container mx-auto md:px-20 px-5'>

            プライバシーポリシーページ
        </section>
        </div>
        </>
    );
}

Privacy.getLayout = (page:ReactElement) =>  {
    return (
      <FormLayout>
        {page}
      </FormLayout>
    )
}

export default Privacy;