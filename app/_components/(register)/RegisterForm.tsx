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
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Input
                  id="username"
                  type="text"
                  {...register("username")}
                  placeholder="Enter your username"
                />
              </FormControl>
              <FormDescription>Enter your username</FormDescription>
              {errors.username && (
                <FormMessage>{errors.username.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Email Field */}

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
                <FormMessage>{errors.email.message}</FormMessage>
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
              <FormDescription>Enter your password</FormDescription>
              {errors.password && (
                <FormMessage>{errors.password.message}</FormMessage>
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
                <FormMessage>{errors.confirmPassword.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </Button>
      </form>
    </Form>
  );
}
