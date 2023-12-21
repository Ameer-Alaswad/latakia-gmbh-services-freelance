import { Box, Typography } from '@mui/material';
import { backgroundImageStyle, contactUsTextStyles, containerStyle } from './styles';
import { CONTACT_US_TEXT } from '../../assets/text';

const ContactUsComponent = () => {


    return (
        <Box sx={ containerStyle }>
            <Box sx={ backgroundImageStyle }>
                <Typography sx={ contactUsTextStyles }>{ CONTACT_US_TEXT }</Typography>
            </Box>
        </Box>
    );
};

export default ContactUsComponent;
