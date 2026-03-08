// Accessing the elements
const navbar = document.querySelector(".navbar");
const signinBtn = document.getElementById("sign_in");
const signupBtn = document.getElementById("sign_up");
const searchbox = document.querySelector("search_box");
const searchInput = document.getElementById("searchInput");

const searchbtn = document.getElementById("searchBtn");
const watchbtn = document.querySelector(".watch_now");
const toListbtn = document.querySelector(".addToList");
   
// API accessing.
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// api function to fetch the data from the api.
asyn function fetchApi(searchmovies){
   const response = await fetch(Base_URL);
   const data = await response.json();
   console.log(data);
}

