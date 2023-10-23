import React from 'react';
import { Card, CardContent, Chip } from '@mui/material';

import CommentCount from '../CommentCount/';
import UpvoteCount from '../UpvoteCount';
import { Feedback } from '@/api/types';




type FeedbackCardProps = {
    feedbackItem: Feedback;
}
const FeedbackCard:React.FC<FeedbackCardProps> = ({ feedbackItem }) => {
    return (
        <Card>
            <CardContent>
                <UpvoteCount count={feedbackItem.upvotes} />
                <div>
                    <div>{feedbackItem.title}</div>
                    <div>{feedbackItem.description}</div>
                    <div>{feedbackItem.tags.map((tag) => <Chip label={tag} />)}</div>
                </div>
                <CommentCount count={feedbackItem.comments.commentCount} />
            </CardContent>
        </Card>
    );
}
export default FeedbackCard;
