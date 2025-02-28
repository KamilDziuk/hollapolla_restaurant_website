// global objects
let contenerOrderInfo = document.querySelector("#contenerOrderInfo");
let orderSummaryBackground = document.querySelector(".orderSummaryBackground");
let codeNumber = document.querySelector(".codeNumber");
let position = document.querySelectorAll('.position');
let displayInfo = document.querySelector('.display');
let textStatus = document.querySelector('.textStatus');
let sum = document.querySelector('.sum');
let submit = document.querySelector("#submit");
submit.style.display = "none";
contenerOrderInfo.style.display = "none";
orderSummaryBackground.style.display = "none";

let OrderSystem = function(pric)
{

// sum pric
sum.innerText  =  0 ;

this.pric = pric;
this.positionClickSttus = false;
this.positionClickSttus = false;
position.forEach(position => {
let quantity = 0;
position.addEventListener("click", () => {

//initial value added or subtracted for each generated plus and minus button
let deleteValue = 0;
 quantity  ++;
position.style.display = "none";
displayInfo.style.display = "none";
contenerOrderInfo.style.display = "block";
submit.style.display = "block";
this.positionClickSttus = true;

// modification of menu text
let position_clean = position.textContent.replaceAll(/\d+/g,"").replaceAll("€","");
let id_orders = position_clean.replaceAll(" ","").toLocaleLowerCase();

//create orders text and value elment
let menuPositions =  () => {
this.positionElement = document.createElement('button');
this.positionElement.innerHTML=`${position_clean}`;
this.positionElement.value =`${position.value}`;
this.positionElement.id =`${id_orders}`;
this.positionElement.style =" width: 150px; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 20px; padding: 1%;";
if(window.matchMedia("(max-width:950px)").matches ){ 
  this.positionElement.style =" width: 100px; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; padding: 1%";
}

document.querySelector('.numbersOrderLocation').appendChild(this.positionElement);
};
menuPositions();

//create orders text and value elment
let quantityElement 
let quantityOrders = () => {
//create quantity orders button elment
quantityElement = document.createElement('button');
quantityElement.innerHTML = quantity;
quantityElement.id =`quantity${id_orders}`;
quantityElement.style =" font-size: 20px  !important;  padding: 1%; padding-top: 25%;"  ;
if(window.matchMedia("(max-width:950px)").matches ){ 
  quantityElement.style ="font-size: 16px  !important; padding: 1%; padding-top: 25%;"; 
}
document.querySelector('.quantity').appendChild(quantityElement);
};
quantityOrders();

let addButton = () => {
  //create add button elment
let addElement = document.createElement('button');
addElement.innerHTML = `+`;
addElement.value =`${position.value}`;
addElement.id = `add_pric_${id_orders}`;
addElement.style =" color:#009e20  !important; font-size: 20px; padding: 1% ;  padding-top: 25%; "; 
if(window.matchMedia("(max-width:950px)").matches ){ 
addElement.style =" color:green !important; font-size: 16px; padding: 1%;  padding-top: 25%; "; 
}
document.querySelector('.add').appendChild(addElement);

// adding  the value from the total after clicking
addElement.addEventListener('click',  () => {
  
quantity ++
quantityElement.innerHTML = quantity;
// add value to element add_pric_${id_orders} before click
if (document.querySelector(`#add_pric_${id_orders}`))deleteValue += parseInt( document.querySelector(`#add_pric_${id_orders}`).value);

this.pric >= 0  ? sum.innerText  =  this.pric += parseInt ( position.value) : sum.innerText  = 0;
});
};
addButton();

let subtractButton = () => {
//create subtract button elment
let subtractElement = document.createElement('button');
subtractElement.innerHTML = `-`;
subtractElement.id = `subtract_pric_${id_orders}`;
subtractElement.value =`${position.value}`;
subtractElement.style =" color:red  !important; font-size: 20px;  padding: 1%;  padding-top: 35%;";
if(window.matchMedia("(max-width:950px)").matches ){ 
  subtractElement.style =" color:red  !important; font-size: 16px; padding: 1%;  padding-top: 35%;"; 
  }
document.querySelector('.subtract').appendChild(subtractElement);

// subtracting the value from the total after clicking
subtractElement.addEventListener('click', () => {

  //subtract quantity
  --quantity
  
  quantityElement.innerHTML = quantity;
  
  // interval intoxicating condition
  let activRemoveOrders = setInterval(() => {
  if(deleteValue <= 0 )
  {
  
  // remove object
  if (document.querySelector(`#quantity${id_orders}`)) document.querySelector(`#quantity${id_orders}`).remove();
  if (document.querySelector(`#${id_orders}`)) document.querySelector(`#${id_orders}`).remove();
  if (document.querySelector(`#subtract_pric_${id_orders}`)) document.querySelector(`#subtract_pric_${id_orders}`).remove();
  if (document.querySelector(`#add_pric_${id_orders}`)) document.querySelector(`#add_pric_${id_orders}`).remove();
  
  position_clean ="Zamówienie usunięte przez klienta";
  position.style.display = "block";
  
  clearInterval(activRemoveOrders);
  }  
  
  // hiding the order window
  if(sum.innerText  <= 0 )
  {
  position.style.display = "block";
  displayInfo.style.display = "block";
  if (submit) submit.style.display = "none";
  if (contenerOrderInfo) contenerOrderInfo.style.display = "none";
  if (orderSummaryBackground) orderSummaryBackground.style.display = "none";
  clearInterval(activRemoveOrders);
  }
  },100)
  
  this.pric <= 0 ? sum.innerText  = 0 :sum.innerText  = this.pric -= parseInt(position.value);
  
  // subtract value to element add_pric_${id_orders} before click 
  if (document.querySelector(`#add_pric_${id_orders}`)) deleteValue -= parseInt( document.querySelector(`#add_pric_${id_orders}`).value );
  
  });
  };
  
  subtractButton();

  
let addBoxOrders = () => {

  //create add boxOrders element
  let boxOrdersElement = document.createElement('div');
  boxOrdersElement.style =" position: relative; display: flex; width:100%; ";
  boxOrdersElement.className =`box_orders_${id_orders}`;
  document.querySelector('.boxOrders').appendChild(boxOrdersElement);
  };
  
  addBoxOrders();
    
  // add value pric to sum element before click
  this.pric >= 0  ? sum.innerText  =  this.pric +=  parseInt( position.value)  : sum.innerText  = 0 ;
  
  // add value to element add_pric_${id_orders} before click
  if (document.querySelector(`#add_pric_${id_orders}`)) deleteValue += parseInt( document.querySelector(`#add_pric_${id_orders}`).value);
  
  // getting the current date
  let date = new Date();
  let currentDateResult =  date.getFullYear() + "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
   function addZero(i) {
   if (i < 10) {i = "0" + i}
  return i;
  }
  
  let h = addZero(date.getHours());
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());
  let fullTime = h + ":" + m + ":" + s;
  let order_date = currentDateResult;
  let order_time = fullTime;
  
  // order confirmation values
  let  orderConfirmation = () => {
  
  // generating an order code
  
  // order value counter, if it is equal to 0 the change will be deleted
  this.orderCodeValue = Math.floor(Math.random() * 100);
  // generating an order code
  
  //after clicking, a popup with the values ​​from the form is displayed
  submit.addEventListener('click',   async() => {
  orderSummaryBackground.style.display = "block";
  let first_name = document.querySelector("#first_name").value;
  let email = document.querySelector("#email").value;
  let addres = document.querySelector("#addres").value;
  let message = document.querySelector("#message").value;  
  
  // information about order acceptance
  textStatus.innerHTML = `
  <img class="logoHPPopup" src="../public/assets/images/logoHP.webp"><br>
  <div style="color:#009e20 ; font-size:20px; font-weight: 800;">Dziękujemy! Twoje zamówienie zostało przyjęte</div><div style=" font-size:20px; font-weight: 800;"> Kod zamówienia:
  ${ this.orderCodeValue}</div>
  Imię: ${first_name}<br>
  E-mail: ${email}<br>
  Adres: ${addres}<br>
  Wiadomość: ${message}<br>
  Data: ${currentDateResult}<br>
  Godzina: ${fullTime}<br>
  <div style=" font-size:20px; font-weight: 800;">Suma: € ${this.pric}</div>`;
  postOrders(first_name, email, addres, message );
  
  });

// displaying information about the status and data entered in the form
let displayingInformation = () => {    

  // show popup for a specific time
  setTimeout( () => {
  orderSummaryBackground.style.display = "none";
  },10000)    
  }   
  displayingInformation();     
  
  };
  orderConfirmation();
  
  // order confirmation values
  let postOrders = async (first_name, email, addres, message) => 
  {









 async   function handlePositionClick(orderNumber) {


position[orderNumber -1].style.display = "none";
clearInterval(orderCounter);

contenerOrderInfo.style.display = "block";

const positionElement = document.createElement('div');



const quantityElement = document.createElement('div');


positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value=" ${orderNumber}">`;

quantityElement.innerHTML = ` <input type="number" id="quantity${orderNumber}"  value="1">`;
if(orderNumber == 20)
{
  positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="20A">`;
}
if(orderNumber == 21)
  {
    positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="20B">`;
  }

  if(orderNumber == 22)
    {
      positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="20C">`;
    }
    if(orderNumber == 23)
      {
        positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="21">`;
      }
      if(orderNumber == 24)
        {
          positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="22">`;
        }
        if(orderNumber == 25)
          {
            positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="23">`;
          }

          if(orderNumber == 26)
            {
              positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="24">`;
            }
            if(orderNumber == 27)
              {
                positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="25">`;
              }
              if(orderNumber == 28)
                {
                  positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="26">`;
                }
        
                if(orderNumber == 29)
                  {
                    positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="27A">`;
                  }
                          
                if(orderNumber == 30)
                  {
                    positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="27B">`;
                  }
                          
                if(orderNumber == 31)
                  {
                    positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="27C">`;
                  }
  
                  if(orderNumber == 32)
                    {
                      positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="28A">`;
                    }
                    if(orderNumber == 33)
                      {
                        positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="28B">`;
                      }

                      if(orderNumber == 34)
                        {
                          positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="29">`;
                        }

                        if(orderNumber == 35)
                          {
                            positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="30">`;
                          }
                          if(orderNumber == 36)
                            {
                              positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="31">`;
                            }


                            if(orderNumber == 37)
                              {
                                positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="32">`;
                              }

                              
                            if(orderNumber == 38)
                              {
                                positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="33">`;
                              }

                              if(orderNumber == 39)
                                {
                                  positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="34">`;
                                }


                                if(orderNumber == 40)
                                  {
                                    positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="35">`;
                                  }

                                  if(orderNumber == 41)
                                    {
                                      positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="36">`;
                                    }
  
                                    if(orderNumber == 42)
                                      {
                                        positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="37">`;
                                      }

                                      if(orderNumber == 43)
                                        {
                                          positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="38">`;
                                        }
                                        if(orderNumber == 44)
                                          {
                                            positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="39">`;
                                          }
                                          if(orderNumber == 45)
                                            {
                                              positionElement.innerHTML = ` <input type="text" id="numbersOrder${orderNumber}" name="numbersOrder" placeholder="Numbers order" value="40">`;
                                            }
  


document.querySelector('.numbersOrderLocation').appendChild(positionElement);
document.querySelector('.quantityLocation').appendChild(quantityElement);



let date = new Date();
  
let currentDateResult =  date.getFullYear() + "-" +
("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}




let h = addZero(date.getHours());
let m = addZero(date.getMinutes());
let s = addZero(date.getSeconds());
let fullTime = h + ":" + m + ":" + s;
document.querySelector('#submit').addEventListener('click',  () => {

let order_date = currentDateResult;
let order_time = fullTime;
let first_name = document.querySelector("#first_name").value;
let email = document.querySelector("#email").value;
let addres = document.querySelector("#addres").value;
let message = document.querySelector("#message").value;


let numbersOrder = document.querySelector(`#numbersOrder${orderNumber}`).value;
let quantity = document.querySelector(`#quantity${orderNumber}`).value;
textStatus.innerHTML = `
 First Name: ${first_name}<br>
 Email: ${email}<br>
Addres: ${addres}<br>
Date:   ${currentDateResult}<br>
Time: ${fullTime}<br>`;


let formData = new FormData();


formData.append('codeNumber',orderCodeValue);
 formData.append('orderNumber',numbersOrder);


    formData.append('quantity', quantity);

formData.append('first_name',first_name);
  formData.append('message',message);
formData.append('email',email);
formData.append('addres',addres);
formData.append('order_date',order_date);
formData.append('order_time',order_time);

    fetch("../controllers/adding_orders.php",{

  method: "POST",
  body: formData
})
})

}








 

  
acceptContent = () => {
document.querySelectorAll('.position').forEach( (position, index) => {


  
  document.querySelector('#submit').addEventListener('click',  () => {
 

      if(positionClickSttus === true || displayInfo.innerHTML === !"To send an order, click on the name of the dish on the menu or enter the dish number in the message.")
        {

  clearInterval(orderCounter);


  orderSummaryBackground.style.display = "block";

  codeNumber.innerHTML = ` Your order has been accepted!<br>Order code: ${ orderCodeValue }`;


  setTimeout( () => {
  orderSummaryBackground.style.display = "none";
  textStatus.style.display = "none";
  codeNumber.style.display = "none";
  },10000)

                // } else {
                //   orderSummaryBackground.style.display = "block";
                //     textStatus.innerHTML = 'Failed to send the message. This may be due to too many messages being sent at once. Please send your message via rezerwacjehollapolla@gmail.com ';
                //     textStatus.style.color = 'red';
                //     codeNumber.style.display = "none";
                //     setTimeout( () => {
                //       orderSummaryBackground.style.display = "none";
                //       textStatus.style.display = "none";
                //       codeNumber.style.display = "none";
                     
                //     },10000)
                
              }
              else
              {
                displayInfo.style.display = "black";
              }              
  })



  position.addEventListener("click",  ()  => 
    {

      displayInfo.style.display = "none";
        handlePositionClick(   index +1 );

  
       

   return   positionClickSttus = true;


   
    })
});
}

acceptContent();


  
//   if(positionClickSttus === false)
//     {
//       displayInfo.style.display = "block";
//     }

