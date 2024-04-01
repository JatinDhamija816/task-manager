import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useData } from '../../../contexts/DataProvider';
import { Link } from 'react-router-dom';

const Progress = () => {
    const { data, deletedata } = useData()
    const temp = data.filter((item) => item.status === 'progress')
    return (
        <>
            <div className='bg-white ' >
                <h1 className='bg-orange-500 flex justify-center p-1'>in Progress</h1>
                {
                    temp.map((task) => (
                        <div className='m-2 pb-4' key={task.id}>
                            <div className='w-5/6  bg-gray-300 m-auto mt-4 rounded-md'>
                                <div className='flex justify-between p-2'>
                                    <h4 className='font-semibold'>{task.title}</h4>
                                    <p className='bg-blue-400 p-1 rounded-md'>{task.priority}</p>
                                </div>
                                <hr className='p-1 mx-3' />
                                <p className='mx-3'>{task.desc}</p>
                                <div className='flex mx-3 justify-between mt-2'>
                                    <p className='font-semibold' >@{task.assignee}</p>
                                    <div className='flex'>
                                        <Link to={`/edit/${task.id}`}> <EditIcon /></Link>
                                        <button onClick={() => deletedata(task.id)}><DeleteIcon /></button>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <p className='bg-blue-400 p-1 rounded-md text-center'>in Progress</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default Progress
