import { Box, Typography } from '@mui/material'
import { allRightsReservedContainerStyles, allRightsReservedStyles } from './styles'
import { RIGHTS_RESERVED_TEXT } from '../../assets/text'

const AllRightReserved = () => {
    return (
        <Box sx={ allRightsReservedContainerStyles }>
            <Typography variant="body2" sx={ allRightsReservedStyles }>
                &copy; { new Date().getFullYear() } { RIGHTS_RESERVED_TEXT }
            </Typography>
        </Box>
    )
}

export default AllRightReserved