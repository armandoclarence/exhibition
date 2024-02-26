import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Bending from './pages/admin/Bending';
import Approved from './pages/admin/Approved';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Bending />}>
            <Route path='bending' element={<Bending />} />
            <Route path='approved' element={<Approved />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
