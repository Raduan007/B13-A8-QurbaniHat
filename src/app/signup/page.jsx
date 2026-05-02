"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
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

    const { error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }

    toast.success("Account created successfully");

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md p-8 shadow-xl rounded-2xl border">
        
        {/* TITLE */}
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Create Account
        </h1>

        {/* FORM */}
        <Form onSubmit={onSubmit} className="space-y-5">

          <TextField isRequired name="name">
            <label className="text-sm font-medium">Name</label>
            <Input name="name" placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image">
            <label className="text-sm font-medium">Image URL</label>
            <Input name="image" placeholder="https://..." />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
            }}
          >
            <label className="text-sm font-medium">Email</label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "At least 8 characters required";
              if (!/[A-Z]/.test(value))
                return "Must include 1 uppercase letter";
              if (!/[0-9]/.test(value))
                return "Must include 1 number";
            }}
          >
            <label className="text-sm font-medium">Password</label>
            <Input name="password" placeholder="Enter password" />
            <Description className="text-xs">
              8+ chars, 1 uppercase, 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* SUBMIT */}
          <Button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold hover:opacity-90"
          >
            Sign Up
          </Button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              width={20}
              height={20}
            />
            <span className="font-medium">
              Continue with Google
            </span>
          </button>

          {/* LOGIN */}
          <p className="text-center text-sm pt-2">
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
    </div>
  );
}