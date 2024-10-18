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
import { LoginSchema, loginSchema } from "@/app/_validation/loginValidation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSWRMutation from "swr/mutation";
import { postApiService } from "@/app/service/api.service";
import toast from "react-hot-toast";
import useUserStore from "@/app/_store/user.stor";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const { setUser, setToken } = useUserStore();
  const { trigger: handleLogin, isMutating } = useSWRMutation(
    "/users/login",
    postApiService
  );
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await handleLogin({
        email: data.email.toLocaleLowerCase().trim(),
        password: data.password,
      });
      if (res?.status === "success") {
        setUser(res?.user);
        setToken(res?.token);
        form.reset(); // Reset the form
        toast.success("Login successful!", {
          position: "top-right",
        });
        route.push("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "top-right",
        });
      } else {
        toast.error("An unexpected error occurred", {
          position: "top-right",
        });
      }
    }
    console.log("Form data is valid:", data);
  };

  return (
    <Form {...form}>
      <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
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
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </FormControl>
              {errors.password && (
                <FormMessage>{errors.password.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <div className="py-3">
          <span className="text-sm">
            Don&apos;t have an account?{" "}
            <Link className="underline" href={"/register"}>
              Register
            </Link>
          </span>
        </div>

        <Button
          type="submit"
          className="w-full mt-8 px-4 py-2"
          disabled={isMutating}
        >
          {isMutating ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
