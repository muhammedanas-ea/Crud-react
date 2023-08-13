import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { userLogin } from '../../../Api/userApi';
import {Link, useNavigate} from 'react-router-dom';  
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {setUserDetails} from '../../../Redux/UserSlice/UserSlice';
   

export default function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


// ********* SIGN IN FROM CONTROLL FUCTION AN DATA PASSING SECTION ********//  
  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      if(email.trim() === ''){
        toast('please enter your email');
      }else if(password.trim() === ''){
        toast('please enter your password')
      }else{
        const response = await userLogin({email,password});
        if(response.data.status){
          localStorage.setItem('token',response.data.token);
          dispatch(setUserDetails({
            id:response.data.userData._id,
            name:response.data.userData.name,
            email:response.data.userData.email,
            is_admin:response.data.userData.is_admin,
          }))
          navigate('/')
        }else{
          toast(response.data.alert);
        }
      }
      setEmail('');
      setPassword('');
    }catch(err){
      console.log(err);
    }
  }

    return (
      <div className="w-full flex justify-center items-center">
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray" className='text-start'>
            Sign In
            </Typography>
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
                <Input value={email} onChange={(e) => setEmail(e.target.value)} size="lg" type="email" label="Email" />
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" size="lg" label="Password" />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
                Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Already not have an account?{" "}
                <Link to={'/signup'} className="font-medium text-gray-900">Sign Up</Link>
            </Typography>
            <ToastContainer />
            </form>
        </Card>
      </div>
    );
  }