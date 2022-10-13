import FormHeader from "./FormHeader";
import Footer from "../../Layout/Footer";

const FormLayout = ({children}) => {
    return (
        <>
        <FormHeader />
        <main>{children}</main>
        <Footer />
        </>
    );
}

export default FormLayout;