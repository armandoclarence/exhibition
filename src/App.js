import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import BendingExhibitor from './pages/admin/BendingExhibitor';
import ApprovedExhibitor from './pages/admin/ApprovedExhibitor';
import LayoutAdmin from './pages/admin/LayoutAdmin';
import CreateStall from './pages/exhibitor/CreateStall';
import EditStall from './pages/exhibitor/EditStall';
import LayoutExhibitor from './pages/exhibitor/LayoutExhibitor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<LayoutAdmin />}>
            <Route path='bending' element={<BendingExhibitor />} />
            <Route path='approved' element={<ApprovedExhibitor />} />
          </Route>
          <Route path='/exhibitor' element={<LayoutExhibitor />}>
            <Route path='createStall' element={<CreateStall />} />
            <Route path='editStall' element={<EditStall />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
