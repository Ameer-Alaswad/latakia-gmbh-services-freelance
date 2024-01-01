
import SwipeableTextMobileStepper from "../carousel";
import { Box, Divider } from "@mui/material";
import {
    dividerStyles,
    requestServiceContainerStyles,
} from "./styles";
import UserInterestedTitle from "./UserInterestedTitle";
import RequestServiceButton from "./RequestServiceButton";
import ServicesOverviewList from "../services-overview";

const LandingPage = () => {

    return (
        <Box>
            <SwipeableTextMobileStepper />
            <ServicesOverviewList />
            <Box sx={ requestServiceContainerStyles }>
                <UserInterestedTitle />
                <Divider sx={ dividerStyles } />
                <RequestServiceButton />
            </Box>
        </Box>
    );
};

export default LandingPage;
