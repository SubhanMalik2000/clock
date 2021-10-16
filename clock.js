// getting element
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');


// interval to run again
setInterval( () =>{
  // setting degree
  const deg = 6;
  // getting date
  const day = new Date();

  // hours multply 30 due to rotation of scale in hours degree accordingly 
  let hh = day.getHours() * 30;
  // min multply deg due to rotation of scale in hours degree accordingly
  let mm = day.getMinutes() * deg;
  // sec multply deg due to rotation of scale in hours degree accordingly
  let ss = day.getSeconds() * deg;
  
  // hours multply deg due to rotation of scale in hours degree accordingly and ratation styling
  hr.style.transform = `rotate(${(hh)+(mm/12)}deg)`;

  // ratation styling
  mn.style.transform = `rotate(${mm}deg)`;
  // ratation styling
  sc.style.transform = `rotate(${ss}deg)`;

}, 1000);
