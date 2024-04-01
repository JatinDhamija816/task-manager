import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Add from './components/Add'
import Edit from './components/Edit'
function App() {
  return (
    <div className='bg-gradient-to-r from bg-purple-400 to-blue-400 min-h-screen'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}
export default App
