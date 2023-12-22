import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useNavigate } from 'react-router-dom';

import {
    headerStyles,
    headerTransplantStyles,
    navbarContentContainer,
    projectTitleStyles,
} from "./styles";
import { CONTACT_US_TEXT_IN_HEADER, HOME_TEXT, LATAKIA_GMBH } from "../../assets/text";

const ButtonAppBar = () => {
    const navigate = useNavigate();
    const matchesMobileSize = useMediaQuery("(max-width:462px)");
    const scrollYIsZero = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar
                sx={ scrollYIsZero ? headerStyles : headerTransplantStyles }
                position="fixed"
            >
                <Toolbar sx={ navbarContentContainer }>
                    <Box
                        component="img"
                        sx={ matchesMobileSize ? { width: "50px" } : { width: "80px" } }
                        src="project-image.jpg"
                        alt="project-logo"
                    />
                    <Typography
                        sx={
                            matchesMobileSize
                                ? projectTitleStyles
                                : { fontSize: "24px", }
                        }
                        component="div"
                    >
                        { LATAKIA_GMBH }
                    </Typography>
                    <Box>
                        <Button onClick={ () => navigate("/") } sx={
                            matchesMobileSize
                                ? { fontSize: "12px", }
                                : { fontSize: "17px", }
                        } color="inherit">{ HOME_TEXT }</Button>
                        <Button onClick={ () => navigate("/contact-us") } sx={
                            matchesMobileSize
                                ? { fontSize: "12px", }
                                : { fontSize: "17px", }
                        } color="inherit">{ CONTACT_US_TEXT_IN_HEADER }</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default ButtonAppBar;
