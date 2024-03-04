import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import { UserProvider } from './pages/UserContext';
import NotFounded from './pages/NotFounded'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const handleLogin = function(){
    console.log("HANDLE LOGIN HERE!")
  }


 
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
         
//             <Route path='/' element={<Login onLogin={handleLogin} />} />
//             <Route path='/register' element={<Register />} />
//             <Route path='/admin' element={<LayoutAdmin />}>
//               <Route path='bending' element={<BendingExhibitor />} />
//               <Route path='approved' element={<ApprovedExhibitor />} />
//             </Route>
//             <Route path='/exhibitor' element={<LayoutExhibitor />}>
//               <Route path='createStall' element={<CreateStall />} />
//               <Route path='editStall' element={<EditStall />} />
//             </Route>
//             <Route path='/stall' element={<LayoutUser />}>
//               <Route path=':id' element={<StallList/>} />
//             </Route>
//          </Routes>
//       </Router>
//     </div>
// )}
return (
  <div className="App">
    {/* Wrap the entire application with UserProvider */}
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin} />} />
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
            <Route path=':id' element={<StallList />} />
          </Route>
          <Route path='*' element={<NotFounded />} />
        </Routes>
      </Router>
    </UserProvider> {/* Closing UserProvider */}
  </div>
);
}


export default App;