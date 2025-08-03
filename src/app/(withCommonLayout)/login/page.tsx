"use client"
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "antd";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email : "info@sunriseschools.com",
      password : "info@sunriseschools.com"
    }
  });
  const [login, { error}] = useLoginMutation();
  const onSubmit = async (data: any) => {
    const userInfo = {
      email : data.email,
      password : data.password
    }
  const res =  await login(userInfo).unwrap();
  dispatch(setUser({user : {}, token : res?.data?.accessToken}))
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