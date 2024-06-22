import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function Component() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2" >
              <MountainIcon className="h-6 w-6 text-gray-400" />
              <span className="text-lg font-bold text-gray-200">Acme Inc.</span>
            </a>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="/" className="hover:text-gray-200 transition-colors" >
                Home
              </a>
              <a href="about" className="hover:text-gray-200 transition-colors" >
                About
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors" >
                Services
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors" >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-200 transition-colors" >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" >
              <AedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props:JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function AedinIcon(props:JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props:JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
  )
}


function TwitterIcon(props:JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}