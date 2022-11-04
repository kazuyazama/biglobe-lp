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
        <main className="bg-sky-50">
        <div>
        {children}
        </div>
        </main>
        <Footer />
        </>
    );
}

export default FormLayout;