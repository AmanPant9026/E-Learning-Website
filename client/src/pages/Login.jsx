import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useRegisterUserMutation, useLoginUserMutation } from "@/features/api/authApi";


function Login() {
  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerisLoading, isSuccess: registerisSuccess }] = useRegisterUserMutation();
const [loginUser, { data: loginData, error: loginError, isLoading: loginisLoading, isSucess: loginisSucess }] = useLoginUserMutation();

  const changeInputHanldler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration=async(type)=> {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action=type==="signup"?registerUser:loginUser;
    await action(inputData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Tabs defaultValue="signup" className="w-[400px] shadow-md rounded-lg bg-white">
        <TabsList className="grid w-full grid-cols-2 border-b">
          <TabsTrigger value="signup" className="text-sm font-medium">
            Signup
          </TabsTrigger>
          <TabsTrigger value="login" className="text-sm font-medium">
            Login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card className="border-none">
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                Fill in your details below to create a new account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHanldler(e, "signup")}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHanldler(e, "signup")}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHanldler(e, "signup")}
                  type="password"
                  placeholder="Enter a strong password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button  disabled={registerisLoading}onClick={() => handleRegistration("signup")} className="w-full">
              {
                  registerisLoading?(
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate spin"/>Please wait
                    </>
                  ):"Register"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card className="border-none">
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Log in to your account using your email and password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHanldler(e, "login")}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHanldler(e, "login")}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={loginisLoading} onClick={() => handleRegistration("login")} className="w-full">
                {
                  loginisLoading?(
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate spin"/>Please wait
                    </>
                  ):"Login"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
