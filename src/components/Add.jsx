import { useState } from "react";
import { useData } from "../contexts/DataProvider";
import { useNavigate } from "react-router-dom";
const Add = () => {
    const navigate = useNavigate();
    const { addData } = useData()
    const initialValues = {
        title: '', desc: '', team: '', assignee: '', priority: 'P0', dueDate: '', status: 'Pending'
    }
    const [newTask, setNewTask] = useState(initialValues)
    const add = (e) => {
        e.preventDefault()
        const newData = {
            id: Date.now(),
            title: newTask.title,
            desc: newTask.desc,
            team: newTask.team,
            assignee: newTask.assignee,
            priority: newTask.priority,
            dueDate: newTask.dueDate,
            status: newTask.status,
        }
        addData(newData)
        setNewTask({
            title: '', desc: '', team: '', assignee: '', priority: 'P0', dueDate: '', status: 'Pending'
        })
        navigate('/');
    }

    return (
        <div className="">
            <div className='w-2/4 flex-col p-8 m-auto  text-center'>
                <div className='flex-row justify-start p-2 m-auto w-3/4 '>
                    <div className="">
                        <label className="">Title: </label>
                    </div>
                    <div>
                        <input className="m-1 p-1 rounded-md w-3/4" type="text" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Description: </label>
                    </div>
                    <div>
                        <textarea className="m-1 p-1 rounded-md w-3/4" value={newTask.desc} onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })} />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Team: </label>
                    </div>
                    <div>
                        <input className="m-1 p-1 rounded-md w-3/4" type="text" value={newTask.team} onChange={(e) => setNewTask({ ...newTask, team: e.target.value })} />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Assignees: </label>
                    </div>
                    <div>
                        <input className="m-1 p-1 rounded-md w-3/4" type="text" value={newTask.assignee} onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })} />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label>Due Date: </label>
                    </div>
                    <div>
                        <input type="date" className="m-1 p-1 rounded-md w-3/4" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Priority: </label>
                    </div>
                    <div>
                        <select className="m-1 p-1 rounded-md w-3/4" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                </div>
                <button onClick={add} className='bg-black text-white border-none w-2/4 p-2 m-2 rounded-xl text-lg' >Add</button>
            </div>
        </div>
    )
}

export default Add
