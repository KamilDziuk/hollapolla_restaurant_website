let contenerOrderInfo = document.querySelector("#contenerOrderInfo");
let orderSummaryBackground = document.querySelector(".orderSummaryBackground");
let codeNumber = document.querySelector(".codeNumber");
let position = document.querySelectorAll('.position');

let positionClickSttus = false;








let displayInfo = document.querySelector('.display');

let orderCodeValue;
const textStatus = document.querySelector('.textStatus');

contenerOrderInfo.style.display = "none";
orderSummaryBackground.style.display = "none";





 let orderCounter = setInterval(() => {
orderCodeValue = Math.floor(Math.random() * 100);
},1000);









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

