import { useFormik } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import {loginUser} from "../redux/slice/authSlice"
// import { toast } from "sonner"
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});


const Component = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        console.log(values)
        dispatch(loginUser(values))
        navigate('/');
    }
  });

  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Acme Inc</h1>
        <p className="text-gray-400 mb-8">Discover our innovative products and services.</p>
        <nav className="flex flex-col gap-4">
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">Blog</Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">Careers</Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">Contact Us</Link>
        </nav>
      </div>
      <div className="flex items-center justify-center p-8 md:p-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
          </CardHeader>
          <form onSubmit={formik.handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="m@example.com"
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Sign in</Button>
            </CardFooter>
          </form>
          <CardFooter>
          <CardDescription>Don't have an account? <Link to='/signup' className='font-bold text-black underline'>Create One!</Link></CardDescription>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

export default Component;
