// ContactFormFields.tsx

import React from "react";
import { TextField } from "@mui/material";
import { FormData } from "./Types";

interface ContactFormFieldsProps {
    formData: FormData;
    handleChange: (
        key: keyof ContactFormFieldsProps["formData"],
        value: string
    ) => void;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
    formData,
    handleChange,
}) => {
    return (
        <>
            <TextField
                required
                label="Name"
                fullWidth
                value={ formData.name }
                onChange={ (e) => handleChange("name", e.target.value) }
                margin="normal"
            />
            <TextField
                required
                label="Nachname"
                fullWidth
                value={ formData.lastName }
                onChange={ (e) => handleChange("lastName", e.target.value) }
                margin="normal"
            />
            <TextField
                required
                label="Email"
                fullWidth
                type="email"
                value={ formData.email }
                onChange={ (e) => handleChange("email", e.target.value) }
                margin="normal"
            />
            <TextField
                required
                label="Handynummer"
                fullWidth
                type="tel"
                value={ formData.phoneNumber }
                onChange={ (e) => handleChange("phoneNumber", e.target.value) }
                margin="normal"
            />
        </>
    );
};

export default ContactFormFields;
