import { Grid, Typography, Link, Divider, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
    companyTitleStyles,
    footerGridStyles,
    footerMailContainerStyles,
    allRightsReservedContainerStyles,
    allRightsReservedStyles,
    dividerStyles,
    designedByStyles,
    designerNameStyles,
    familyFontCursive,
} from "./styles";
import {
    ADDRESS_DETAILS_TEXT,
    ADDRESS_TEXT,
    COMPANY_EMAIL,
    CONTACT_TEXT,
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
            <Grid container spacing={ 3 }>
                <Grid sx={ footerGridStyles } item xs={ 12 } md={ 4 }>
                    <Box
                        component="img"
                        sx={ matchesMobileSize ? { width: "50px" } : { width: "80px" } }
                        src="project-image.jpg"
                        alt="project-logo"
                    />
                    <Typography variant="h5" gutterBottom sx={ companyTitleStyles }>
                        { LATAKIA_GMBH }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                    <Typography
                        sx={ familyFontCursive }
                        variant="body1"
                    >
                        <strong>{ CONTACT_TEXT }:</strong> { PHONE_NUMBER }
                    </Typography>
                    <Typography
                        sx={ familyFontCursive }
                        variant="body1"
                    >
                        <strong>{ ADDRESS_TEXT }:</strong> { ADDRESS_DETAILS_TEXT }
                    </Typography>
                    <Typography
                        sx={ familyFontCursive }
                        variant="body1"
                    >
                        <strong>{ EMAIL_TEXT }:</strong>{ " " }
                        <Link href={ WEBSITE_OWNER_EMAIL_TEXT } sx={ { color: "#bbdefb" } }>
                            { COMPANY_EMAIL }
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 4 } >
                    <Typography sx={ allRightsReservedStyles } variant="body2">
                        &copy; { new Date().getFullYear() } { RIGHTS_RESERVED_TEXT }
                    </Typography>
                </Grid>
            </Grid>
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
