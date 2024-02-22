
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginForm from './components/Login'
import SignUp from './components/Signup'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import HomePage from './components/Home'
function App() {


  return (
    <>
  
      <div className="App">
     <Router>
       <Routes>
       <Route path="/"element={<LoginForm/>}/>
       <Route path="/SignUp"element={<SignUp/>}/>
       <Route path="/"element={<Topbar/>}/>
       <Route path="/Sidebar"element={<Sidebar/>}/>
       <Route path="/HomePage"element={<HomePage/>}/>
       </Routes>
     </Router>
      </div>
      
    </>
  )
}

export default App
