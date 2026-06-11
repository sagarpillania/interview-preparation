const inputBox=document.getElementById("inpt");
const submit=document.getElementById("submit");
const weatherDisplay=document.getElementById("showData");

async function fetchWeatherData(val){
    try{
        const response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${val}?unitGroup=us&key=542YMW6EHSLER4RLC7R5UDPG6&contentType=json`);
        const result=await response.json();
        console.log(result);
        const cleanData=processWeatherData(result);
        renderWeatherDat(cleanData);
    }catch(err){
        console.log(err);
    }
}

function renderWeatherDat(data){
    weatherDisplay.innerHTML="";

    const card=document.createElement("div");
    card.className = "cardData";
    card.style.border = "1px solid #ccc"; // Fixed space typo ("1 px" -> "1px")
    card.style.padding = "20px";
    card.style.marginTop = "20px";
    card.style.borderRadius = "8px";

    card.innerHTML=`
        <div class="card-header">
            <h2 class="city-name">${data.city}</h2>
            <p class="condition-text">${data.condition}</p>
        </div>
        
        <div class="card-body">
            <img class="weather-icon" src="https://raw.githubusercontent.com/visualcrossing/weather-icons/main/SVG/${data.icon}.svg" alt="${data.condition}">
            <h1 class="temperature">${data.temp}<span>°C</span></h1>
        </div>
        
        <div class="card-footer">
            <div class="stat">
                <span class="label">Humidity</span>
                <span class="value">${data.humidity}%</span>
            </div>
            <div class="stat">
                <span class="label">Wind</span>
                <span class="value">${data.wind} km/h</span>
            </div>
        </div>
    `
    weatherDisplay.appendChild(card);
    inputBox.value="";
}

function processWeatherData(result) {
    const processedData={
        city:result.address,
        condition:result.currentConditions.conditions,
        temp:result.currentConditions.temp,
        icon:result.currentConditions.icon,
        humidity: result.currentConditions.humidity,
        wind: result.currentConditions.windspeed,   
    };
    return processedData;
}

submit.addEventListener("click",()=>{
    const val=inputBox.value.trim();
    // console.log(val);
    if(val!==""){
        fetchWeatherData(val);
    }
})
