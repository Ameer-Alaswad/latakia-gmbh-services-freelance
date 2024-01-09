// SubmitButton.tsx

import { Button } from "@mui/material";
import { contactFormSubmitButtonStyles } from "./styles";
import { SEND_REQUEST_TEXT } from "../../../assets/text";



const SubmitButton = () => {
    return (
        <Button
            sx={ contactFormSubmitButtonStyles }
            type="submit"
            variant="contained"
            color="primary"
        >
            { SEND_REQUEST_TEXT }
        </Button>
    );
};

export default SubmitButton;
