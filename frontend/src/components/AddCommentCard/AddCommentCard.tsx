import React from 'react'; 
import { Box, Button, TextField } from '@mui/material';

const AddCommentCard: React.FC = () => {
    return <Box>
        <h3>Add Comment</h3>
        <TextField
          id="outlined-multiline-static"
          placeholder="Type your comment here"
          multiline
          rows={4}
          maxRows={6}
        />
        <Box>
            <p>{`250 characters left`}</p>
            <Button>Post Comment</Button>
        </Box>
    </Box>
}
export default AddCommentCard;
