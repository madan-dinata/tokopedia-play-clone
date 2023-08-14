/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useEffect } from "react"
import { useDebounce } from "use-debounce"
import { getVideos, getVideosBySearch } from "../api/axios"

export default function useFetchData(query) {
  const [data, setData] = useState([])
  const [debouncedQuery] = useDebounce(query, 300)
  const [loading, setLoading] = useState(false)

  const videosGet = async () => {
    setLoading(true)
    try {
      const data = await getVideos()
      setData(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const videosBySearchGet = async () => {
    setLoading(true)
    try {
      const data = await getVideosBySearch(debouncedQuery)
      setData(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    debouncedQuery ? videosBySearchGet() : videosGet()
  }, [debouncedQuery])

  return { data, loading }
}
