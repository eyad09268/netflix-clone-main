import { useState } from 'react'
import { FaHeart,FaRegHeart } from 'react-icons/fa'

export default function Movie({item}) {
const [Like,setLike] = useState(false)

  return (
    <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative">
              <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
              <div className=" absolute inset-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white duration-200 ">
                <p className="text-xs md:text-sm whitespace-normal flex justify-center items-center h-full" >{item?.title}</p>
                <p>
                  {Like ? <FaHeart className=" absolute top-4 left-4 text-gray-300"/> : <FaRegHeart className=" absolute top-4 left-4 text-gray-300"/>} 
                 </p>
              </div>
            </div>
  )
}