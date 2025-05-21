import React from 'react';
import { useLoaderData } from 'react-router';

const MyPostedData = () => {
    const userPostedTask = useLoaderData();
    console.log(userPostedTask);
    return (
        <div>
            <h1>Welcome to the MyPosted Data Page</h1>
            {
                userPostedTask.map((task) => <li>{task.title}</li>)
            }
        </div>
    );
};

export default MyPostedData;