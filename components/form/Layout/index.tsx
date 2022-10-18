import FormHeader from "./FormHeader";
import Footer from "../../Layout/Footer";
import { ReactElement } from "react";

type LayoutProps = Required<{
    readonly children: ReactElement
  }>

const FormLayout = ({children}:LayoutProps) => {
    return (
        <>
        <FormHeader />
        <main>
        <div className="overflow-x-hidden py-20">
        {children}
        </div>
        </main>
        <Footer />
        </>
    );
}

export default FormLayout;