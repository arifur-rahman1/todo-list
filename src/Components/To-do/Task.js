import React from 'react';
import update from '../../assets/contract.png'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Task = ({ t, setTask, tasks }) => {
    const { _id, task } = t;

    const deleteTask = (id, task) => {

        const objTask = { task };
        // post data to the new server
        fetch('https://upper-chesterfield-58510.herokuapp.com/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(objTask)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


        // delete task 
        const url = `https://upper-chesterfield-58510.herokuapp.com/task/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = tasks.filter(todo => todo._id !== id)
                    setTask(remaining);
                }
            })
        toast('Yeah!! You have completed the task')
    }
    return (
        <tr>
            <td>
                <label>
                    <input onClick={() => deleteTask(_id, task)} type="checkbox" class="checkbox" />
                </label>
            </td>
            <td>{task}</td>
            <td>
                <Link to={`/update/${_id}`} class="btn btn-ghost"><span><img src={update} /></span> </Link>

            </td>


        </tr>

    );
};

export default Task;