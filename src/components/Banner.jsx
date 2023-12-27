import React, { useEffect, useState } from 'react'
import requests from '../requests';
import axios from '../axios';
import './Banner.css'

function Banner() {
    const [movie,setMovie] =useState([]);
   
    useEffect(()=>{
        const fetchData=async()=>{
            const request = await axios.get(requests.getNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1) 
                ]
            )
        }
    fetchData();
    },[])
    
    console.log(movie)
    function truncate(str,n)
    {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
    <header className='banner_area'
        style={{
           backgroundSize: "cover",
           backgroundImage: `url(
            https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
           )`,
           backgroundPosition: "center center" 
        }}
    >
        <div className='banner_content'>
            {/*title*/}
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>     
            <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
            {/* description */}
        </div>
        <div className='banner--fade'/>

    </header>
  )
}

export default Banner