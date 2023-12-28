import { Box, Typography, Link } from "@mui/material";
import { familyFontCursive } from "./styles";
import {
    COMPANY_EMAIL,
    EMAIL_TEXT,
    PHONE_NUMBER,
    WEBSITE_OWNER_EMAIL_TEXT,
    COMPANY_OWNERS_NAMES,
    HEADQUARTER_OF_THE_COMPANY,
    DISTRICT_AREA,
    COMMERCIAL_REGISTER,
    MOBILEnUMBER
} from "../../assets/text";

const ProductOwnersData = () => {
    return (
        <Box>
            <Typography sx={ familyFontCursive } variant="body1">
                { COMPANY_OWNERS_NAMES }
            </Typography>
            <Typography sx={ familyFontCursive } variant="body1">
                { HEADQUARTER_OF_THE_COMPANY }
            </Typography>
            <Typography sx={ familyFontCursive } variant="body1">
                { DISTRICT_AREA }
            </Typography>
            <Typography sx={ familyFontCursive } variant="body1">
                { COMMERCIAL_REGISTER }
            </Typography>
            <Typography sx={ familyFontCursive } variant="body1">
                { MOBILEnUMBER }: { PHONE_NUMBER }
            </Typography>
            <Typography sx={ familyFontCursive } variant="body1">
                { EMAIL_TEXT }:{ " " }
                <Link href={ WEBSITE_OWNER_EMAIL_TEXT } sx={ { color: "#bbdefb" } }>
                    { COMPANY_EMAIL }
                </Link>
            </Typography>
        </Box>
    );
};

export default ProductOwnersData;
