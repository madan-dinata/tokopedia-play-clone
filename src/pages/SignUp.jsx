/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-4/12 shadow-xl items-center text-center mx-auto rounded-lg">
        <div className="card-body">
          <div className="flex flex-col items-center justify-center py-10">
            <h1 className="card-title text-2xl mb-10">Sign Up</h1>
            <div className="card-actions w-10/12">
              <FormControl className="mb-3">
                <FormLabel id="username">Username</FormLabel>
                <Input type="text" id="username" className="mb-5" />
                <FormLabel>Password</FormLabel>
                <Input type="text" id="username" className="mb-5" />
                <FormLabel>Repeat Password</FormLabel>
                <Input type="text" id="username" className="mb-5" />
                <Button mt={4} colorScheme="teal" type="submit" className="w-full">
                  Sign Up
                </Button>
              </FormControl>
              <p>
                Have an account?{" "}
                <Link to="/">
                  <span className="text-blue-900 cursor-pointer font-semibold">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
