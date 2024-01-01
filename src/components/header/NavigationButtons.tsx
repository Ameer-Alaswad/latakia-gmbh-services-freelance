
import { Box, Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HOME_TEXT, CONTACT_US_TEXT_IN_HEADER } from '../../assets/text';



const NavigationButtons = () => {
    const matchesMobileSize = useMediaQuery("(max-width:462px)");

    const navigate = useNavigate();

    return (
        <Box>
            <Button
                onClick={ () => navigate('/') }
                sx={ matchesMobileSize ? { fontSize: '12px' } : { fontSize: '17px' } }
                color="inherit"
            >
                { HOME_TEXT }
            </Button>
            <Button
                onClick={ () => navigate('/contact-us') }
                sx={ matchesMobileSize ? { fontSize: '12px' } : { fontSize: '17px' } }
                color="inherit"
            >
                { CONTACT_US_TEXT_IN_HEADER }
            </Button>
        </Box>
    );
};

export default NavigationButtons;
