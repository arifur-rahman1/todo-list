import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const list = e.target.todo.value;
        console.log(list);
        const task = {
            task: list
        }
        console.log(task);
        const url = `https://upper-chesterfield-58510.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        e.target.todo.value = '';
        toast('Your task has been added to the todo list')
    }
    return (
        <div>

            <div className='my-36 flex justify-center'>
                <div>
                    <div className='my-8'>
                        <h1 className='text-4xl font-bold' >TO-Do List</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-1'>

                            <textarea type="text" name='todo' placeholder="Your new task" class="input input-bordered w-full max-w-xs" />

                            <input type="submit" value={'ADD Task'} class="btn w-full max-w-xs"
                            />
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;