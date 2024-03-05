
$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        var opacity = 1 - (scrollPosition / 400); // Adjust 400 to control the scroll distance

        $('.back_img').css('opacity', opacity);
    });
});







const apiKey = "488f71f2d8a59c8e5917a9c8b4d35031";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
 //   const apiUrl2= "https://api.openweathermap.org/data/2.5/forecast?q={city name}";

    const searchbox= document.querySelector(".search input");
    const searchbtn= document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function chechWeather(city){
        const response=await fetch(apiUrl + city +  `&appid=${apiKey}`);
     //   const response2=await fetch(apiUrl + city + `&appid=${apikey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";

        }

        else{

            var data = await response.json();



        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="https://img.icons8.com/arcade/64/clouds.png"

        }

        else if (data.weather[0].main == "Clear"){
            weatherIcon.src="https://img.icons8.com/emoji/48/sun-emoji.png"

        }

        else if (data.weather[0].main == "Rain"){
            weatherIcon.src="https://img.icons8.com/color/48/rain--v1.png"

        }

        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-drizzle-weather-flaticons-flat-flat-icons.png"

        }

        else if (data.weather[0].main == "Mist"){
            weatherIcon.src="https://img.icons8.com/fluency/48/foggy-night-1.png"

        }


        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none"


        }
        



    }

    searchbtn.addEventListener("click",()=>{
        chechWeather(searchbox.value); 
    })
