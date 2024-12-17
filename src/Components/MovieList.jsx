import React, { useState, useEffect, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import HrMovieCard from './HrMovieCard';
const screenWidth= window.innerWidth;

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([])
  const element = useRef()
  useEffect(() => {
    getMovieByGenreId();
  }, [])

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(resp => {
      //console.log(resp.data.results)
      setMovieList(resp.data.results)
    })
  }

  const scrollLeft = (element) =>{
    element.scrollLeft -= screenWidth - 110;
  }

  const scrollRight = (element) =>{
    element.scrollLeft += screenWidth - 110;
  }
  return (
    <div className='relative'>
        <HiChevronLeft className={`hidden md:block text-white text-[50px] absolute
         ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} cursor-pointer z-10 p-2`} onClick = {() => scrollLeft(element.current)}/>
        <HiChevronRight className={`hidden md:block text-white text-[50px] absolute
         ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} cursor-pointer right-0 z-10 p-2`} onClick = {() => scrollRight(element.current)}/>
      <div ref = {element} className='flex overflow-x-auto gap-8 scrollbar-none
    pt-5 px-3 pb-5 scroll-smooth'>
        {movieList.map((item, index) => (
          <>
             {index_ % 3 == 0 ? <HrMovieCard backdrop_path={item.backdrop_path} title = {item.title}/> : <MovieCard poster_path={item.poster_path} />}
          </>
          
        ))}
      </div>
    </div>
  )
}

export default MovieList
