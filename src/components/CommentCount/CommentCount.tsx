import React from 'react'; 
import { Box } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

type CommentCountProps = {
    count: number;
};

const CommentCount: React.FC<CommentCountProps> = ({ count }) => {
    return (<Box>
        <ChatBubbleIcon />
        <div>{count}</div>
    </Box>)
}
export default CommentCount;
