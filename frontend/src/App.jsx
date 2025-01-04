import Updateuser from './Components/Updateuser';
import User from './Components/User';
import Createuser from './Components/Createuser';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
   
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Createuser />} />
                <Route path="/update/:id" element={<Updateuser />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App