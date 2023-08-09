/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Comment from "../components/Comment"
import Product from "../components/Product"

export default function Detail() {
  const { id } = useParams()

  return (
    <div className="mb-5">
      <Navbar />
      <div className="mt-20 grid grid-cols-12 gap-2 px-10 mb-5 h-[480px]">
        <div className="col-span-8">
          <iframe height="480" src={`https://www.youtube.com/embed/GUwqTmliN1Y`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" className="w-full" />
        </div>
        <div className="col-span-4 h-[480px]">
          <Comment id={id} />
        </div>
      </div>
      <Product />
    </div>
  )
}
