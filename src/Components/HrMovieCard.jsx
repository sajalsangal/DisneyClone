import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({backdrop_path, title}) => {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
    <img src={IMAGE_BASE_URL + backdrop_path} alt="" className='w-[160px] md:w-[260px]
        rounded-lg hover:border-[3px] border-gray-400 
        z-0' />
        <h2 className='w-[160px] md:w-[260px] text-white mt-2'>{title}</h2>
    </div>   
  )
}

export default HrMovieCard
