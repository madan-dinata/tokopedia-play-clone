/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  const logout = () => {
    localStorage.removeItem("accessToken")
    window.location.replace("/")
  }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10} className="fixed w-screen top-0 z-10">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/home">
            <Box className="text-lg antialiased font-bold font-serif">Tokopedia Play</Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>

              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={"https://cdn-icons-png.flaticon.com/128/456/456212.png"} className="border-2" />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"https://cdn-icons-png.flaticon.com/128/456/456212.png"} />
                  </Center>
                  <br />
                  <Center>
                    <p>Muhammad Ramadhan</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
