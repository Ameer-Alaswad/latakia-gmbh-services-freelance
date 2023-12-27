import { Box, Typography } from "@mui/material";
import { companyTitleStyles, productLogoTitleContainerStyles } from "./styles";
import { LATAKIA_GMBH } from "../../assets/text";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductLogoTitle = () => {

    const matchesMobileSize = useMediaQuery("(max-width:462px)");
    return (
        <Box sx={ productLogoTitleContainerStyles }>
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
    );
};

export default ProductLogoTitle;
