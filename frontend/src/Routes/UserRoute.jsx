import {Routes,Route} from 'react-router-dom'
import Login from '../Pages/UserPages/Login/Login'
import Singup from '../Pages/UserPages/Signup/Signup'
import Home from '../Pages/UserPages/Home/Home'
import Profile from '../Pages/UserPages/Profile/Profile'
import UserProtect from './UserProtect';
import UserPublic from './UserPublic'


function UserRoute(){
    return(  
        <Routes>
            <Route path='/login' element={<UserPublic><Login /></UserPublic>} />
            <Route path='/signup' element={<Singup />} />
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<UserProtect><Profile /></UserProtect>} />
        </Routes> 
    )
}

export default UserRoute;