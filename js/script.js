
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
let languages = document.querySelector('#languages');
let phone =  document.querySelector("#phone");
let allRightsReserved =  document.querySelector("#allRightsReserved");
let address =  document.querySelector("#address");
let contactFooter =  document.querySelector("#contactFooter");
let smollTest6 =  document.querySelector("#smollTest6");
let smollTest5 =  document.querySelector("#smollTest5");
let smollTest4 =  document.querySelector("#smollTest4");
let smollTest3 =  document.querySelector("#smollTest3");
let smollTest2 =  document.querySelector("#smollTest2");
let smollTest1 =  document.querySelector("#smollTest1");
let smollTest0 =  document.querySelector("#smollTest0");
let textAboutus =  document.querySelector("#textAboutus");
let textAlexBrush =  document.querySelector("#textAlexBrush");
let home =  document.querySelector("#home");
let menu =  document.querySelector("#menu");
let aboutUs =  document.querySelector("#aboutUs");
let contact =  document.querySelector("#contact");
let welcome =  document.querySelector("#welcome");
let textHeder =  document.querySelector("#textHeder");

languages.addEventListener('click', function()

{

  if(home.textContent == "Home" )
  home.innerHTML = "Strona główna";
else if(home.textContent == "Strona główna")
{
  home.innerHTML = "Home"
}
if(aboutUs.textContent == "About us" )
aboutUs.innerHTML = "O nas";
else if(aboutUs.textContent == "O nas")
{
  aboutUs.innerHTML = "About us"
}


if(welcome.textContent == "Welcome" )
welcome.innerHTML = "Zapraszamy";
else if(welcome.textContent == "Zapraszamy")
{
  welcome.innerHTML = "Welcome"
}
if(textHeder.textContent == "The largest Polish restaurant in the Netherlands" )
textHeder.innerHTML = "Największa polska restauracja w Holandii";

else if(textHeder.textContent == "Największa polska restauracja w Holandii")
{
  textHeder.innerHTML = "The largest Polish restaurant in the Netherlands"
}
if(textAboutus.textContent == "HollaPolla restaurant is a place where good food is combined with a pleasant atmosphere and great music. A culinary journey at HollaPolla is a real feast for the palate, and the harmonious mix of flavors makes the dishes unforgettable. Additionally, the atmosphere in the restaurant is emphasized by well-selected music, creating a unique atmosphere that encourages you to relax and enjoy a unique experience." )
textAboutus.innerHTML = "Restauracja HollaPolla to miejsce, w którym dobre jedzenie łączy się z przyjemną atmosferą i świetną muzyką. Kulinarna podróż w HollaPolla to prawdziwa uczta dla podniebienia, a harmonijne połączenie smaków sprawia, że dania pozostają niezapomniane. Dodatkowo atmosferę panującą w restauracji podkreśla odpowiednio dobrana muzyka, tworząca niepowtarzalną atmosferę, która zachęca do relaksu i przeżycia wyjątkowych wrażeń.";
else if(textAboutus.textContent == "Restauracja HollaPolla to miejsce, w którym dobre jedzenie łączy się z przyjemną atmosferą i świetną muzyką. Kulinarna podróż w HollaPolla to prawdziwa uczta dla podniebienia, a harmonijne połączenie smaków sprawia, że dania pozostają niezapomniane. Dodatkowo atmosferę panującą w restauracji podkreśla odpowiednio dobrana muzyka, tworząca niepowtarzalną atmosferę, która zachęca do relaksu i przeżycia wyjątkowych wrażeń.")
{
  textAboutus.innerHTML = "HollaPolla restaurant is a place where good food is combined with a pleasant atmosphere and great music. A culinary journey at HollaPolla is a real feast for the palate, and the harmonious mix of flavors makes the dishes unforgettable. Additionally, the atmosphere in the restaurant is emphasized by well-selected music, creating a unique atmosphere that encourages you to relax and enjoy a unique experience."
}
if(textAlexBrush.textContent == "The largest Polish restaurant in the Netherlands" )
textAlexBrush.innerHTML = "Największa polska restauracja w Holandii";

else if(textAlexBrush.textContent == "Największa polska restauracja w Holandii")
{
  textAlexBrush.innerHTML = "The largest Polish restaurant in the Netherlands"
}

if(smollTest0.textContent == "Exceptional food"){
smollTest0.innerHTML = "Wyjątkowe jedzenie";
}

else if(smollTest0.textContent == "Wyjątkowe jedzenie")
{

  smollTest0.innerHTML = "Exceptional food";
  }

  if(smollTest1.textContent == "good fun"){
   smollTest1.innerHTML = "dobra zabawa";
}

else if(smollTest1.textContent == "dobra zabawa")
{

  smollTest1.innerHTML = "good fun";
  }

  if(smollTest2.textContent == "HollaPolla restaurant is a place where you can enjoy unique flavors and experience a real feast for the palate. Our kitchen serves delicious dishes that combine traditional flavors with a modern approach to cooking."){
   smollTest2.innerHTML = "Restauracja HollaPolla to miejsce, w którym można delektować się wyjątkowymi smakami i przeżyć prawdziwą ucztę dla podniebienia. W naszej kuchni serwujemy wyśmienite dania, które łączą w sobie tradycyjne smaki z nowoczesnym podejściem do gotowania.";
}

else if(smollTest2.textContent == "Restauracja HollaPolla to miejsce, w którym można delektować się wyjątkowymi smakami i przeżyć prawdziwą ucztę dla podniebienia. W naszej kuchni serwujemy wyśmienite dania, które łączą w sobie tradycyjne smaki z nowoczesnym podejściem do gotowania.")
{

  smollTest2.innerHTML = "HollaPolla restaurant is a place where you can enjoy unique flavors and experience a real feast for the palate. Our kitchen serves delicious dishes that combine traditional flavors with a modern approach to cooking.";
  }

  if(smollTest3.textContent == "view the full menu"){
   smollTest3.innerHTML = "zobacz pełne menu";
}

else if(smollTest3.textContent == "zobacz pełne menu")
{

  smollTest3.innerHTML = "view the full menu";
  }

  if(smollTest4.textContent == "Drinks"){
   smollTest4.innerHTML = "Drinki";
}

else if(smollTest4.textContent == "Drinki")
{

  smollTest4.innerHTML = "Drinks";
  }

  if(smollTest5.textContent == "DELIGHT"){
   smollTest5.innerHTML = "ROZKOSZ";
}

else if(smollTest5.textContent == "ROZKOSZ")
{

  smollTest5.innerHTML = "DELIGHT";
  }

  if(smollTest6.textContent == "A place where you will immerse yourself in a unique atmosphere and enjoy delicious dishes. But that's not all - HollaPolla's offer also includes a wide selection of creative drinks and refreshing beverages that will perfectly complement your culinary experience. Enjoy the taste and atmosphere in the HollaPolla restaurant, where every bite and every sip is a real pleasure for the senses."){
   smollTest6.innerHTML = "Miejsce, w którym zanurzysz się w wyjątkowej atmosferze i rozkoszujesz się pysznymi daniami. Ale to nie wszystko – w ofercie HollaPolla znajdziesz także szeroki wybór kreatywnych drinków i napojów orzeźwiających, które doskonale uzupełnią Twoje doznania kulinarne. Ciesz się smakiem i atmosferą w restauracji HollaPolla, gdzie każdy kęs i każdy łyk to prawdziwa przyjemność dla zmysłów.";
}

else if(smollTest6.textContent == "Miejsce, w którym zanurzysz się w wyjątkowej atmosferze i rozkoszujesz się pysznymi daniami. Ale to nie wszystko – w ofercie HollaPolla znajdziesz także szeroki wybór kreatywnych drinków i napojów orzeźwiających, które doskonale uzupełnią Twoje doznania kulinarne. Ciesz się smakiem i atmosferą w restauracji HollaPolla, gdzie każdy kęs i każdy łyk to prawdziwa przyjemność dla zmysłów.")
{

  smollTest6.innerHTML = "A place where you will immerse yourself in a unique atmosphere and enjoy delicious dishes. But that's not all - HollaPolla's offer also includes a wide selection of creative drinks and refreshing beverages that will perfectly complement your culinary experience. Enjoy the taste and atmosphere in the HollaPolla restaurant, where every bite and every sip is a real pleasure for the senses.";
  }

  if(address.textContent == "Address"){
    address.innerHTML = "Adres";
}

else if(address.textContent == "Adres")
{

  address.innerHTML = "Address";
  }

  if(contact.textContent == "Contact" )
contact.innerHTML = "Kontakt";
else if(contact.textContent == "Kontakt")
{
  contact.innerHTML = "Contact"
}
if(contactFooter.textContent == "Contact" )
contactFooter.innerHTML = "Kontakt";
else if(contactFooter.textContent == "Kontakt")
{
  contactFooter.innerHTML = "Contact";
}

if(allRightsReserved.textContent == "HollaPolla All rights reserved." )
allRightsReserved.innerHTML = "HollaPolla Wszelkie prawa zastrzeżone.";
else if(allRightsReserved.textContent == "HollaPolla Wszelkie prawa zastrzeżone.")
{
  allRightsReserved.innerHTML = "HollaPolla All rights reserved.";
}
if(languages.textContent == "Polish" )
languages.innerHTML = "English";
else if(languages.textContent == "English")
{
  languages.innerHTML = "Polish";
}




});




