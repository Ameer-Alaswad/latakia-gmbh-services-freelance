
import { Typography } from "@mui/material";
import { contactUsTitleStyles } from "./styles";
import { CONTACT_US_TEXT } from "../../../assets/text";


const FormTitle = () => {
    return (
        <Typography sx={ contactUsTitleStyles } variant="h4">
            { CONTACT_US_TEXT }
        </Typography>
    );
};

export default FormTitle;
