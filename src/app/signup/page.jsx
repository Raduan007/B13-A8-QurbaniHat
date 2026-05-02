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
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

      if (error) {
        toast.error(error.message || "Signup failed ");
        return;
      }

      toast.success("Account created successfully ");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    };
        const handleGoogleSignUp = async ()=>{
          await authClient.signIn.social({
            provider: 'google',
          })
        }
  return (
    <Card className="border mx-auto w-125 py-10">
      <h1 className="text-center text-4xl font-bold text-blue-600">
        Sign Up
      </h1>

      {/* FORM START */}
      <Form className="w-196 mx-auto" onSubmit={onSubmit}>
        <div className="space-y-5">
          <TextField isRequired name="name" type="text">
           Name
            <Input name="name" placeholder="Enter your name" />
            <FieldError />
          </TextField>
        </div>

        <TextField isRequired name="image" type="text">
          Image URL
          <Input name="image" placeholder="Image URL" />
          <FieldError />
        </TextField>

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
        
          Sign Up
        </Button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-400 uppercase">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* GOOGLE BUTTON */}
        <button
        onClick={handleGoogleSignUp}
          type="button"
          className="w-full border py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width={22}
            height={22}
          />
          <span className="text-base o">Continue with Google</span>
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </Form>
    </Card>
  );
}