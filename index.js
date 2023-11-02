const API_KEY = 'zKsFBo0gdGkXugCdyrr6udHxxkTmlziuP6VpxdYh';
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=zKsFBo0gdGkXugCdyrr6udHxxkTmlziuP6VpxdYh&feedtype=json&ver=1.0`;

/* To move slider up and down for previous weather*/

    const previousWeatherToggle = document.querySelector('.show-previous-weather');
    const previousWeather = document.querySelector('.previous-weather');
  
    previousWeatherToggle.addEventListener('click', () => {
      previousWeather.classList.toggle('show-weather');
    })

    getWeather()
    
    function getWeather() {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const {
          sol_keys,
          validity_checks,
          ...solData
        } = data
       const temp = Object.entries(solData).map(([sol,data]) => {
        return {
          sol: sol,
          maxTemp: data.AT.mx,
          minTemp: data.AT.mn,
          windSpeed: data.hws.av,
          windDirectionDegrees: data.WD.most_common.compass_degrees,
          windDirectionCardinal: data.WD.most_common.compass_point,
          date: new Date(data.First_UTC)
        }
       })
       console.log(temp)
      })
    }
    
 
