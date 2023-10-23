import React from 'react';
import { Box } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type UpvoteCountProps = {
    count: number;
};

const UpvoteCount: React.FC<UpvoteCountProps> = ({ count }) => {
    return(
        <Box>
            <ExpandLessIcon />
            <div>{count}</div>
        </Box>
    )
}
export default UpvoteCount;