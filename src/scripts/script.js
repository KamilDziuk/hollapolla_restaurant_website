
let hamburger = document.querySelector(".hamburger"); 
let navMenu = document.querySelector(".nav-menu");  

hamburger.addEventListener("click", () =>
{
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", () =>
{
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}));

window.addEventListener("scroll", () =>
{
let nav_headar = document.querySelector(".nav_headar");
nav_headar.classList.toggle("sticky", window.scrollY > 0);
});


//menu images start
let menu_language = document.querySelector(".menu-language");
let menu = document.querySelector(".menu");
menu_language.innerHTML = "Menu NL";


menu_language.addEventListener("click", () =>
{
if(menu_language.textContent === "Menu NL"){
menu.innerHTML = `
<img class="menuImage"  src="assets/images/menu_image_nl_0.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_1.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_2.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_3.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_4.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_5.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_6.webp">
<img class="menuImage"  src="assets/images/menu_image_nl_7.webp">
`;
menu_language.innerHTML = "Menu PL";
}
else
{
menu.innerHTML = `
<img class="menuImage"  src="assets/images/menu_image_pl_0.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_1.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_2.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_3.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_4.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_5.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_6.webp">
<img class="menuImage"  src="assets/images/menu_image_pl_7.webp"> 
`;
menu_language.innerHTML = "Menu NL";
}
})
//menu images end