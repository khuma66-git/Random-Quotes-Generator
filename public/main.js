console.log("forntend file")


function getRand(arr) {
  let randomIndex = Math.floor(Math.random() * (arr.length - 1))
  return arr[randomIndex];
}
// GETTING DOM 
let quoteText = document.getElementById("js-quotes");
let author = document.getElementById("js-author");
let dateText = document.getElementById("js-date")
let timeText = document.getElementById("js-time");

// GETTING DATA FROM LocalStorage
let savedQ = localStorage.getItem("quotes")
quoteText.innerHTML = savedQ;

let savedA = localStorage.getItem("author")
author.innerHTML = savedA;

//SETTING DEFAULT DATE AND TIME
function updateDate(){
  let now = new Date()
dateText.innerHTML = now.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  
});
}
  updateDate();

setInterval(()=>{
    let now = new Date();
    timeText.innerHTML = now.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Karachi"})
},1000)

// ADDING ENEVTLISTENER TO GET QUOTES
document.querySelector(".js-Daily-Quotes").addEventListener('click', async () => {
  let qo = await fetch("/quotes");
  let res = qo.json()
  res.then((arr) => {
    let object = getRand(arr)
    quoteText.innerHTML = object.text
    author.innerHTML = object.author
    updateDate();
  
    localStorage.setItem("quotes", object.text)
    localStorage.setItem("author", object.author)
    
    

  });

})
