import AdminLogin from "../Pages/AdminPages/AdminLogin/AdminLogin";
import Dashboard from '../Pages/AdminPages/Dashboard/Dashboard';
import {Routes,Route} from 'react-router-dom';

function AdminRoute(){
    return(
        <Routes>
            <Route path="/" element={<AdminLogin />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    )
}

export default AdminRoute;