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
import { UserProvider } from './pages/UserProvider';
import NotFounded from './pages/NotFounded';
import Chat from './pages/chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={
              <UserProvider>
                <LayoutAdmin />
              </UserProvider>
            }>
            <Route path='bending' element={<BendingExhibitor />} />
            <Route path='approved' element={<ApprovedExhibitor />} />
          </Route>
          <Route path='/exhibitor' element={
              <UserProvider>
                <LayoutExhibitor />
              </UserProvider>
            }>
            <Route path='createStall' element={<CreateStall />} />
            <Route path='editStall' element={<EditStall />} />
          </Route>
          <Route path='/stall' element={
              <UserProvider>
                <LayoutUser />
              </UserProvider>
            }>
            <Route path=':id' element={<StallList />} />
          </Route>
          <Route path='*' element={<NotFounded />} />
          <Route path='chat' element={<Chat />} /> 
        </Routes>
      </Router>
    </div>
  );
}


export default App;