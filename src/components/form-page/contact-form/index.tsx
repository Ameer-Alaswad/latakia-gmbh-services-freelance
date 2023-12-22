import React, { useState } from "react";
import {
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import {
    contactFormMainContainerStyles,
    contactFormStyles,
    contactFormSubmitButtonStyles,
    contactUsTitleStyles,
} from "./styles";
import {
    CLEANING_SERVICE_TEXT,
    CONTACT_FORM_ERROR_MESSAGE,
    CONTACT_FORM_SUCCESS_MESSAGE,
    CONTACT_US_TEXT,
    LINKS_NOW_ALLOWED_MESSAGE,
    LOGISTICS_SERVICES_TEXT,
    OTHER_TEXT,
    PERSONAL_TRANSPORT_SERVICES_TEXT,
    SECCURITY_SERVICES_TEXT,
    SEND_REQUEST_TEXT,
    SERVICE_TEXT,
} from "../../../assets/text";
interface FormData {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    service: string;
    description: string;
}

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

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const containsLink = Object.values(formData).some((value) =>
            value.toLowerCase().includes("http://") || value.toLowerCase().includes("https://")
        );

        if (containsLink) {
            toast.error(LINKS_NOW_ALLOWED_MESSAGE);
            return;
        }

        const templateParams = {
            name: formData?.name,
            lastName: formData?.lastName,
            email: formData?.email,
            phoneNumber: formData?.phoneNumber,
            service: formData?.service,
            description: formData?.description,
        };

        try {
            const response = await emailjs.send(
                "service_56p4lg1",
                "template_lbfhy68",
                templateParams,
                "WpgTXMD0k0R12bTnt"
            );
            toast.success(CONTACT_FORM_SUCCESS_MESSAGE);
            console.log("Email sent successfully", response);
            console.log(templateParams);
        } catch (error) {
            toast.error(CONTACT_FORM_ERROR_MESSAGE);
            console.error("Error sending email", error);
        }
    };

    return (
        <Box sx={ contactFormMainContainerStyles }>
            <Box sx={ contactFormStyles } component="form" onSubmit={ (e) => handleSubmit(e) }>
                <Typography sx={ contactUsTitleStyles } variant="h4">
                    { CONTACT_US_TEXT }
                </Typography>
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
                <FormControl fullWidth margin="normal">
                    <InputLabel id="service-label">{ SERVICE_TEXT }</InputLabel>
                    <Select
                        required
                        labelId="service-label"
                        label="Service"
                        value={ formData.service }
                        onChange={ (e) => handleChange("service", e.target.value as string) }
                    >
                        <MenuItem value={ CLEANING_SERVICE_TEXT }>{ CLEANING_SERVICE_TEXT }</MenuItem>
                        <MenuItem value={ LOGISTICS_SERVICES_TEXT }>{ LOGISTICS_SERVICES_TEXT }</MenuItem>
                        <MenuItem value={ SECCURITY_SERVICES_TEXT }>{ SECCURITY_SERVICES_TEXT }</MenuItem>
                        <MenuItem value={ PERSONAL_TRANSPORT_SERVICES_TEXT }>
                            { PERSONAL_TRANSPORT_SERVICES_TEXT }
                        </MenuItem>
                        <MenuItem value={ OTHER_TEXT }>{ OTHER_TEXT }</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <TextField
                        required
                        minRows={ 4 }
                        multiline
                        placeholder="Beschreibung"
                        value={ formData.description }
                        onChange={ (e) => handleChange("description", e.target.value) }
                    />
                </FormControl>
                <Button
                    sx={ contactFormSubmitButtonStyles }
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    { SEND_REQUEST_TEXT }
                </Button>
            </Box>
        </Box>
    );
};

export default MyForm;
