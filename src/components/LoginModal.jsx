import { useRef, useState } from "react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { login, register } from "../api/axios"

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState("login")

  const initialRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const data = await login(username, password)
      localStorage.setItem("accessToken", data)
      setUsername("")
      setPassword("")
      onClose()
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await register(username, password)
      setUsername("")
      setPassword("")
      onClose()
      setOverlay("login")
      onOpen()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          setOverlay("login")
          onOpen()
        }}
      >
        Login
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="md" initialFocusRef={initialRef}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalHeader className="font-bold text-center">{overlay === "login" ? "Login" : "Register"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {overlay === "login" ? (
              // Form for login
              <form className="mb-3" onSubmit={handleLogin}>
                <FormLabel id="username">Username</FormLabel>
                <Input ref={initialRef} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-5" />
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
            ) : (
              // Form for registration
              <form className="mb-3" onSubmit={handleRegister}>
                <FormLabel id="username">Username</FormLabel>
                <Input ref={initialRef} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-5" />
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input pr="4.5rem" type={show ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
                <Button mt={4} colorScheme="teal" type="submit" className="w-full">
                  Register
                </Button>
              </form>
            )}
            <p className="text-center">
              {overlay === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                onClick={() => {
                  setOverlay(overlay === "login" ? "register" : "login")
                }}
                className="text-blue-900 cursor-pointer font-semibold"
              >
                {overlay === "login" ? "Sign Up" : "Login"}
              </span>
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
