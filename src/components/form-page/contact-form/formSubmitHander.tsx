// formSubmitHandler.ts

import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
    CONTACT_FORM_ERROR_MESSAGE,
    CONTACT_FORM_SUCCESS_MESSAGE,
    LINKS_NOW_ALLOWED_MESSAGE,
} from "../../../assets/text";
import { containsLink, isEmailValid } from "../../utils/utils";

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
            "service_56p4lg1",
            "template_8d22j08",
            templateParams,
            "WpgTXMD0k0R12bTnt"
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
