import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { images } from "../../assets";
import {
    carouselTextOneStyles,
    carouselTextTwoStyles,
    carouselTextsContainer,
    carouselImagesNdTextContainer,
    angebotButtonStyles,
} from "./styles";
import { ANGEBOT_TEXT, NEXT_TEXT } from "../../assets/text";

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

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AutoPlaySwipeableViews
                axis={ theme.direction === "rtl" ? "x-reverse" : "x" }
                index={ activeStep }
                onChangeIndex={ handleStepChange }
                enableMouseEvents
                interval={ 10000 }
            >
                { images.map((step, index) => (
                    <div key={ step?.label }>
                        { Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                sx={ {
                                    ...carouselImagesNdTextContainer,
                                    backgroundImage: `url(${step.imgPath})`,
                                } }
                            >
                                <Box sx={ carouselTextsContainer }>
                                    <Typography sx={ carouselTextOneStyles }>
                                        { step?.textOne }
                                    </Typography>
                                    <Typography sx={ carouselTextTwoStyles }>
                                        { step?.textTwo }
                                    </Typography>
                                    <Button sx={ angebotButtonStyles }>{ ANGEBOT_TEXT }</Button>
                                </Box>
                            </Box>
                        ) : null }
                    </div>
                )) }
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={ maxSteps }
                position="static"
                activeStep={ activeStep }
                nextButton={
                    <Button
                        size="small"
                        onClick={ handleNext }
                        disabled={ activeStep === maxSteps - 1 }
                    >
                        { NEXT_TEXT }
                        { theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        ) }
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={ handleBack } disabled={ activeStep === 0 }>
                        { theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        ) }
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
