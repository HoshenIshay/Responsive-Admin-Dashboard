"use strict" ; 
let myRequest = new Request ("./db.json")
fetch(myRequest)
.then(response => response.json())
.then(data => {
  var name = document.getElementById("name");
  var number = document.getElementById("number");
  var payment = document.getElementById("payment");
  var status = document.getElementById("status");
    for (var i = 0; i < data.products.length; i++) {
        var div = document.createElement("div");
        div.innerHTML =  data.products[i].name;
        name.appendChild(div);
        var div = document.createElement("div");
        div.innerHTML =  data.products[i].number;
        number.appendChild(div);
        var div = document.createElement("div");
        div.innerHTML =  data.products[i].payment;
        payment.appendChild(div);
        var div = document.createElement("div");
        div.innerHTML =  data.products[i].status;
        status.appendChild(div);
      }
})
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click', ()=>{
  sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click' , ()=>{
  sideMenu.style.display= 'none' ;
})

themeToggler.addEventListener('click' , ()=>{
  document.body.classList.toggle('dark-theme-variables')
})