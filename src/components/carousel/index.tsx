import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { images } from "../../assets";

import CarouselItem from "./CarouselItem";
import MobileNavigation from "./MobileNavigation";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function SwipeableTextMobileStepper() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    const mobileNavigationProps = {
        activeStep: activeStep,
        maxSteps: maxSteps,
        handleNext: handleNext,
        handleBack: handleBack,
        theme: theme
    }
    return (
        <Box sx={ { flexGrow: 1 } }>
            <AutoPlaySwipeableViews
                axis={ theme.direction === "rtl" ? "x-reverse" : "x" }
                index={ activeStep }
                onChangeIndex={ handleStepChange }
                enableMouseEvents
                interval={ 10000 }
            >
                <CarouselItem activeStep={ activeStep } />
            </AutoPlaySwipeableViews>
            <MobileNavigation
                { ...mobileNavigationProps }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
