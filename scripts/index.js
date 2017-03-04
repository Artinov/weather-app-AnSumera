
var cityName = document.querySelector("#cityName");
var time = document.querySelector("#time");

var humidity = document.querySelector("#humidity");
var the_temp = document.querySelector("#the_temp");
var weather_state_name = document.querySelector("#weather_state_name");
var wind_speed = document.querySelector("#wind_speed");

var weatherIconsPlaceholders = document.querySelectorAll("img");

var breadcrumbCountry = document.querySelector("#breadcrumb-country");
var breadcrumbRegion = document.querySelector("#breadcrumb-region");

var button = document.querySelector("#getWeather")
var select = document.querySelector("#city");

var getWeatherData = function(){
	var townName = select.value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);

			breadcrumbCountry.innerText = response.location.country;
			breadcrumbRegion.innerText = response.location.region;

			humidity.innerText = response.current.humidity
			the_temp.innerText = response.current.temp_c
			weather_state_name.innerText = response.current.condition.text
			wind_speed.innerText = response.current.wind_kph

			cityName.innerText = response.location.name;
			time.innerText = response.location.localtime.split(" ").pop();

			weatherIconsPlaceholders.forEach(function(img){
				img.setAttribute("src", "http:" + response.current.condition.icon);
			})
	    }
	};
	xhttp.open("GET", "https://intense-beach-78744.herokuapp.com/?city=" + townName, true);
	xhttp.send();
};
button.onclick = getWeatherData;
getWeatherData();