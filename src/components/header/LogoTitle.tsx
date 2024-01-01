// LogoComponent.tsx
import { Box, Typography, useMediaQuery } from '@mui/material';
import { projectTitleStyles } from './styles';
import { LATAKIA_GMBH } from '../../assets/text';


const LogoTitle = () => {
    const matchesMobileSize = useMediaQuery("(max-width:462px)");
    return (
        <>
            <Box
                component="img"
                sx={ matchesMobileSize ? { width: '50px' } : { width: '80px' } }
                src="project-image.jpg"
                alt="project-logo"
            />
            <Typography
                sx={
                    matchesMobileSize
                        ? projectTitleStyles
                        : { fontSize: '24px' }
                }
                component="div"
            >
                { LATAKIA_GMBH }
            </Typography>
        </>
    );
};

export default LogoTitle;
