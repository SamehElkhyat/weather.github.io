// weather get api 


async function getapi()
{
let myhttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`);
let finalhttp = await myhttp.json();
let newhttp=[finalhttp.location];
let newhttp2=[finalhttp.current];
let cartoona ="";
for(let i=0;i<newhttp.length;i++)
{
cartoona+=`
  <div class="col-md-6 w-100 p-5 ">
  <div class="location">
  <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
  <h1 class="w-100">${newhttp[i].localtime}</h1>
  
  <h3>${newhttp[i].name}</h3>
 
 <h1 class="location">${newhttp2[i].temp_c}.C</h1>
 <h1>${newhttp2[i].condition.text}</h1>
 <div class="spans">
 <span><img src="img/icon-umberella.png" alt="">20%</span>
 <span><img src="img/icon-wind.png" alt="">18km/h</span>
 <span><img src="img/icon-compass.png" alt="">East</span>
 </div>
  </div>
  </div>`;
}
document.querySelector('.location').innerHTML=cartoona;
}
getapi();





async function getsecondapi()
{
let myhttp2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`);
let finalhttp2 = await myhttp2.json();
let newhttp2=[finalhttp2.current];
let cartoona ="";
for(let i=0;i<newhttp2.length;i++)
{
cartoona+=`
  <div class="col-md-6 p-5 w-100 sameh">
  <div class="cloud"> 
  <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
  <h3 class="degree">${newhttp2[i].temp_c}.C</h3>
  <h1>${newhttp2[i].condition.text}</h1>
  <img src=${newhttp2[i].icon} alt="">
  <h3></h3></div>`;
}
document.querySelector('.current').innerHTML=cartoona;
}
getsecondapi();











async function getthirdapi()
{
let myhttp3 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`);
let finalhttp3 = await myhttp3.json();
let newhttp3=[finalhttp3.current];
let cartoona ="";
for(let i=0;i<newhttp3.length;i++)
{
cartoona+=`

  <div class="col-md-6 p-5 w-100">
  <div class="cloud"> 
  <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
  <h3 class="degree">${newhttp3[i].temp_c}.C</h3>
  <h1>${newhttp3[i].condition.text}</h1>
  <img src=${newhttp3[i].condition.icon} alt="">
  <h3></h3></div>
  `;
}
document.querySelector('.sun').innerHTML=cartoona;
}
getthirdapi();





