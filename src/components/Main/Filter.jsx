import { Link } from "react-router-dom"
import { useState } from "react";
const Filter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPriority, setFilterPriority] = useState('All');

    return (
        <div>
            <div className="flex md:flex-col m-4 p-2 justify-between ">
                <div className="flex md:flex-col">
                    <div className="flex md:flex-col">
                        <h4 className="m-1 p-1 ">Filter By: </h4>
                        <input className="m-1 p-1 rounded-md" type="text" placeholder="Assignee Name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <select className="m-1 p-1 px-5 rounded-md" value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
                            <option value="All">Priority</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                        <input className="m-1 p-1 rounded-md px-5" type="date" />
                    </div>
                </div>
                <button className="bg-blue-500 px-10 rounded-md text-white justify-end md:my-2 p-1"><Link to='/add'>Add New Task</Link></button>

            </div>
            <div className=" flex m-4 p-2 md:flex-col">
                <h4 className="m-1 mx-2 p-1 ">Sort By:</h4>
                <select className="m-1 p-1 px-5 rounded-md">
                    <option value="">Priority</option>
                    <option value="">P0</option>
                    <option value="">P1</option>
                    <option value="">P2</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
