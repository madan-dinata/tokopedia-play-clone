/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/login", {
        username: username,
        password: password,
      })
      localStorage.setItem("accessToken", data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-4/12 shadow-xl items-center text-center mx-auto rounded-lg">
        <div className="card-body">
          <div className="flex flex-col items-center justify-center py-10">
            <h1 className="card-title text-2xl mb-10">Tokopedia Play</h1>
            <div className="card-actions w-10/12">
              <form className="mb-3" onSubmit={login}>
                <FormLabel id="username">Username</FormLabel>
                <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-5" />
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input pr="4.5rem" type={show ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement width="4.5rem" id="password">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button mt={4} colorScheme="teal" type="submit" className="w-full">
                  Login
                </Button>
              </form>
              <p>
                Don&apos;t have an account?{" "}
                <Link to="/signup">
                  <span className="text-blue-900 cursor-pointer font-semibold">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
