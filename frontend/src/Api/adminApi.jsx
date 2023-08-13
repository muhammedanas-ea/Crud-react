import axios from 'axios';

const userApi = axios.create({
    baseURL:`http://localhost:3001/admin`
})



export async function Adminsignin(signinData){
    try{
        const data = await userApi.post('/login',signinData);
        console.log(data);
        return data
    }catch(err){
        console.log(err);
    }
}