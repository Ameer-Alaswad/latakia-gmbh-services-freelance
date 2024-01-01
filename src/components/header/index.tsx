import { AppBar, Box, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import {
    headerStyles,
    headerTransplantStyles,
    navbarContentContainer,
} from "./styles";
import LogoTitle from "./LogoTitle";
import NavigationButtons from "./NavigationButtons";

const ButtonAppBar = () => {

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
                    <LogoTitle />
                    <NavigationButtons />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default ButtonAppBar;
