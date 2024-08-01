import { Input, Button, Typography } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/kit/FormInput";
import { IFormInput } from "../../components/kit/FormInput";

export default function AuthPage() {
  const navigate = useNavigate();
  const methods = useForm<IFormInput>();

  const saveToStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
  };
  const handleReset = () => {
    methods.reset();
  };
  const submitCallback: SubmitHandler<IFormInput> = async () => {
    const url = process.env.REACT_APP_API_BASE_URL;
    const fetchData = await fetch(`${url}/login`);
    const response = await fetchData.json();
    saveToStorage("token", response.token);
    navigate("/home?genre=all");
  };

  return (
    <div className="wrapper-block">
      <FormProvider {...methods}>
        <form className="form" onSubmit={methods.handleSubmit(submitCallback)}>
          <Typography className="heading">Welcome back</Typography>

          <Typography className="info-string">
            Don't have an account yet?
            <span className="signUpBtn">
              <Link to="#">Sign up</Link>
            </span>
          </Typography>

          <FormInput
            name="username"
            placeholder="Username"
            className="usernameInput"
            isRequired={true}
          />

          <FormInput
            name="password"
            placeholder="Password"
            className="passwordInput"
            isRequired={true}
          />

          <Button variant="contained" color="warning" className="loginBtn" type="submit">
            Log in
          </Button>
          <Button
            onClick={handleReset}
            variant="outlined"
            className="loginBtn"
            type="submit"
            color='warning'
          >
            Clear
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
