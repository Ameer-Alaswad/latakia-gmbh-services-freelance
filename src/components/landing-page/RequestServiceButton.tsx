import { Button } from "@mui/material"
import { requestServiceButtonStyles } from "./styles"
import { ANGEBOT_TEXT } from "../../assets/text"
import { useNavigate } from "react-router-dom";

const RequestServiceButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            onClick={ () => navigate("/contact-us") }
            sx={ requestServiceButtonStyles }
        >
            { ANGEBOT_TEXT }
        </Button>
    )
}

export default RequestServiceButton