import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ANGEBOT_TEXT } from "../../assets/text";
import {
    carouselTextOneStyles,
    carouselTextTwoStyles,
    carouselTextsContainer,
    carouselImagesNdTextContainer,
    angebotButtonStyles,
    carouselTextOneSpanStyles,
} from "./styles";
import { images } from "../../assets";
import { useNavigate } from "react-router-dom";

interface CarouselItemProps {
    activeStep: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    activeStep,
}) => {
    const navigate = useNavigate()
    return (
        <>
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
                                    <span style={ carouselTextOneSpanStyles }>{ step?.textOne }</span>
                                </Typography>
                                <Typography sx={ carouselTextTwoStyles }>
                                    { step?.textTwo }
                                </Typography>
                                <Button
                                    onClick={ () => navigate("/contact-us") }
                                    sx={ angebotButtonStyles }
                                >
                                    { ANGEBOT_TEXT }
                                </Button>
                            </Box>
                        </Box>
                    ) : null }
                </div>
            )) }
        </>
    );
};

export default CarouselItem;
