import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Assuming you have a logo component or SVG

function Logo() {
  // Replace with your logo component or SVG here
  return (
    <img src="https://tse2.mm.bing.net/th?id=OIP.BPRax-9SUOl5BaDziDhlcAAAAA&pid=Api&P=0&h=180" width="40" height="40" viewBox="0 0 32 32">
      {/* Insert your logo design here */}
    </img>
  );
}

export default function Component() {
  const isAuth = useSelector(state => state.auth)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm dark:bg-gray-950 dark:border-b dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="#" className="flex items-center">
          <Logo className="mr-2" /> {/* Added Logo component */}
          <span className="ml-2 text-md font-semibold">NextSkill360</span>
        </Link>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
            Home
          </Link>
          <Link to="blog" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
            Blogs
          </Link>
          <Link to="about" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
            AboutUs
          </Link>
          <Link to="product" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
            Product Info
          </Link>
          <Link to="/schools" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
            Features
          </Link>
          <Link to="/career" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
            Career
          </Link>
          
          {
         isAuth.isAuthenticated ? (<Link to="/profile" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
          {isAuth.user.email}
        </Link>):(<div>
          <Button>
          <Link to="/login" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
             Login
           </Link>
           </Button>
           <Link to="/signup" className="text-md font-semibold hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300">
             Signup
           </Link>
          </div>)}
          
          {
            isAuth.isAuthenticated && isAuth.user.email === "admin@gmail.com" ? (<Link to='stats'>Dashboard </Link>):(<></>)
          }
        </nav>
      </div>
    </header>
  );
}