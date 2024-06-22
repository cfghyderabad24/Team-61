import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function Component() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm dark:bg-gray-950 dark:border-b dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="#" className="flex items-center">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-medium">Acme Inc</span>
        </Link>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/"
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Home
          </Link>
          <Link to="blog"
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Blog
          </Link>
          <Link to="about"
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
          >
            About Us
          </Link>
          <Link to="#"
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Contact
          </Link>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
