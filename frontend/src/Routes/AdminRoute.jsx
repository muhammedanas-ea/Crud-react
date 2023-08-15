import AdminLogin from "../Pages/AdminPages/AdminLogin/AdminLogin";
import Dashboard from '../Pages/AdminPages/Dashboard/Dashboard';
import AddUser from '../Pages/AdminPages/AddUser/AddUser';
import EditUser from '../Pages/AdminPages/EditUser/EditUser'
import {Routes,Route} from 'react-router-dom';
import AdminProtect from "./AdminProtect";
import AdminPublic from "./AdminPublic";

function AdminRoute(){
    return(
        <Routes>
            <Route path="/" element={<AdminPublic><AdminLogin /></AdminPublic>}/>
            <Route path="/dashboard" element={<AdminProtect><Dashboard /></AdminProtect>}/>
            <Route path="/adduser" element={<AdminProtect><AddUser /></AdminProtect>}/>
            <Route path="/edituser/:id" element={<AdminProtect><EditUser /></AdminProtect>}/>
        </Routes>
    )
}

export default AdminRoute;