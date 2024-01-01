import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography,
} from "@mui/material";
import {
    imageListItemStyles,
    serviceImageDescriptionStyles,
    serviceImageItemContainerStyles,
    serviceImageTitleStyles,
    servicesImagesListContainer,
} from "./styles";
import { servicesOverviewData } from "../../assets";

const ServicesListItems = () => {
    return (
        <ImageList sx={ servicesImagesListContainer }>
            { servicesOverviewData.map((item) => (
                <ImageListItem sx={ imageListItemStyles } key={ item?.img }>
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
                            <Box sx={ serviceImageDescriptionStyles }>{ item?.description } </Box>
                        }
                        position="below"
                    />
                </ImageListItem>
            )) }
        </ImageList>
    );
};

export default ServicesListItems;
