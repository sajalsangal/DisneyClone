import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "12728f6a30c4010b9ae999b961ee8a97"
//https://api.themoviedb.org/3/trending/all/day?api_key=12728f6a30c4010b9ae999b961ee8a97
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key="+ api_key);

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=12728f6a30c4010b9ae999b961ee8a97';

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}