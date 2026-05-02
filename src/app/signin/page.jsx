"use client";

import { Button, Card, Form, Input, TextField, FieldError } from "@heroui/react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border">

        {/* TITLE */}
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 text-sm mb-6">
          Sign in to continue
        </p>

        {/* FORM */}
        <Form className="space-y-5">

          <TextField isRequired name="email">
            <label className="text-sm font-medium">Email</label>
            <Input
              name="email"
              placeholder="john@example.com"
              className="w-full"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="password">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full"
            />
            <FieldError />
          </TextField>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold hover:opacity-90"
          >
            Sign In
          </Button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase">
              or
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            className="w-full border py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span className="font-medium">
              Continue with Google
            </span>
          </button>

          {/* SIGNUP LINK */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </Form>
      </Card>
    </div>
  );
}