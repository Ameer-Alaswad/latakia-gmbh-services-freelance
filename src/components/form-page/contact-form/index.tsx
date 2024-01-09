import React, { useState } from "react";
import { Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {
    contactFormMainContainerStyles,
    contactFormStyles,
} from "./styles";

import ContactFormFields from "./ContactFromFields";
import ServiceSelect from "./ServiceSelect";
import DescriptionTextField from "./DescriptionField";
import SubmitButton from "./SubmitFormButton";
import FormTitle from "./FormTitle";
import { handleSubmit } from "./formSubmitHander";
import { FormData } from "./Types";

const MyForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        description: "",
    });

    const handleChange = (key: keyof FormData, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };
    const handleSubmitWrapper: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        handleSubmit(formData, setFormData);
    };


    const contactFormFields = {
        formData: formData,
        handleChange,
    };
    const ServiceSelectProps = {
        value: formData.service,
        onChange: (value: string) => handleChange("service", value),
    };
    const descriptionTextFieldProps = {
        value: formData.description,
        onChange: (value: string) => handleChange("description", value),
    };
    return (
        <Box sx={ contactFormMainContainerStyles }>
            <Box sx={ contactFormStyles } component="form" onSubmit={ handleSubmitWrapper }>
                <FormTitle />
                <ContactFormFields { ...contactFormFields } />
                <ServiceSelect { ...ServiceSelectProps } />
                <DescriptionTextField { ...descriptionTextFieldProps } />
                <SubmitButton />
            </Box>
        </Box>
    );
};

export default MyForm;
