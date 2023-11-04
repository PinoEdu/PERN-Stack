import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Menu from './components/Navbar'
import { Container } from '@mui/material'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>
        <Container>
          <Routes>
              <Route path='/' element={<TaskList />}></Route>
              <Route path='/tasks/new' element={<TaskForm />}></Route>
              <Route path='/tasks/:id/edit' element={<TaskForm />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}
