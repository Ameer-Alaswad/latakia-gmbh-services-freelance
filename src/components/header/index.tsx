import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { headerStyles, headerTransplantStyles } from './styles';

export default function ButtonAppBar() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar sx={ trigger ? headerStyles : headerTransplantStyles } position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={ { mr: 2 } }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}