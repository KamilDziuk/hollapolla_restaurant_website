let contenerReservationInfo = document.querySelector("#contenerReservationInfo");
let reservationSummaryBackground = document.querySelector(".reservationSummaryBackground");
let reservationCodeText = document.querySelector(".reservationCodeText");
let reservationCode;
contenerReservationInfo.style.display = "none";
reservationSummaryBackground.style.display = "none";

 let reservationCounter = setInterval(() => {
 reservationCode = Math.floor(Math.random() * 100);
reservationCodeText.innerHTML = `Reservation code: ${reservationCode}`;
},1000);

// Dish name start
const position_8 = document.querySelector('.position_8');
const position_9 = document.querySelector('.position_9');
const position_10 = document.querySelector('.position_10');
const position_11 = document.querySelector('.position_11');
const position_12 = document.querySelector('.position_12');
const position_13 = document.querySelector('.position_13');
const position_14 = document.querySelector('.position_14');
const position_15 = document.querySelector('.position_15');
const position_16 = document.querySelector('.position_16');
const position_17 = document.querySelector('.position_17');
const position_18 = document.querySelector('.position_18');
const position_19 = document.querySelector('.position_19');
const position_20 = document.querySelector('.position_20');
const position_21 = document.querySelector('.position_21');
const position_22 = document.querySelector('.position_22');
// Dish name end

// Local date start
currentDate = () =>{ 
let date = new Date();
  
 let currentDateResult =  date.getFullYear() + "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;

  document.querySelector('#reservation_date').value=`${currentDateResult}`; 
  document.querySelector('#reservation_date').min=`${currentDateResult}`; 
  }
  currentDate();

// Local date end




// A function responsible for selecting a specific dish name (async)

position_8.addEventListener("click", async () => {



   table_number = document.querySelector('#table_number').value = "9";


   
  

});

position_9.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "10";
});

position_10.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "11";
});


position_11.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "12";
});


position_12.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "13";
});


position_13.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "14";
});

position_14.addEventListener("click", async () => {


  table_number = document.querySelector('#table_number').value = "15";
});


position_15.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "16";
});

position_16.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "17";
});

position_17.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "18";
});

position_18.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "19";
});

position_19.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "20";
});
position_20.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "21";
});


position_21.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "22";
});

position_22.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "23";
});

let reservationsForm = document.querySelector('#reservationsForm');
let textStatus = document.querySelector('.textStatus');

reservationsForm.addEventListener('submit',  async function(e) {
e.preventDefault();
let reservationCode;

// create reservations code
reservationCode = Math.floor(Math.random() * 100);


//declaring a value from the form
let name = document.querySelector('#name').value;
let phone = document.querySelector('#phone').value;
let email = document.querySelector('#email').value;
let message = document.querySelector('#message').value;
let number_of_guests = document.querySelector('#number_of_guests').value;
let reservation_date = document.querySelector('#reservation_date').value;
let reservation_time = document.querySelector('#reservation_time').value;
let table_number = document.querySelector('#table_number').value;

let formData =  new FormData();
// adding data in the form of key-value pairs.   
formData.append('reservationsForm',reservationsForm);
formData.append('reservation_date',reservation_date);
formData.append('reservationCode',reservationCode);
formData.append('reservation_time',reservation_time);
formData.append('table_number',table_number);
formData.append('name',name);
formData.append('phone',phone);
formData.append('email',email);
formData.append('message',message);
formData.append('number_of_guests',number_of_guests);

// post value to post_reservation_email.php  file
await  fetch('../controllers/post_reservation_email.php', {
method: 'POST',
body: formData
}); 

// post value to adding_reservation.php file
await fetch('../controllers/adding_reservation.php', {
method: 'POST',
body: formData
}); 

reservationSummaryBackground.style.display = "block";
// print  status reservation
textStatus.innerHTML = `<img class="logoHPPopup" src="../public/assets/images/logoHP.webp"><br>
<div style="color:#009e20 ; font-size:20px; font-weight: 800;">    Twoja rezerwacja została przyjęta!</div>
<div style=" font-size:20px; font-weight: 800;">    Kod rezerwacji: ${reservationCode}</div>
Rezerwacja:<br>Numer stolika: ${document.querySelector('#table_number').value}<br> Data: ${reservation_date}<br> Godzina: ${reservation_time} `;

//classy reservationSummaryBackground appears after a specified time
setTimeout( () => {
reservationSummaryBackground.style.display = "none";       
},10000)            
});
