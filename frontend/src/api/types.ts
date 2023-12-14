export type User = {
    image: string;
    name: string;
    username: string;
}

export type Reply = {
    content: string;
    replyingTo: string;
    user: User;
}

export type Comment = {
    id: number;
    content: string;
    user: User;
    replies?: Array<Reply>;
}

export type Comments = {
    comments: Array<Comment>;
    commentCount: number;
}

export type Feedback = {
    id: number;
    title: string;
    description: string;
    category: string;
    comments: Comments;
    upvotes: number;
    status: string;
    tags: Array<string>;
};

export type ProductRequests = Array<Feedback>;