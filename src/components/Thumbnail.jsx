export default function Thumbnail() {
  return (
    <div className="px-10">
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 w-52 relative">
          <img className="rounded-lg w-full h-full" src="https://i.ytimg.com/vi/G4NXuVb81Ao/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD3YJghzXk4lBbQNWsOzp9hxLYJ1w" alt="Skyscrapers" />
          <div className="absolute bottom-3 px-3 w-full">
            <h3 className="font-semibold text-lg text-white">SpiderMan</h3>
            <p className="text-gray-300">Rizky Harus</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 w-52 relative">
          <img className="rounded-lg w-full h-full" src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp" alt="Skyscrapers" />
          <div className="absolute bottom-3 px-3 w-full">
            <h3 className="font-semibold text-lg text-white">SpiderMan</h3>
            <p className="text-gray-300">Rizky Harus</p>
          </div>
        </div>
      </div>
    </div>
  )
}
