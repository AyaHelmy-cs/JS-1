var allproducts = document.querySelectorAll(".card .card-body")
var div = document.querySelector("#content")
var btn = document.querySelector(".btn1")
var ind = document.querySelector(".price_content")
var total_price = 0

allproducts.forEach(function(item){
    item.onclick = function(){
        div.innerHTML += item.textContent + " + "
        total_price += +(item.getAttribute("price"))
        if(div.innerHTML !=""){
            btn.style.display="block";
        }
    }
})

btn.onclick = function(){
    // price_content.style.display="block";
    ind.innerHTML = total_price
    // console.log(total_price)
}