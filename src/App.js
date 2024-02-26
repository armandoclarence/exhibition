import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import ExhibitorList from './pages/admin/ExhibitorList';
import LayoutAdmin from './pages/admin/LayoutAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<LayoutAdmin />}>
            <Route path='bending' element={<ExhibitorList />} />
            <Route path='approved' element={<ExhibitorList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
