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



