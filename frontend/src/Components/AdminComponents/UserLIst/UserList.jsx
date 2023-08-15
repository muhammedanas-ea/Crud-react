import { Button } from "@material-tailwind/react"
import {Link} from 'react-router-dom'
import {UserListDetails, DeleteUser} from '../../../Api/adminApi'
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


function UserList() {

  const [user,setUser] = useState([]);
  const navigate = useNavigate();
  const [serachInput,setSearchInput] = useState('')


// ******** USER LIST DATA RESPONSE STORING FUNCTION ********//
  useEffect( () =>{
    UserListDetails().then((response) =>{
      const userData = response.data.userData;
      setUser(userData)
    }).catch((err) => console.log(err))
  },[])


//********* USER LIST DATA DELETEING SECTION  ********//  
  const handleDelete = async (userId) =>{
    DeleteUser(userId).then(() =>{
      setUser(user.filter((user => user._id !== userId)))
    }).catch((err) => console.log(err))
  }



// ***********  USER SEARCH COTROLLING SECTION ********//
  const handleSearchInput = (e) =>{
    setSearchInput(e.target.value)
  }


  const userData = user.filter(user => {
    const searchInputLower = serachInput.toLowerCase();
    const emailMatch = user.email.toLowerCase().includes(searchInputLower);
    const nameMatch = user.name.toLowerCase().includes(searchInputLower);
    const mobMatch = user.mobile.toString().includes(searchInputLower);
  
    return emailMatch || nameMatch || mobMatch;
  });


  return (
    <div className="p-5 h-screen w-full text-xl text-gray-900 pb-3 text-start border rounded-lg shadow-lg ring-2 ring-gray-200">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">User List</h1>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search"
            value={serachInput}
            onChange={handleSearchInput}
            className="border border-gray-700 px-2 py-1 rounded-lg"
          />
          <Link to={"/admin/adduser"}>
            <Button color="blue" size="sm" ripple="light">
              Add User
            </Button>
          </Link>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">No</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Number</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">Actions</th>
          </tr>
        </thead>
        <tbody>

          {userData.map((values,index) =>{
              return(
                <tr key={values._id} className="bg-gray-100 border-b border-gray-200">
                  <td className="p-3 text-sm text-gray-800 text-left">{index + 1}</td>
                  <td className="p-3 text-sm text-gray-800 text-left">{values.name}</td>
                  <td className="p-3 text-sm text-gray-800 text-left">{values.mobile}</td>
                  <td className="p-3 text-sm text-gray-800 text-left">{values.email}</td>
                  <td className="p-3 text-sm text-gray-800 text-center space-x-2">
                    <Button onClick={() => navigate(`/admin/edituser/${values._id}`)} size="sm" color="blue">Edit</Button>
                    <Button onClick={() => handleDelete(values._id)} size="sm" color="red">Delete</Button>
                  </td>
              </tr>
              )
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
