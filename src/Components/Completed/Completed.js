import React, { useEffect, useState } from 'react';

const Completed = () => {
    const [complete, setComplete] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/complete')
            .then(res => res.json())
            .then(data => setComplete(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto flex justify-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Completed Tasks</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            complete.map(t =>
                                <tr>
                                    <td>

                                    </td>
                                    <td>{t.task}</td>



                                </tr>
                            )
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Completed;