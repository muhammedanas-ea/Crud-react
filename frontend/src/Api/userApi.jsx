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


export async function userImage(id,images){
    try{
        
        const data= new FormData()
        data.append('image', images);
        data.append('userId', id);
        const config={
            header:{
                'content-type':'multipart/form-data',
                userId : id
            },WithCreadentials:true
        }
        const response = await userApi.post('/profileImage',data,config);
        return response
    }catch(err){
        console.log(err);
    }
}
