import axios from "axios"
import { useState,useEffect } from "react"
import { MdChevronLeft,MdChevronRight } from 'react-icons/md'

import Movie from "./Movie"

export default function Row({title ,fetchURL,rowID}) {
  const [movies,setMovies] = useState([])

  const FetchMovies = async()=>{
    try{
      const {data} = await axios.get(fetchURL)
    
      setMovies(data.results)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    FetchMovies()
  },[])
  const SlideLeft = () => {
    var slider = document.getElementById("slider"+rowID)
    slider.scrollLeft = slider.scrollLeft - 500
     
  }
  const SlideRight = () => {
    var slider = document.getElementById("slider"+rowID)
    slider.scrollLeft = slider.scrollLeft + 500
     
  }
  
  return (
    <div>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group ">
        <MdChevronLeft onClick={SlideLeft} size={40} className=" bg-white rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block z-10"/>
        <div id={'slider'+rowID} className=" overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative " >
          {movies?.map((item,id)=>{
            return <Movie item={item} key={id} />
          })}
        </div>
        <MdChevronRight onClick={SlideRight} size={40} className=" bg-white rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block right-0 z-10"/>
      </div>
    </div>
  )
}