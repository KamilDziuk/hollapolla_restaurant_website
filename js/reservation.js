const  textStatus = document.querySelector('.textStatus');




document.querySelector('#submit').addEventListener("click", function(e)
{
const  table_number = document.querySelector('#table_number').value;
const  reservation_date = document.querySelector('#reservation_date').value;
const  reservation_time = document.querySelector('#reservation_time').value;
const  name = document.querySelector('#name').value;
const  phone = document.querySelector('#phone').value;



if(!table_number && !reservation_date && !reservation_time && !name && !phone)
{
e.preventDefault();
textStatus.innerHTML = "The fields cannot be empty";
textStatus.style.color = "red";

}

else if(!name)
   {
       e.preventDefault();
       textStatus.innerHTML = "Name field cannot be empty";
       textStatus.style.color = "red";
   }


   else if(!phone)
       {
           e.preventDefault();
           textStatus.innerHTML = "Phone field cannot be empty";
           textStatus.style.color = "red";
       }



else if(!table_number )
{
e.preventDefault();
textStatus.innerHTML = "The reservation numbe field cannot be empty";
textStatus.style.color = "red";
}
else if(!reservation_date)
{
e.preventDefault();
textStatus.innerHTML = "The reservation date field cannot be empty";
textStatus.style.color = "red";
}
else if(!reservation_time)
{
   e.preventDefault();
   textStatus.innerHTML = "The reservation time field cannot be empty";
   textStatus.style.color = "red";
}

else
{


   Email.send({
   SecureToken : '',
   To : '',
   From : '',
   Subject : `Rezerwacja stolika`,
   Body :`
   
   Rezerwacja stolika number ${table_number}  <br><br>  

   Imie: ${name}<br><br>
   Telefon: ${phone}<br><br> 
   Data: ${reservation_date}<br><br>
   Godzina: ${reservation_time}<br><br> 
   Stolik: ${table_number} <br><br>
   `
}).then( message => 
{
if(message === "OK")
{
  textStatus.style.color = "green";
  textStatus.innerHTML = "Rezerwation in send";
}
else

{
  textStatus.innerHTML = "<br><br>Failed to send the message.<br> This may be due to too many messages being sent at once.<br> Please send the message by email hollapolla66@gmail.com";
  textStatus.style.color = "red";
}
});


}

 
 

});