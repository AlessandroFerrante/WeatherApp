const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.error404');

search.addEventListener('click', ()=>{
    const apiKey= import.meta.env.VITE_API_KEY;
    const city = document.querySelector('.search-box input').value; 
    
    if(city === ''){
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');
        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.remove('fadeIn');
        weatherDetails.classList.remove('fadeIn');
        container.style.height= '';
        return;
    }

        const apiUrl= import.meta.env.VITE_API_URL+`?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl).then(response => response.json()).then(json => {

        if(json.cod === '404'){
            container.style.height= '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidty = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        
        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'assets/images/clear.png'
                break;
            case 'Rain':
                image.src = 'assets/images/rain.png'
                break;
            case 'Snow':
                image.src = 'assets/images/snow.png'
                break;
            case 'Clouds':
                image.src = 'assets/images/clouds.png'
                break;
            case 'Haze':
                image.src = 'assets/images/haze.png'
                break;
            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidty.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height= '590px';
         
    });
});