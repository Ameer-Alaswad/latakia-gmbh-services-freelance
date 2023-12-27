import { Link, Typography } from "@mui/material"
import { designedByStyles, designerNameStyles } from "./styles"
import { DESIGNED_BY_TEXT, DESIGNER_NAME_TEXT, DESIGNER_WEBSITE_TEXT } from "../../assets/text"

const DevelopedBy = () => {
    return (
        <Typography variant="body2" sx={ designedByStyles }>
            { DESIGNED_BY_TEXT }{ " " }
            <Link href={ DESIGNER_WEBSITE_TEXT } sx={ designerNameStyles }>
                { DESIGNER_NAME_TEXT }
            </Link>
        </Typography>
    )
}

export default DevelopedBy