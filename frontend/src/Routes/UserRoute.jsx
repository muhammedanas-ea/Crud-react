import {Routes,Route} from 'react-router-dom'; 
import Login from '../Pages/UserPages/Login/Login';
import Singup from '../Pages/UserPages/Signup/Signup';
import Home from '../Pages/UserPages/Home/Home';


function UserRoute(){
    return(  
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Singup />} />
            <Route path='/' element={<Home />} />
        </Routes> 
    )
}

export default UserRoute;