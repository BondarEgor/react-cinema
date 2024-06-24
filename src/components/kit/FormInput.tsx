import { Input, Typography } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";

export interface IFormInputProps {
  placeholder: string;
  name: "username" | "password";
  className: string;
  isRequired: boolean;
}
export interface IFormInput {
  username: string;
  password: string;
}

export default function FormInput({
  placeholder,
  className,
  name,
  isRequired,
}: IFormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();

  return (
    <>
      <Input
        type={name === "password" ? "password" : "text"}
        placeholder={placeholder}
        className={className}
        {...register(name, { required: isRequired })}
      />
      {errors[name] && (
        <Typography className="error" role="alert">
          {`${placeholder} is required`}
        </Typography>
      )}
    </>
  );
}
