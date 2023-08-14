/* eslint-disable no-unused-vars */
import { useState } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Thumbnail from "../components/Thumbnail"
import useFetchData from "../hooks/useFetchVideos"

export default function Home() {
  const [query, setQuery] = useState("")
  const { data: videos, loading: isLoading } = useFetchData(query)

  return (
    <div>
      <Navbar />
      <Header value={query} onChange={setQuery} />
      <Thumbnail data={videos} loading={isLoading} />
    </div>
  )
}
