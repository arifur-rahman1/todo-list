import React, { useEffect, useState } from 'react';
import update from '../../assets/contract.png'
import { Link } from 'react-router-dom';
import Task from './Task';

const Tasklist = () => {

    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch('https://upper-chesterfield-58510.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);

    // const completeTask = () => {

    // }

    return (

        <div>

            <div class="overflow-x-auto flex justify-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Tasks</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map(t => <Task
                                key={t._id}
                                t={t}
                                tasks={tasks}
                                setTask={setTask}
                            ></Task>
                                // <tr>
                                //     <td>
                                //         <label>
                                //             <input onClick={completeTask(t._id)} type="checkbox" class="checkbox" />
                                //         </label>
                                //     </td>
                                //     <td>{t.task}</td>
                                //     <td>
                                //         <Link to={`/update/${t._id}`} class="btn btn-ghost"><span><img src={update} /></span> </Link>

                                //     </td>


                                // </tr>
                            )
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Tasklist;