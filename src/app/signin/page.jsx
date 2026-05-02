"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,  
  Label,
  TextField,
} from "@heroui/react";


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();


    const email = e.target.email.value;
    const password = e.target.password.value;
    


        const { data, error } = await authClient.signIn.email({
       
        email,
        password,
        callbackURL:'/'
      })

      console.log({ data, error });
       if (error) {
            toast.error(error.message || "Signup failed ");
            return;
          }
      
          toast.success("Account created successfully ");
      

      
  };

  return (
    <Card className="border mx-auto w-125 py-10 ">
      <h1 className="text-center text-4xl font-bold text-blue-600">Sign In</h1>

      {/* FORM START */}
      <Form className="w-196 mx-auto " onSubmit={onSubmit}>
        
       


        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          Email
          <Input name="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
         Password
          <Input name="password" placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* BUTTON */}
        <Button
          type="submit"
          className="w-full mt-3 py-4 text-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl"
        >
        
          Sign In
        </Button>
         {/* LOGIN LINK */}
                <p className="text-center text-sm mt-6">
                  Already have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                   SignUp
                  </Link>
                </p>

      </Form>
    </Card>
  );
}