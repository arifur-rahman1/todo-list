import React from 'react';
import { useParams } from 'react-router-dom';

const Confirm = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Are You done {id} task? </h1>
        </div>
    );
};

export default Confirm;