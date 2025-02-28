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

