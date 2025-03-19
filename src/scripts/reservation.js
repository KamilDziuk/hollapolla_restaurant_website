let contenerReservationInfo = document.querySelector("#contenerReservationInfo");
let reservationSummaryBackground = document.querySelector(".reservationSummaryBackground");
let reservationInformation = document.querySelector(".reservationInformation");
let submit = document.querySelector("#submit");

reservationInformation.style.display = "none";

reservationSummaryBackground.style.display = "none";

// declaration of table numbers
let position_8 = document.querySelector('.position_8');
let position_9 = document.querySelector('.position_9');
let position_10 = document.querySelector('.position_10');
let position_11 = document.querySelector('.position_11');
let position_12 = document.querySelector('.position_12');
let position_13 = document.querySelector('.position_13');
let position_14 = document.querySelector('.position_14');
let position_15 = document.querySelector('.position_15');
let position_16 = document.querySelector('.position_16');
let position_17 = document.querySelector('.position_17');
let position_18 = document.querySelector('.position_18');
let position_19 = document.querySelector('.position_19');
let position_20 = document.querySelector('.position_20');
let position_21 = document.querySelector('.position_21');
let position_22 = document.querySelector('.position_22');

//setting the local date
currentDate = () =>{ 
let date = new Date();
let currentDateResult =  date.getFullYear() + "-" +
("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
document.querySelector('#reservation_date').value=`${currentDateResult}`; 
document.querySelector('#reservation_date').min=`${currentDateResult}`; 
}
currentDate();

// a function responsible for selecting a specific dish name (async)
position_8.addEventListener("click", () => {
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


// this function checks the availability of a reservation at a specific time
reservationStatus = () =>
{

setInterval( ()=>
{
let table_number = document.querySelector('#table_number').value;
let reservation_time = document.querySelector('#reservation_time').value;
let reservation_date = document.querySelector('#reservation_date').value;
let reservationStatus = `${reservation_date} ${reservation_time} ${table_number}`;

// filter selected values ​​from MySQL database
let displayReservation =  reservation.map( displayReservation => {
return `${displayReservation.reservation_date} ${displayReservation.reservation_time} ${displayReservation.table_number}`;
}).join(` `);

// check if the value entered in the form exists in the database using RegExp
let text = displayReservation;
let pattern = new RegExp(reservationStatus, "i");
let result = text.match(pattern);

// if the data entered from the form does not match the data from the database, hide the infraction and show the button
if(result === null)
{
reservationInformation.style.display = "none";
submit.style.display = "block";
}
else
{
    
// if the values ​​are equal to the database value, display information about the reserved time and hide the button
if(result.toString() === reservationStatus )
{
    
reservationInformation.style.display = "block";
submit.style.display = "none";
}
else
{
// if not then hide the information and show the button
reservationInformation.style.display = "none";
submit.style.display = "block";
}
};
},1000)
};

reservationStatus();

reservationsForm.addEventListener('submit',  async function(e) {

 setTimeout(() => { 
location.reload()
}, 10000)
 //declaring a value from the form

let name = document.querySelector('#name').value;
let phone = document.querySelector('#phone').value;
let email = document.querySelector('#email').value;
let message = document.querySelector('#message').value;
let number_of_guests = document.querySelector('#number_of_guests').value;
reservation_date = document.querySelector('#reservation_date').value;
reservation_time = document.querySelector('#reservation_time').value;
table_number = document.querySelector('#table_number').value;

e.preventDefault();
let reservationCode;

// create reservations code
reservationCode = Math.floor(Math.random() * 100);



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
formData.append('submit', submit);



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


