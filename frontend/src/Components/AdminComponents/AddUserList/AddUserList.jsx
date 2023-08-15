import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import {AddUserDetails} from '../../../Api/adminApi'
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from "react-redux";
import {setUserDetails} from '../../../Redux/UserSlice/UserSlice'
import { useNavigate } from "react-router-dom";
   
  export default function AddUserList() {
    
    const [value, setValue] = useState({
      name:'',number:'',email:'',password:'',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
        const response = await AddUserDetails(value);
        if(response.data.status){
          localStorage.setItem('token',response.data.token);
          dispatch(setUserDetails({
            id:response.data.userData._id,
            name:response.data.userData.name,
            mobile:response.data.userData.mobile,
            email:response.data.userData.email,
            image:response.data.userData.image,
            is_admin:response.data.userData.is_admin,
          }))
          navigate('/admin/dashboard');
        }else{
          toast(response.data.alert)
        }
      }catch(err){
        console.log(err);
      }
    }



    return (
      <div className="w-full flex justify-center pt-4">
        <Card color="transparent" shadow={false}>
        <Typography  variant="h4" color="blue-gray">
          Add user details
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input name="name" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} size="lg" label="Name" />
            <Input name="number" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} size="lg" label="Number" />
            <Input name="email" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} size="lg" label="Email" />
            <Input name="password" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} type="password" size="lg" label="Password" />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
             Submit
          </Button>
          <ToastContainer />
        </form>
      </Card>
      </div>
    );
  }