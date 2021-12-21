import React from "react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6b290b6d66bdcadb91913d71c51d257e";

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q: query,
            units: "metric", // bu litr, metr ga o'xshash ob havo olchov birligi
            APPID: API_KEY,
       
        }
    })
    return data;
}

