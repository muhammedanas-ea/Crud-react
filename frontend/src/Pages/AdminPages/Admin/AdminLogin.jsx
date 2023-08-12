import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

   

export default function AdminLogin() {

    return (
      <div className="w-full flex justify-center items-center">
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray" className='text-start'>
            Sign In
            </Typography>
            <form  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
                <Input  size="lg" type="email" label="Email" />
                <Input  type="password" size="lg" label="Password" />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
                Sign In
            </Button>
            </form>
        </Card>
      </div>
    );
  }