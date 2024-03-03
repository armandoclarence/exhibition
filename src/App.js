import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import BendingExhibitor from './pages/admin/BendingExhibitor';
import ApprovedExhibitor from './pages/admin/ApprovedExhibitor';
import LayoutAdmin from './pages/admin/LayoutAdmin';
import LayoutExhibitor from './pages/exhibitor/LayoutExhibitor';
import CreateStall from './pages/exhibitor/CreateStall';
import EditStall from './pages/exhibitor/EditStall'
import LayoutUser from './pages/user/LayoutUser'
import StallList from './pages/user/StallList';
import UserContext from './UserContext';

function App() {
  const [user, setUser] = useState(null);
  

  const handleLogin = async (email, password) => {
    const user = await Login(email, password);
    setUser(user);
  };
  // console.log(user)



  return (
    <UserContext.Provider value={user}>
      {
        <div className="App">
        <Router>
          <Routes>
            <Route index path='/' element={<Login onLogin={handleLogin} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<LayoutAdmin />}>
              <Route path='bending' element={<BendingExhibitor />} />
              <Route path='approved' element={<ApprovedExhibitor />} />
            </Route>
            <Route path='/exhibitor' element={<LayoutExhibitor />}>
              <Route path='createStall' element={<CreateStall />} />
              <Route path='editStall' element={<EditStall />} />
            </Route>
            <Route path='/stall' element={<LayoutUser />}>
              <Route path=':id' element={<StallList/>} />
            </Route>
          </Routes>
        </Router>
      </div>
      }
    </UserContext.Provider>
  );
}

export default App;