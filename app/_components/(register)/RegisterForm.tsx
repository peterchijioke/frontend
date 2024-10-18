"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
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
import useSWRMutation from "swr/mutation";
import { postApiService } from "@/app/service/api.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { trigger: registerUser, isMutating } = useSWRMutation(
    "/users/register",
    postApiService
  );
  const route = useRouter();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const res = await registerUser({
        email: data.email,
        password: data.password,
        username: data.username,
        isAdmin: false,
      });
      if (res?.status === "success") {
        toast.success("Registration successful!", {
          position: "top-right",
        });
        route.push("/login");
      }
    } catch (error) {
      toast.error("Error occur", {
        position: "top-right",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={() => (
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
                <FormMessage className="text-red-500">
                  {errors.email.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Input
                  id="username"
                  type="text"
                  {...register("username")}
                  placeholder="Enter a username"
                />
              </FormControl>
              {errors.username && (
                <FormMessage className="text-red-500">
                  {errors.username.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={() => (
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
          render={() => (
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
                <FormMessage className="text-red-500">
                  {errors.confirmPassword.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        <div className="py-3">
          <span className="text-sm">
            Already have an account?{" "}
            <Link className="underline" href={"/"}>
              Login
            </Link>
          </span>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-14 w-full px-4 py-2"
          disabled={isMutating}
        >
          {isMutating ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  );
}
