import { Input, Button, Typography, FormLabel } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import "./AuthPage.css";
import { useNavigate } from 'react-router-dom'

interface IFormInput {
  username: string;
  password: string;
}

export default function App() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const saveToStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const onSubmit: SubmitHandler<IFormInput> = async () => {
    const url = process.env.REACT_APP_API_BASE_URL;
    const fetchData = await fetch(`${url}/login`);
    const data = await fetchData.json();
    saveToStorage("token", data.token);
    navigate('/home')
  };

  return (
    <div className="wrapper">
      <form
        className="flex flex-col gap-5 border shadow-2xl p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
          Welcome back
        </Typography>
        <Typography sx={{ color: "gray" }}>
          Don't have an account yet?
          <span className="ml-2 text-white">Sign up</span>
        </Typography>
        <Input
          placeholder="username"
          sx={{
            color: "white",
            backgroundColor: "#121212",
            borderRadius: "14px",
            paddingLeft:'10px'
          }}
          {...register("username", { required: true })}
        ></Input>
        {errors.username && <p role="alert">Username is required</p>}
        <Input
          placeholder="password"
          sx={{
            color: "white",
            backgroundColor: "#121212",
            borderRadius: "14px",
            paddingLeft:'10px'
          }}
          {...register("password", { required: true, maxLength: 20 })}
        ></Input>
        {errors.password && <p role="alert">Password is required</p>}
        <Button sx={{":hover":{bgcolor:'#121212', color:'white'}, cursor:'pointer'}} onClick={handleSubmit(onSubmit)}>Button</Button>
      </form>
    </div>
  );
}
