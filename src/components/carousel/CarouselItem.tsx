import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ANGEBOT_TEXT } from "../../assets/text";
import { carouselTextOneStyles, carouselTextTwoStyles, carouselTextsContainer, carouselImagesNdTextContainer, angebotButtonStyles, carouselTextOneSpanStyles } from "./styles";

interface CarouselItemProps {
    step: {
        label: string;
        imgPath: string;
        textOne: string;
        textTwo: string;
    };
    activeStep: number;
    index: number;
    navigate: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ step, activeStep, index, navigate }) => {
    return (
        <div key={ step.label }>
            { Math.abs(activeStep - index) <= 2 ? (
                <Box
                    sx={ {
                        ...carouselImagesNdTextContainer,
                        backgroundImage: `url(${step.imgPath})`,
                    } }
                >
                    <Box sx={ carouselTextsContainer }>
                        <Typography sx={ carouselTextOneStyles }>
                            <span style={ carouselTextOneSpanStyles }>{ step.textOne }</span>
                        </Typography>
                        <Typography sx={ carouselTextTwoStyles }>{ step.textTwo }</Typography>
                        <Button onClick={ navigate } sx={ angebotButtonStyles }>
                            { ANGEBOT_TEXT }
                        </Button>
                    </Box>
                </Box>
            ) : null }
        </div>
    );
};

export default CarouselItem;
