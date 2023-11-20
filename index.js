
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};



fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=fd66419ad2e7c1cab6d4947db6c2f032", requestOptions,{ mode: 'no-cors' } )
  .then(response => response.json())
  .then(tempoJson => {
    console.log(tempoJson);
    render(tempoJson);
  })
  .catch(error => console.log('error', error));

function render(tempoJson) {
  const ul = document.getElementById("previsao-tempo");
  ul.innerHTML = "";

  ul.insertAdjacentHTML("beforeend", `
<li id="${tempoJson.id}">
<div class = "local">
  <p>Tempo agora em ${tempoJson.name}, ${tempoJson.state}</p>
</div>

<div class="temperatura">
  <img src = "https://www.climatempo.com.br/dist/images/v2/svg/${tempoJson.data.icon}.svg" class="imagemtemp">
  <p class="quanttemp">${tempoJson.data.temperature}°</p>
</div>

<div class="nuvens">
  <img src = "https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg" class="imagemnuv"> 
  <p class "quantnuv">${tempoJson.data.condition}</p>
</div>

<div class="sensacao">
  <img src = "https://www.climatempo.com.br/dist/images/v2/svg/ic-sensation.svg" class="imagemsens">
  <p class "quantsens">Sensação&nbsp;${tempoJson.data.sensation}°</p>
</div>

<div class="vento">
  <p class "vento">Vento ${tempoJson.data.wind_velocity}km/h</p>

</div> 

<div class="umidade">
  <img src = "https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg" class="imagemumid">
  <p class "umidade">Umidade&nbsp${tempoJson.data.humidity}%</p>
</div>

  `
)}