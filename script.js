async function weather() {
    const api ="b2d72194f03f6ff4eebf243008a3bfcd"
    const origin =document.getElementById("city").value
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+origin+"&appid="+api
    const rep = await fetch(url)
    const data = await rep.json()
    console.log(data)
    const c = data.main.temp - 273.15
    const icon = data.weather[0].icon
    console.log("The weather in "+origin+" is "+c.toFixed(2)+"°C")
    // Use the high-def icon endpoint (@2x)
document.getElementById("result").innerHTML = `
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
    <h2>The weather in ${origin} is ${c.toFixed(1)}°C</h2>
`;
}