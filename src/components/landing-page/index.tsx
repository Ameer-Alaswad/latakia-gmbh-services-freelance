
import SwipeableTextMobileStepper from "../carousel";
import TitlebarBelowImageList from "../services-overview";
import { Box, Divider } from "@mui/material";
import {
    dividerStyles,
    requestServiceContainerStyles,
} from "./styles";
import UserInterestedTitle from "./UserInterestedTitle";
import RequestServiceButton from "./RequestServiceButton";

const LandingPage = () => {

    return (
        <Box>
            <SwipeableTextMobileStepper />
            <TitlebarBelowImageList />
            <Box sx={ requestServiceContainerStyles }>
                <UserInterestedTitle />
                <Divider sx={ dividerStyles } />
                <RequestServiceButton />
            </Box>
        </Box>
    );
};

export default LandingPage;
