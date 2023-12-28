import {
    ANGEBOT_TEXT,
    IF_YOU_ARE_INTERESTED_BUTTON_TEXT,
} from "../../assets/text";
import SwipeableTextMobileStepper from "../carousel";
import TitlebarBelowImageList from "../services-overview";
import { Button, Box, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
    dividerStyles,
    requestServiceButtonStyles,
    requestServiceContainerStyles,
    requestTitleTextStyles,
} from "./styles";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <SwipeableTextMobileStepper />
            <TitlebarBelowImageList />
            <Box sx={ requestServiceContainerStyles }>
                <Typography sx={ requestTitleTextStyles } variant="h4">
                    { IF_YOU_ARE_INTERESTED_BUTTON_TEXT }
                </Typography>
                <Divider sx={ dividerStyles } />
                <Button
                    onClick={ () => navigate("/contact-us") }
                    sx={ requestServiceButtonStyles }
                >
                    { ANGEBOT_TEXT }
                </Button>
            </Box>
        </div>
    );
};

export default LandingPage;
