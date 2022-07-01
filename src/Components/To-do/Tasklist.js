import React, { useEffect, useState } from 'react';
import update from '../../assets/contract.png'
import { Link } from 'react-router-dom';

const Tasklist = () => {

    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);
    return (

        <div>

            <div class="overflow-x-auto flex justify-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map(t => <tr>
                                <td>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </td>
                                <td>{t.task}</td>
                                <td>
                                    <Link to={`/update/${t._id}`} class="btn btn-ghost"><span><img src={update} /></span> </Link>

                                </td>


                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Tasklist;