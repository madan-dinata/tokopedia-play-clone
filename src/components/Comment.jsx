/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, StackDivider, Text, Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { io } from "socket.io-client"
import { getDescription, getComments, postComment } from "../api/axios.js"

export default function Comment({ id }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [desc, setDesc] = useState({})

  const descriptionGet = async () => {
    const data = await getDescription(id)
    setDesc(data)
  }

  const commentsGet = async () => {
    try {
      const data = await getComments(id)
      setComments(data)
    } catch (error) {
      console.error(error)
    }
  }

  const socket = io(import.meta.env.VITE_SOME_HOST_SOCKET)

  useEffect(() => {
    descriptionGet()
    commentsGet()
    socket.on("from-server", () => {
      commentsGet()
    })

    return () => {
      socket.off("from-server")
    }
  }, [])

  const handleComment = async () => {
    try {
      await postComment(id, newComment)
      socket.emit("from-client", { id })
      setNewComment("")
    } catch (error) {
      console.error(error)
    }
  }

  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString)
    const now = new Date()
    const timeDiff = now - dateTime

    if (timeDiff < 24 * 60 * 60 * 1000) {
      const hoursAgo = Math.floor(timeDiff / (60 * 60 * 1000))
      if (hoursAgo > 0) {
        return `${hoursAgo} jam yang lalu`
      } else {
        const minutesAgo = Math.floor(timeDiff / (60 * 1000))
        return `${minutesAgo} menit yang lalu`
      }
    } else {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return dateTime.toLocaleDateString(undefined, options)
    }
  }

  return (
    <>
      <Card className="h-full">
        <CardHeader className="m-5 rounded-lg border-2">
          <Heading size="xs">{desc.title}</Heading>
          <Text pt="2" fontSize="sm">
            {desc.description}
          </Text>
        </CardHeader>
        <Heading size="xs" className="px-5 mb-3">
          Comments ({comments.length})
        </Heading>
        <hr />
        <CardBody className="overflow-y-auto">
          <Stack divider={<StackDivider />} spacing="4">
            {comments &&
              comments.map((comment) => (
                <Box key={comment.id}>
                  <Heading size="xs">{comment.username}</Heading>
                  <Text pt="1" fontSize="sm">
                    {comment.comment}
                  </Text>
                  <Text pt="" fontSize="xs" color="gray.500">
                    {formatDateTime(comment.updatedAt)}
                  </Text>
                </Box>
              ))}
          </Stack>
        </CardBody>
        <CardFooter className="border-t-2">
          {localStorage.getItem("accessToken") ? (
            <InputGroup size="sm">
              <Input type="text" placeholder="Add Comment..." border="1px solid #949494" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
              <InputRightAddon p={0} border="none">
                <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494" onClick={handleComment}>
                  Send
                </Button>
              </InputRightAddon>
            </InputGroup>
          ) : (
            <p className="text=gray-200">Login terlebih dahulu untuk berkomentar.</p>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
