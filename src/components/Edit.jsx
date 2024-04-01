import { useState } from "react"
import { useData } from "../contexts/DataProvider"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, updateData } = useData()
    const initialData = data.find((item) => item.id === Number(id))
    const [newTask, setNewTask] = useState(initialData)
    const handleUpdate = (e) => {
        e.preventDefault()
        const newData = {
            id: Date.now(),
            title: initialData.title,
            desc: initialData.desc,
            team: initialData.team,
            assignee: initialData.assignee,
            priority: newTask.priority,
            dueDate: initialData.dueDate,
            status: newTask.status,
        }
        updateData(Number(id), newData)
        navigate('/');
    }

    return (
        <div>
            <div className='w-2/4 flex-col p-8 m-auto  text-center'>
                <div className='flex-row justify-start p-2 m-auto w-3/4 '>
                    <div className="">
                        <label className="">Title: </label>
                    </div>
                    <div>
                        <input className="m-1 p-1 rounded-md w-3/4" type="text" placeholder={initialData.title} disabled />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Description: </label>
                    </div>
                    <div>
                        <textarea className="m-1 p-1 rounded-md w-3/4" placeholder={initialData.desc} disabled />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Team: </label>
                    </div>
                    <div>
                        <input className="m-1 p-1 rounded-md w-3/4" type="text" placeholder={initialData.team} disabled />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Assignees: </label>
                    </div>
                    <div>
                        <input className="m-1 p-1 rounded-md w-3/4" type="text" placeholder={initialData.assignee} disabled />
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Status: </label>
                    </div>
                    <div>
                        <select className="m-1 p-1 rounded-md w-3/4" placeholder={initialData.status} value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
                            <option value="pending">Pending</option>
                            <option value="progress">Progress</option>
                            <option value="completed">Completed</option>
                            <option value="deployed">Deployed</option>
                            <option value="deffered">Deffered</option>
                        </select>
                    </div>
                </div>
                <div className='flex-col p-2 m-auto w-3/4'>
                    <div>
                        <label className="m-1 p-1 rounded-md">Priority: </label>
                    </div>
                    <div>
                        <select className="m-1 p-1 rounded-md w-3/4" placeholder={initialData.priority} value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                </div>
                <button className='bg-black text-white border-none w-2/4 p-2 m-2 rounded-xl text-lg' onClick={handleUpdate} >Update</button>
            </div>
        </div>
    )
}
export default Edit
