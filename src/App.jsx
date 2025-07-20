import LandingCom from "./pages/private/mainpage/LandingCom";
import Login from "./pages/public/Login"
import SignUp from "./pages/public/SignUp"
import { Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <div>
 <Routes>
 <Route path='/' element={<Login/>}/>
 <Route path='/signup' element={ <SignUp/>}/>
  <Route path='/landing' element={ <LandingCom/>}/>
 </Routes>
    </div>
  )
}

export default App

