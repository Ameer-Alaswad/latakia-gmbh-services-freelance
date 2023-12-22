import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { servicesOverviewData } from "../../assets";
import { Box, Divider, Typography } from "@mui/material";
import {
    serviceImageDescriptionStyles,
    serviceImageItemContainerStyles,
    serviceImageTitleStyles,
    servicesImagesListContainer,
    servicesImagesListMainContainerStyles,
    servicesTitleStyles,
} from "./styles";
import { SERVICES_TITLE_TEXT } from "../../assets/text";
import { dividerStyles } from "../landing-page/styles";

export default function TitlebarBelowImageList() {

    return (
        <Box sx={ servicesImagesListMainContainerStyles }>

            <Typography sx={ servicesTitleStyles }>{ SERVICES_TITLE_TEXT }</Typography>
            <Divider sx={ dividerStyles } />

            <ImageList sx={ servicesImagesListContainer }>
                { servicesOverviewData.map((item) => (
                    <ImageListItem
                        sx={ {
                            margin: "30px",
                            width: "350px",
                        } }
                        key={ item.img }
                    >
                        <img
                            srcSet={ `${item?.img}?w=248&fit=crop&auto=format&dpr=2 2x` }
                            src={ `${item?.img}?w=248&fit=crop&auto=format` }
                            alt={ item?.title }
                            loading="lazy"
                        />

                        <ImageListItemBar
                            sx={ serviceImageItemContainerStyles }
                            title={
                                <Typography sx={ serviceImageTitleStyles } variant="h6">
                                    { item?.title }
                                </Typography>
                            }
                            subtitle={
                                <Box sx={ serviceImageDescriptionStyles }>
                                    { item?.description }{ " " }
                                </Box>
                            }
                            position="below"
                        />
                    </ImageListItem>
                )) }
            </ImageList>
        </Box>
    );
}
