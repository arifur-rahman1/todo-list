import React from 'react';

const Task = ({ todo }) => {
    const { task } = todo
    return (
        <div>
            <h1>{task}</h1>
        </div>
    );
};

export default Task;