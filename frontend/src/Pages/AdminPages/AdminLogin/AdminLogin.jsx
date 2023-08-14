import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react"
import { useState } from "react"
import {Adminsignin} from '../../../Api/adminApi'
import {ToastContainer,toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
   

export default function AdminLogin() {

    const [value,setValue] = useState({
      email:'',password:'',
    });
    const navigate = useNavigate()


    const handleAdminLogin = async (e) => {
      e.preventDefault();
      try{ 
        const {email,password} = value 
        if(email.trim() === ''){
          toast.info('please enter your email')
        }else if(password.trim() === ''){
          toast.info('please enter your password');
        }else{
          const response = await Adminsignin(value)
          if(response.data.status){
            localStorage.setItem('admintoken',response.data.token)
            navigate('/admin/dashboard')
          }else{
            toast(response.data.alert);
          }
        }
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
            <form  onSubmit={handleAdminLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
                <Input name="email" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} size="lg" type="email" label="Email" />
                <Input name='password' onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} type="password" size="lg" label="Password" />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
                Sign In
            </Button>
            <ToastContainer />
            </form>
        </Card>
      </div>
    );
  }