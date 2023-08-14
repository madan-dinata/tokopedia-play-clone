/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, StackDivider, Text, Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { io } from "socket.io-client"

export default function Comment({ id }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [desc, setDesc] = useState({})

  const getDescription = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/v1/videos/${id}`)
    setDesc(data)
  }

  const socket = io(import.meta.env.VITE_SOME_HOST_SOCKET)

  const getComments = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/comments/${id}`)
      setComments(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDescription()
    getComments()
    socket.on("from-server", () => {
      getComments()
    })

    return () => {
      socket.off("from-server")
    }
  }, [])

  const handleComment = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/v1/comments/${id}`,
        {
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )

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
