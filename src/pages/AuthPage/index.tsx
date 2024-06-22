import { Input, Button, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import FormInput from '../../components/kit/FormInput';

//Уточнить куда его лучше положить или пускай тут будет
interface IFormInput {
  username: string;
  password: string;
}

export default function AuthPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const saveToStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
  };
  const submitCallback: SubmitHandler<IFormInput> = async () => {
    const url = process.env.REACT_APP_API_BASE_URL;
    const fetchData = await fetch(`${url}/login`);
    const response = await fetchData.json();
    saveToStorage("token", response.token);
    navigate("/home");
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit(submitCallback)}>
        <Typography className="heading">Welcome back</Typography>

        <Typography className='info-string'>
          Don't have an account yet?
          <span className="signUpBtn"><Link to="#">Sign up</Link></span>
        </Typography>
        <FormInput
          name='username'
          placeholder='username'
          className='usernameInput'
          register={register}
          errors={errors}
        >
        </FormInput>
        <FormInput
          name='password'
          placeholder='password'
          className='usernameInput'
          register={register}
          errors={errors}
        >
        </FormInput>
        <Button
        variant='contained'
        className="loginBtn" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
}
