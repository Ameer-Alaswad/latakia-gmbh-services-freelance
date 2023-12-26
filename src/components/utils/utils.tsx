import { FormData } from "../form-page/contact-form";

export const containsLink = (formData: FormData): boolean => {
    const descriptionValue = formData.description.toLowerCase();
    return descriptionValue.includes("http://") || descriptionValue.includes("https://");
};


export const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
