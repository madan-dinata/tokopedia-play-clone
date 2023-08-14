/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-undef */
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
export default function Header({ value, onChange }) {
  return (
    <div className="mt-20 my-5 px-10">
      <div className="grid grid-cols-12 gap-4">
        <InputGroup size="md" className="col-end-13 col-span-3">
          <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.600" />} />
          <Input type="text" placeholder="Search..." border="1px solid #949494" value={value} onChange={(e) => onChange(e.target.value)} />
        </InputGroup>
      </div>
    </div>
  )
}
