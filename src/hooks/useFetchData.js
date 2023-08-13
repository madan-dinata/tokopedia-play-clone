/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDebounce } from "use-debounce"

export default function useFetchData(query) {
  const [data, setData] = useState([])
  const [debouncedQuery] = useDebounce(query, 300)
  const [loading, setLoading] = useState(false)

  const getVideos = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/videos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      setData(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const getVideosBySearch = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/videos/search?q=${debouncedQuery}`)
      setData(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    debouncedQuery ? getVideosBySearch() : getVideos()
  }, [debouncedQuery])

  return { data, loading }
}
