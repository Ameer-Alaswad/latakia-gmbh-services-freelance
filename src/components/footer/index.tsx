import { Box, Divider } from "@mui/material";

import {
    footerMailContainerStyles,
    footerGridStyles,
    dividerStyles,
} from "./styles";

import ProductOwnersData from "./ProductOwnersData";
import ProductLogoTitle from "./ProductLogoTitle";
import AllRightReserved from "./AllRightReserved";
import DevelopedBy from "./developed-by";

const Footer = () => {

    return (
        <Box id="main-container" component="footer" sx={ footerMailContainerStyles }>
            <Box sx={ footerGridStyles }>
                <ProductLogoTitle />
                <ProductOwnersData />
                <Box sx={ { flex: 1 } }></Box>
            </Box>
            <AllRightReserved />
            <Divider sx={ dividerStyles } />
            <DevelopedBy />
        </Box>
    );
};

export default Footer;
