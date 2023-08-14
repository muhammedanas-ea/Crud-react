
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {userImage} from '../../Api/userApi'
import {setUserDetails} from '../../Redux/UserSlice/UserSlice'
 
export default function ProfileCard() {

  const [images,setImage] = useState(null);
  const dispatch = useDispatch();
  const {id,name,mobile,image,email} = useSelector(state => state.user)

  const  handleUpdateImage = async (e) =>{
    e.preventDefault();
    const response = await userImage(id,images);
    console.log(response.data.data.image);
    if(response.data.updated){
      dispatch(setUserDetails({
        id:response.data.data._id,
        name:response.data.data.name,
        mobile:response.data.data.mobile,
        email:response.data.data.email,
        image:response.data.data.image,
        is_admin:response.data.data.is_admin,
      }))
    }
  }

  
  return (
    <div className="flex justify-center items-center text-start pt-5">
      <Card className="mt-6 w-auto">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={image ? `/images/${image}` : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Name : {name}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         Number : {mobile}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         Email : {email}
        </Typography>
      </CardBody>
   
        <CardFooter className="pt-0 flex flex-col gap-5" > 
        <input type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
          <div>
            <Button onClick={handleUpdateImage}>Submit</Button>
          </div>
        </CardFooter>
    
    </Card>
    </div>
  );
}
