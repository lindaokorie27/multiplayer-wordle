import React from 'react';
import { Button, FormControl, FormHelperText, FormGroup, Input, InputLabel, TextField, Select, MenuItem } from '@mui/material';

const FeedbackForm:React.FC = () => {
    return (
        <form>
            <h2>Create New Feedback</h2>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="title">Feedback Title</InputLabel>
                    <Input id="title" aria-describedby="title-helper-text" />
                    <FormHelperText id="title-helper-text">Add a short, descriptive headline</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Category"
                        // onChange={handleChange}
                    >
                        <MenuItem value="feature">Feature</MenuItem>
                        <MenuItem value="ui">UI</MenuItem>
                        <MenuItem value="ux">UX</MenuItem>
                        <MenuItem value="enhancement">Enhancement</MenuItem>
                        <MenuItem value="bug">Bug</MenuItem>
                    </Select>
                    <FormHelperText id="category-helper-text">Add a short, descriptive headline</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="status">Update Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Update Status"
                        // onChange={handleChange}
                    >
                        <MenuItem value="planned">Planned</MenuItem>
                        <MenuItem value="in-progress">In Progress</MenuItem>
                        <MenuItem value="live">Live</MenuItem>
                    </Select>
                    <FormHelperText id="status-helper-text">Add a short, descriptive headline</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="detail">Feedback Detail</InputLabel>
                    <TextField id="detail" aria-describedby="detail-helper-text" />
                    <FormHelperText id="detail-helper-text">Include any specific comments on what should be improved, added, etc.</FormHelperText>
                </FormControl>
                <div>
                    <Button>Delete</Button>
                    <div>
                        <Button>Cancel</Button>
                        <Button>Add Feedback</Button>
                    </div>
                </div>
            </FormGroup>
        </form>
    );
}
export default FeedbackForm;
