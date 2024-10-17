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
              <FormDescription>Enter your password</FormDescription>
              {errors.password && (
                <FormMessage>{errors.password.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </Button>
      </form>
    </Form>
  );
}
