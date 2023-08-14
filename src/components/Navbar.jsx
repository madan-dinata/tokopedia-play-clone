/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Flex, Text, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import LoginModal from "./LoginModal"
import { getMe } from "../api/axios"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode()
  const [data, setData] = useState("")

  const handleGetMe = async () => {
    try {
      const data = await getMe()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    localStorage.getItem("accessToken") ? handleGetMe() : null
  }, [])

  const logout = () => {
    localStorage.removeItem("accessToken")
    navigate(0)
  }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10} className="fixed w-screen top-0 z-10">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Box className="text-lg antialiased font-bold font-serif">Tokopedia Play</Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>

              <Menu>
                {!localStorage.getItem("accessToken") ? (
                  <Flex alignItems="center">
                    <LoginModal />
                  </Flex>
                ) : (
                  <>
                    <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                      <Flex alignItems="center">
                        <Text mr={2}>{data.username}</Text>
                        <Avatar size={"sm"} src={data.urlImage} className="border !border-white" />
                      </Flex>
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <br />
                      <Center>
                        <Avatar size={"2xl"} src={data.urlImage} />
                      </Center>
                      <br />
                      <Center>
                        <p>{data.username}</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
