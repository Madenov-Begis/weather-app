// url  https://api.openweathermap.org/data/2.5/weather?q=$%7Bcity_name%7D&units=metric&APPID=$%7Bkey%7D

const KEY = "96b947a45d33d7dc1c49af3203966408"
const input = document.querySelector('#input'),
      form = document.querySelector('#form'),
      city = document.querySelector('.city'),
      alert = document.querySelector('.alert'),
      loader = document.querySelector('.loading'),
      block = document.querySelector('.block');

      
      async function getWeather() {
          await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&APPID=${KEY}`)
          .then(res => {
              return res.json()             
            })
            .then(data => {
                const {
                    name,
                    main,
                    cod,
                    weather
                } = data
                if(block.style.display = 'flex'){
                    loader.style.display = 'none'
                } else{
                    loader.style.display = 'flex'

                }
            if(cod < 400) {
                block.style.display = 'flex'
                block.innerHTML = `
                <div class="block-cont">
                    <div class="city">${name}</div>
                    <div class="temp">${Math.round(main.temp)}°C</div>
                    <div class="min-max">
                        <div class="min">${Math.round(main.temp_min)}°C</div>
                        <div class="max">${Math.round(main.temp_max)}°C</div>
                    </div>
                    <div class="cloudy">${weather[0].main}</div>
                </div>
                <div class="block-image">
                    <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" >
                </div>
                `
            } else {
                alert.style.right = '30px';
                block.style.display = 'none'

                setTimeout(() => {
                    alert.style.right = '-50%'
                }, 2000)
            }
        })
        .catch(err => {
            new Error('Qatelik bar')
        })
}  
form.addEventListener('submit', (e) => {
    e.preventDefault()
    getWeather()
    form.reset()
}) 


