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
        <main>{children}</main>
        <Footer />
        </>
    );
}

export default FormLayout;