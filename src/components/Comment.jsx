/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, StackDivider, Text, Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"

export default function Comment({ id }) {
  return (
    <>
      <Card className="h-full">
        <CardHeader className="m-5 rounded-lg border-2">
          <Heading size="xs">New Itemm {id}</Heading>
          <Text pt="2" fontSize="sm">
            View a summary of all your clients over the last month.
          </Text>
        </CardHeader>
        <Heading size="xs" className="px-5 mb-3">
          Comments
        </Heading>
        <hr />
        <CardBody className="overflow-y-auto">
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs">Summary</Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs">Overview</Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs">Summary</Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs">Overview</Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs">Analysis</Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs">Analysis</Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter className="border-t-2">
          <InputGroup size="sm">
            <Input type="text" placeholder="Add Comment..." border="1px solid #949494" />
            <InputRightAddon p={0} border="none">
              <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
                Search
              </Button>
            </InputRightAddon>
          </InputGroup>
        </CardFooter>
      </Card>
    </>
  )
}
