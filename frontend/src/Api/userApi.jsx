import axios from 'axios';

const userApi = axios.create({
    baseURL:`http://localhost:3001`
})


export async function userSignup(singupData){
    try{
        const data = await userApi.post('/signup',singupData);
        return data
    }catch(err){
        console.log(err);
    }
}

export async function userLogin(loginData){
    try{
        const data = await userApi.post('/login',loginData);
        return data 
    }catch(err){
        console.log(err);
    }
}