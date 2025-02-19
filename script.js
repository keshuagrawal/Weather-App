const input = document.querySelector('input')
// const error = document.querySelector('.container .error')
const searchBtn = document.querySelector('.container .search')
const weatherImg = document.querySelector('.container .weather-img img')
const celcius = document.querySelector('.container .location .dgr')
const city = document.querySelector('.container .location .city')
const windValue = document.querySelector('.container .info .wind .wind-value')
const humidityValue = document.querySelector(
  '.container .info .humidity .humidity-value'
)

function runPrograme() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=8e368457193a41e082b111600241410&q=${input.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      celcius.innerHTML = `${Math.round(data.current.temp_c)} <sup>o</sup>C`
      city.innerHTML = data.location.name
      humidityValue.innerHTML = `${data.current.humidity} %`
      windValue.innerHTML = `${data.current.wind_kph} Km/h`

      if (data.current.condition.text.toLowerCase() === 'clear') {
        weatherImg.src = './images/sun.png'
      } else if (
        data.current.condition.text.toLowerCase() === 'partly cloudy'
      ) {
        weatherImg.src = './images/cloudy-day.png'
      } else if (
        data.current.condition.text.toLowerCase() === 'mostly cloudy'
      ) {
        weatherImg.src = './images/cloudy (1).png'
      } else if (data.current.condition.text.toLowerCase() === 'cloudy') {
        weatherImg.src = './images/cloudy.png'
      } else if (data.current.condition.text.toLowerCase() === 'overcast') {
        weatherImg.src = './images/cloudy (1).png'
      } else if (data.current.condition.text.toLowerCase() === 'light rain') {
        weatherImg.src = './images/light-rain.png'
      } else if (data.current.condition.text.toLowerCase() === 'heavy rain') {
        weatherImg.src = './images/heavy-rain.png'
      } else if (
        data.current.condition.text.toLowerCase() === 'thunderstorms'
      ) {
        weatherImg.src = './images/thunderstorm.png'
      } else if (data.current.condition.text.toLowerCase() === 'showers') {
        weatherImg.src = './images/sun-shower.png'
      }
    })
    .catch((err) => {
      input.value = ''
      input.placeholder = err.message = 'City Not Found'
      input.classList.add('new-placeholder')
      setTimeout(() => {
        input.classList.remove('new-placeholder')
        input.placeholder = 'Enter Your City Name'
      }, 2000);
    })
}

searchBtn.addEventListener('click', runPrograme)
