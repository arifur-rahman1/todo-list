import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/task/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        const list = e.target.todo.value;
        console.log(list);
        const Updatedtask = {
            task: list
        }
        const url = `http://localhost:5000/task/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatedtask)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        e.target.todo.value = '';
    }

    return (
        <div>
            <div className='my-36 flex justify-center'>
                <div>
                    <div className='my-8'>
                        <h1 className='text-2xl font-bold' >Updating Task: {update.task}</h1>
                    </div>
                    <div>
                        <form onSubmit={handleUpdate} className='grid grid-cols-1 gap-1'>

                            <textarea type="text" name='todo' placeholder="Your Updated Task" class="input input-bordered w-full max-w-xs" />

                            <input type="submit" value={'Update'} class="btn w-full max-w-xs"
                            />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;