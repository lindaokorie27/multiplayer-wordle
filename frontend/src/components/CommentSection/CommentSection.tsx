import React from "react";
import { Box } from "@mui/material";
import { Comments } from "@/api/types";

type CommentSectionProps = {
    comments: Comments;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
    return (
        <Box>
            <h3>{`${comments.commentCount} Comments`}</h3>
        </Box>
    )
}
export default CommentSection;
