import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';   
import {userSignup} from '../../../Api/userApi';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  export default  function Singup() {

    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    

// ********* SIGN UP FROM CONTROLL FUCTION AN DATA PASSING SECTION ********//
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
          if(name.trim() === ''){
            toast('please enter your email')
          }else if(number.trim() === ''){
            toast('pleas enter your number ')
          }else if(email.trim() === ''){
            toast('pleace enter your email')
          }else if(password.trim() === ''){
            toast('pleace enter your password')
          }else{
            const response = await userSignup({name,number,email,password});
    
            if(response.data.status){
              localStorage.setItem('token',response.data.token)
              navigate('/')
            }else{
              toast(response.data.alert);
            }
          } 
      }catch(err){
        console.log(err);
      }
    }

    return (
     <div className="w-full flex justify-center">
         <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-start">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} size="lg" label="Name" />
            <Input type="text" value={number} onChange={(e) => setNumber(e.target.value)} size="lg" label="Number" />
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} size="lg" label="Email" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
              <Link to={'/login'} className="font-medium text-gray-900">Sign In</Link>
          </Typography>
          
        </form>
        <ToastContainer />
      </Card>
     </div>
    );
  }
