const apiKey = "de3098cd70a8926df0033958544c7cf9";

async function getWeather(){

    const city = document.getElementById("city").value.trim();

    if(city===""){

        alert("Enter a city name");

        return;

    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{

        const response=await fetch(url);

        if(!response.ok){

            throw new Error("City not found");

        }

        const data=await response.json();

        document.getElementById("cityName").innerHTML=
        `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerHTML=
        `${Math.round(data.main.temp)}°C`;

        document.getElementById("condition").innerHTML=
        data.weather[0].main;

        document.getElementById("humidity").innerHTML=
        `${data.main.humidity}%`;

        document.getElementById("wind").innerHTML=
        `${data.wind.speed} km/h`;

        document.getElementById("icon").src=
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }

    catch(error){

        alert(error.message);

    }

}