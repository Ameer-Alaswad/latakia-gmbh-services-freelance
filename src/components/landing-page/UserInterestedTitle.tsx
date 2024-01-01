import { Typography } from "@mui/material"
import { requestTitleTextStyles } from "./styles"
import { IF_YOU_ARE_INTERESTED_BUTTON_TEXT } from "../../assets/text"

const UserInterestedTitle = () => {
    return (
        <Typography sx={ requestTitleTextStyles } variant="h4">
            { IF_YOU_ARE_INTERESTED_BUTTON_TEXT }
        </Typography>
    )
}

export default UserInterestedTitle