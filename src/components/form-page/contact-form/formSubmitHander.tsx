// formSubmitHandler.ts

import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
    CONTACT_FORM_ERROR_MESSAGE,
    CONTACT_FORM_SUCCESS_MESSAGE,
    LINKS_NOW_ALLOWED_MESSAGE,
} from "../../../assets/text";
import { containsLink, isEmailValid } from "../../utils/utils";


const SERVICE_KEY: string | undefined = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_KEY: string | undefined = import.meta.env.VITE_TEMPLATE_ID;
const ACCOUNT_KEY: string | undefined = import.meta.env.VITE_PUBLIC_KEY;

if (!SERVICE_KEY || !TEMPLATE_KEY || !ACCOUNT_KEY) {
    throw new Error("Missing required environment variables.");
}


interface FormData {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    service: string;
    description: string;
}

export const handleSubmit = async (
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
    if (containsLink(formData)) {
        toast.error(LINKS_NOW_ALLOWED_MESSAGE);
        return;
    }

    if (!isEmailValid(formData.email)) {
        toast.error("Please enter a valid email address.");
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
            SERVICE_KEY,
            TEMPLATE_KEY,
            templateParams,
            ACCOUNT_KEY
        );
        setFormData({
            name: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            service: "",
            description: "",
        });
        toast.success(CONTACT_FORM_SUCCESS_MESSAGE);
        console.log("Email sent successfully", response);
        console.log(templateParams);
    } catch (error) {
        toast.error(CONTACT_FORM_ERROR_MESSAGE);
        console.error("Error sending email", error);
    }
};
