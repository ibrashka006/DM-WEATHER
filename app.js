const apiKey ="4730c050173f769d32ea7919e19a02ac";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function chechWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/7133364.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/unnamed.png"
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "images/3767039.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/images/pngtree-dark-clouds-and-raindrops-png-image_2478510.jpg"
        }
        else if(data.weather[0].main == "mist"){
            weatherIcon.src = "images/images/png-transparent-fog-cloud-mist-fog-atmosphere-photography-monochrome-thumbnail.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }
    
}
searchBtn.addEventListener("click",()=>{
    chechWeather(searchBox.value);
})
chechWeather();