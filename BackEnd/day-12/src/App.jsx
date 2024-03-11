import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginForm from './components/Login'
import SignUp from './components/Signup'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import HomePage from './components/Home'
import Course from './components/Course'
import Profile from './components/Profile'
import Enroll from './components/Enroll'
import Payment from './components/Payment'
import Class from './components/Class'
import Cont from './components/Contact'
import Fpage from './components/Faq'
import Feedback from './components/Feedback'
import HomeAdmin from './components/HomeAdmin'
import ManageCourse from './components/ManageCourse'
import ManageUsers from './components/ManageUser'
import Feed from './components/Feed'

import Achievements from './components/Achievement'
function App() {


  return (
    <>
  
      <div className="App">
     <Router>
       <Routes>
       {/* <Route path="/"element={<MainPage/>}/> */}
        <Route path="/"element={<LoginForm/>}/> 
       <Route path="/SignUp"element={<SignUp/>}/>
       <Route path="/"element={<Topbar/>}/>
       <Route path="/Sidebar"element={<Sidebar/>}/>
       <Route path="/HomePage"element={<HomePage/>}/>
       <Route path='/Course'element={<Course/>}/>
       <Route path='/Profile'element={<Profile/>}/>
       <Route path='/Enroll' element={<Enroll/>}/>
       <Route path='/Payment'element={<Payment/>}/>
       <Route path='/Class' element={<Class/>}/>
       <Route path='/Cont' element={<Cont/>}/>
       <Route path='/Fpage'element={<Fpage/>}/>
       <Route path='/Feedback' element={<Feedback/>}/>
       <Route path='/HomeAdmin' element={<HomeAdmin/>}/>
       <Route path='/ManageCourse' element={<ManageCourse/>}/>
       <Route path='/ManageUsers' element={<ManageUsers/>}/>
       <Route path='/Feed'element={<Feed/>}/>
       <Route path='/Achievements' element={<Achievements/>}/>
       </Routes>
     </Router>
      </div>
      
    </>
  )
}

export default App