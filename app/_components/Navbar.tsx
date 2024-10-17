import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Component() {
  return (
    <header className=" h-20 w-full  shadow sticky flex justify-center ">
      <div className="container flex h-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild className=" ">
            <Button variant="outline" size="icon" className="lg:hidden ml-5">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
              <span className="">My Store</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/login"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Login
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Register
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <span className="">My Store</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">
          <Link
            href="/"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/login"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
