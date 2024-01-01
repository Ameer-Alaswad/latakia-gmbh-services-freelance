// MobileStepperComponent.tsx

import React from "react";
import { MobileStepper, Button, Theme } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { BACK_TEXT, NEXT_TEXT } from "../../assets/text";

interface MobileNavigationProps {
    activeStep: number;
    maxSteps: number;
    handleNext: () => void;
    handleBack: () => void;
    theme: Theme;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
    activeStep,
    maxSteps,
    handleNext,
    handleBack,
    theme,
}) => {
    return (
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
                    { BACK_TEXT }
                </Button>
            }
        />
    );
};

export default MobileNavigation;
