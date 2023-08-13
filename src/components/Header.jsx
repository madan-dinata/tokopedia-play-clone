/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-undef */
import { Input, Button, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header({ value, onChange }) {
  return (
    <div className="mt-20 my-5 px-10">
      <div className="grid grid-cols-12 gap-4">
        {/* <Stack spacing={4} direction="row" align="center" className="col-start-1 col-end-7">
          <Link to="">
            <Button colorScheme="teal" variant="outline">
              All Videos
            </Button>
          </Link>
          <Button colorScheme="teal" variant="outline">
            Trending
          </Button>
        </Stack> */}
        <InputGroup size="md" className="col-end-13 col-span-3">
          <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.600" />} />
          <Input type="text" placeholder="Search..." border="1px solid #949494" value={value} onChange={(e) => onChange(e.target.value)} />
        </InputGroup>
      </div>
    </div>
  )
}
