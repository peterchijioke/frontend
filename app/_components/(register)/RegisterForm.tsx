"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  registerSchema,
  RegisterSchema,
} from "@/app/_validation/registerValidation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (data: RegisterSchema) => {
    console.log("Registration data is valid:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
        {/* Username Field */}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                />
              </FormControl>
              {errors.email && (
                <FormMessage className=" text-red-500">
                  {errors.email.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password"
                />
              </FormControl>
              {errors.password && (
                <FormMessage className="text-red-500">
                  {errors.password.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="Confirm your password"
                />
              </FormControl>
              {errors.confirmPassword && (
                <FormMessage className=" text-red-500">
                  {errors.confirmPassword.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <div className=" py-3 ">
          <span className=" text-sm">
            Already have an account?{" "}
            <Link className=" underline" href={"/"}>
              Login
            </Link>
          </span>
        </div>

        {/* Submit Button */}
        <Button type="submit" className=" mt-14 w-full px-4 py-2">
          Register
        </Button>
      </form>
    </Form>
  );
}