document.querySelector('#languages').addEventListener('click', function()
{
  if(home.textContent == "Home" )
  home.innerHTML = "Strona główna";
else if(home.textContent == "Strona główna")
{
  home.innerHTML = "Home"
}
if(aboutUs.textContent == "About us" )
aboutUs.innerHTML = "O nas";
else if(aboutUs.textContent == "O nas")
{
  aboutUs.innerHTML = "About us"
}



  if(address.textContent == "Address"){
    address.innerHTML = "Adres";
}

else if(address.textContent == "Adres")
{

  address.innerHTML = "Address";
  }

  if(contact.textContent == "Contact" )
contact.innerHTML = "Kontakt";
else if(contact.textContent == "Kontakt")
{
  contact.innerHTML = "Contact"
}
if(contactFooter.textContent == "Contact" )
contactFooter.innerHTML = "Kontakt";
else if(contactFooter.textContent == "Kontakt")
{
  contactFooter.innerHTML = "Contact";
}


if(allRightsReserved.textContent == "HollaPolla All rights reserved." )
allRightsReserved.innerHTML = "HollaPolla Wszelkie prawa zastrzeżone.";
else if(allRightsReserved.textContent == "HollaPolla Wszelkie prawa zastrzeżone.")
{
  allRightsReserved.innerHTML = "HollaPolla All rights reserved.";
}



});