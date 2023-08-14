/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Comment from "../components/Comment"
import Product from "../components/Product"
import { useEffect } from "react"
import { useState } from "react"
import { getVideosId } from "../api/axios"

export default function Detail() {
  const { id } = useParams()
  const [videosId, setVideosId] = useState([])

  const handleGetVideosId = async () => {
    try {
      const data = await getVideosId(id)
      setVideosId(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleGetVideosId()
  }, [])

  return (
    <div className="mb-5">
      <Navbar />
      <div className="mt-20 grid grid-cols-12 gap-2 px-10 mb-5 h-[480px]">
        <div className="col-span-8">
          {videosId && (
            // <iframe
            //   height="480"
            //   src={`https://www.youtube.com/embed/${videosId.urlVideo}`}
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowFullScreen
            //   title={`${videosId.title}`}
            //   className="w-full"
            // />
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videosId.urlVideo}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
        <div className="col-span-4 h-[480px]">
          <Comment id={id} />
        </div>
      </div>
      <Product id={id} />
    </div>
  )
}
