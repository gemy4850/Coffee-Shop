let navbar = document.getElementById("navbar")
let bars = document.querySelector(".fa-bars")
let cartItemContn = document.querySelector(".cart-item-container")
let cartItem = document.querySelector(".cart-item")
let shoping = document.getElementById("shoping")
let searchbtn = document.getElementById("searchbtn")
let searchform = document.querySelector(".search-form")
let readMore = document.getElementById("readMore")
let moreinfo = document.querySelector(".moreinfo")
let lessThan = document.getElementById("lessThan")
let heartProduct = document.querySelectorAll(".products .box-container .box .fa-heart")
let eyeproduct = document.querySelectorAll(".products .box-container .box .fa-eye")
let likeproduct = document.querySelectorAll(".products .box-container .box .like")
bars.onclick = ()=>{
    navbar.style.right = "0"
    cartItemContn.classList.remove("active") 
    searchform.classList.remove("active") 
}
shoping.addEventListener("click" ,()=>{
cartItemContn.classList.toggle("active")
navbar.classList.remove("active") 
    searchform.classList.remove("active") 
})
searchbtn.addEventListener("click" ,()=>{
searchform.classList.toggle("active")
cartItemContn.classList.remove("active") 
    navbar.classList.remove("active") 
})
window.onscroll =()=>{
    navbar.classList.remove("active") 
    cartItemContn.classList.remove("active") 
    searchform.classList.remove("active") 
}
readMore.addEventListener("click" ,()=>{
moreinfo.style.display = "block"
readMore.style.display = "none"
lessThan.style.display ="inline-block"
})
lessThan.addEventListener("click" ,()=>{
    moreinfo.style.display = "none"
    readMore.style.display = "inline-block"
    lessThan.style.display = "none"
})
heartProduct.forEach((heart)=>{
heart.addEventListener(("click") , (eve)=>{
eve.target.classList.toggle("fa-solid")
})
})
