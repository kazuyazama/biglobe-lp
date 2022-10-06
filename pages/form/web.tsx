import { ReactElement } from "react";
import FormLayout from "../../components/Layout/form";
import { NextPageWithLayout } from "../_app";

const web:NextPageWithLayout = () => {
    return (
        <>
        <div>Form</div>
        </>
    );
}

web.getLayout = (page:ReactElement) => {
    return (
        <FormLayout>
            {page}
        </FormLayout>
    )
}

export default web;