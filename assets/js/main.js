const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', ()=>{
    const APIKey= import.meta.env.VITE_API_KEY;
    console.log(APIKey)
    const city = document.querySelector('.search-box input').value; 
    
    if(city === '')
        return;
    fetch(``)
});