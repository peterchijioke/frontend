"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Import custom UI components
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
import { LoginSchema, loginSchema } from "@/app/_validation/loginValidation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (data: LoginSchema) => {
    console.log("Form data is valid:", data);
  };

  return (
    <Form {...form}>
      <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
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

        {/* Password Field */}

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
                <FormMessage>{errors.password.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <div className=" py-3 ">
          <span className=" text-sm">
            Don't have an account?{" "}
            <Link className=" underline" href={"/register"}>
              Register
            </Link>
          </span>
        </div>

        <Button type="submit" className=" w-full mt-8 px-4 py-2">
          Login
        </Button>
      </form>
    </Form>
  );
}
