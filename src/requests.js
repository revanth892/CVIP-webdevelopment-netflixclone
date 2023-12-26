const Api_Key="c18728f01e17e22acba6019917bf71b3";

const requests ={
    getTrending:`/trending/all/week?api_key=${Api_Key}&language=en-US`,
    getNetflixOriginals:`/discover/tv?api_key=${Api_Key}&with_networks=213`,
    getTopRated:`/movies/top_rated?api_key=${Api_Key}&language=en-US`,
    getActionMovies:`/discover/movie?api_key=${Api_Key}&with_genres=28`,
    getComedyMovies:`/discover/movie?api_key=${Api_Key}&with_genres=35`,
    getHorrorMovies:`/discover/movie?api_key=${Api_Key}&with_genres=27`,
    getRomanceMovies:`/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    getDocumentaries:`/discover/movie?api_key=${Api_Key}&with_genres=99`,
}

export default requests;