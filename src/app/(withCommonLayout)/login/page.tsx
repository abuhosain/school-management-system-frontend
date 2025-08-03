"use client"
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Button } from "antd";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email : "info@sunriseschools.com",
      password : "info@sunriseschools.com"
    }
  });
  const [login, {data, error}] = useLoginMutation();
  console.log(data);
  console.log(error);
  const onSubmit = (data: any) => {
    const userInfo = {
      email : data.email,
      password : data.password
    }
    login(userInfo)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
      </div>
     <Button htmlType="submit">Login</Button>
    </form>
  )
};

export default LoginPage;