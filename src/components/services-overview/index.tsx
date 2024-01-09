import { Box, Divider, Typography } from "@mui/material";
import {
    servicesImagesListMainContainerStyles,
    servicesTitleStyles,
} from "./styles";
import { SERVICES_TITLE_TEXT } from "../../assets/text";
import { dividerStyles } from "../landing-page/styles";
import ServicesListItems from "./ServicesListItems";

export default function ServicesOverviewList() {
    return (
        <Box sx={ servicesImagesListMainContainerStyles }>
            <Typography sx={ servicesTitleStyles }>{ SERVICES_TITLE_TEXT }</Typography>
            <Divider sx={ dividerStyles } />
            <ServicesListItems />
        </Box>
    );
}
