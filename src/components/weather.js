import React from "react";

const Weather = (props) => (

<div className="infoWeath">

{ props.city &&

<div>

<p><strong>Местоположение:</strong> {props.city}, {props.country} </p>

<p><strong>Температура на данный момент:</strong>  {Math.round(props.temp)}°C</p>

<p><strong>Мин./Макс. температура:</strong>  {Math.round(props.temp_min)}/{Math.round(props.temp_max)}°C</p>

<p><strong>Давление:</strong> {props.pressure} hPa</p>

<p><strong>Восход солнца:</strong>  {props.sunrise}</p>

<p><strong>Заход солнца:</strong>  {props.sunset}</p>

<p><strong>Влажность:</strong> {props.humidity}%</p>

<p><strong>Видимость:</strong> {props.visibility/1000} км</p>

<p><strong>Ветер:</strong> {props.wind} км/ч</p>

<p><strong>Облачность:</strong> {props.clouds}%</p>

</div>

}

</div>

);

export default Weather;