/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-undef */
import { Input, Button, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

export default function Header() {
  return (
    <div className="mt-20 my-5 px-10">
      <div className="grid grid-cols-12 gap-4">
        <Stack spacing={4} direction="row" align="center" className="col-start-1 col-end-7">
          <Button colorScheme="teal" variant="outline">
            All Videos
          </Button>
          <Button colorScheme="teal" variant="outline">
            Most Watched
          </Button>
        </Stack>
        <InputGroup size="md" className="col-end-13 col-span-3">
          <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.600" />} />
          <Input type="text" placeholder="Search..." border="1px solid #949494" />
        </InputGroup>
      </div>
    </div>
  )
}
