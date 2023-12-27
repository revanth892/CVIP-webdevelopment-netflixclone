
import React, { useEffect,useState} from "react";
import axios from "../axios"; //default exports can be  renamed
import './Row.css';

const img_base_url = "https://image.tmdb.org/t/p/original/";

const Row=({title,fetchUrl,isLargeRow})=>{
    const[movies,setMovies]=useState([]);
    // console.log(fetchUrl)
    useEffect(()=>{
        const fetchData=async()=>{
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            // console.table(movies);
            // return request;
        }
        fetchData();
    },[fetchUrl]);

    // useEffect(()=>{
    //     console.table(movies)
    // },[movies])

    // console.table(movies)

    return(
        <div className="row">
            <h3>{title}</h3>
            <div className="row_of_posters">
                {movies.map((movie=>
                    <img
                        key={movie.id}
                        className={`poster ${isLargeRow && 'poster_large'}`}
                        src={`${img_base_url}${
                            isLargeRow ? movie.poster_path:movie.backdrop_path
                        }`} 
                        alt={movie.name} 
                    />    
                ))}
            </div>
        </div>
    )
}

export default Row;