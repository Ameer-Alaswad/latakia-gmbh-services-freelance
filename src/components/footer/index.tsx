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
    familyFontCursive,
} from "./styles";
import {
    COMPANY_EMAIL,
    DESIGNED_BY_TEXT,
    DESIGNER_NAME_TEXT,
    DESIGNER_WEBSITE_TEXT,
    EMAIL_TEXT,
    LATAKIA_GMBH,
    PHONE_NUMBER,
    RIGHTS_RESERVED_TEXT,
    WEBSITE_OWNER_EMAIL_TEXT,
} from "../../assets/text";

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
                <Box>
                    <Typography sx={ familyFontCursive } variant="body1">
                        <strong>Geschäftsführer:  Adnan El-Bekai, Bilal Naesah</strong>
                    </Typography>
                    <Typography sx={ familyFontCursive } variant="body1">
                        <strong>Sitz der Gesellschaft: Berlin
                        </strong>
                    </Typography>
                    <Typography sx={ familyFontCursive } variant="body1">
                        <strong>Amtsgericht: Berlin-Charlottenburg
                        </strong>
                    </Typography>
                    <Typography sx={ familyFontCursive } variant="body1">
                        <strong>Handelsregister: HRB 254164
                        </strong>
                    </Typography>
                    <Typography sx={ familyFontCursive } variant="body1">
                        <strong>Handnummer: { PHONE_NUMBER }
                        </strong>
                    </Typography>
                    <Typography sx={ familyFontCursive } variant="body1">
                        <strong>{ EMAIL_TEXT }:</strong>{ " " }
                        <Link href={ WEBSITE_OWNER_EMAIL_TEXT } sx={ { color: "#bbdefb" } }>
                            { COMPANY_EMAIL }
                        </Link>
                    </Typography>
                </Box>
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
