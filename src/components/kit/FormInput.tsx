import { Input, Typography } from "@mui/material";
//Как тут лучше интерфейсом покрыть
export default function FormInput({
  placeholder,
  className,
  register,
  errors,
  name,
}: any) {
  return (
    <>
      <Input
        placeholder={placeholder}
        className={className}
        {...register(name, { required: true })}
      />
      {errors['username'] && (
        <Typography className="error" role="alert">
          {`${placeholder} is required`}
        </Typography>
      )}
    </>
  );
}
