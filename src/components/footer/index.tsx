import { Box, Typography, Link, Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
    companyTitleStyles,
    footerMailContainerStyles,
    footerGridStyles,
    allRightsReservedContainerStyles,
    allRightsReservedStyles,
    dividerStyles,
    designedByStyles,
    designerNameStyles,
} from "./styles";
import {
    DESIGNED_BY_TEXT,
    DESIGNER_NAME_TEXT,
    DESIGNER_WEBSITE_TEXT,
    LATAKIA_GMBH,
    RIGHTS_RESERVED_TEXT,
} from "../../assets/text";
import ProductOwnersData from "./ProductOwnersData";

const Footer = () => {
    const matchesMobileSize = useMediaQuery("(max-width:462px)");

    return (
        <Box id="main-container" component="footer" sx={ footerMailContainerStyles }>
            <Box sx={ footerGridStyles }>
                <Box sx={ {
                    flex: 1.1, display: "flex",
                    "@media (max-width: 639px)": {
                        marginBottom: "20px",
                    },

                } }>
                    <Box
                        component="img"
                        sx={ matchesMobileSize ? { width: "50px" } : { width: "80px" } }
                        src="project-image.jpg"
                        alt="project-logo"
                    />
                    <Typography variant="h5" gutterBottom sx={ companyTitleStyles }>
                        { LATAKIA_GMBH }
                    </Typography>
                </Box>
                <ProductOwnersData />
                <Box sx={ { flex: 1 } }>
                </Box>
            </Box>
            <Box sx={ allRightsReservedContainerStyles }>
                <Typography variant="body2" sx={ allRightsReservedStyles }>
                    &copy; { new Date().getFullYear() } { RIGHTS_RESERVED_TEXT }
                </Typography>
            </Box>
            <Divider sx={ dividerStyles } />
            <Typography variant="body2" sx={ designedByStyles }>
                { DESIGNED_BY_TEXT }{ " " }
                <Link href={ DESIGNER_WEBSITE_TEXT } sx={ designerNameStyles }>
                    { DESIGNER_NAME_TEXT }
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
