import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter"

const FormLayout = ({children}) => {
    return (
        <>
        <FormHeader />
        <main>{children}</main>
        <FormFooter />
        </>
    );
}

export default FormLayout;