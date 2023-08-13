/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"

export default function Thumbnail({ data, loading }) {
  return (
    <div className="px-10">
      {loading ? (
        <p className="text-2xl">Loading</p>
      ) : (
        <div className="grid grid-cols-6 gap-4">
          {data.map((video) => (
            <Link to={`../detail/${video.id}`} key={video.id}>
              <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 w-52 relative h-96">
                <img className="rounded-lg w-full h-full" src={video.urlThumbnail} alt={video.title} />
                <div className="absolute bottom-3 px-3 w-full">
                  <h3 className="font-semibold text-lg text-white">{video.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
