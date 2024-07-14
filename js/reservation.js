  


document.querySelector('#reservationForm').addEventListener('submit', function(e)
{
e.preventDefault();

const name = document.querySelector('#name').value;
const phone = document.querySelector('#phone').value;
const table_number = document.querySelector('#table_number').value;
const number_of_guests = document.querySelector('#number_of_guests').value;
const reservation_date = document.querySelector('#reservation_date').value;
const reservation_time = document.querySelector('#reservation_time').value;
const message = document.querySelector('#message').value;
const textStatus = document.querySelector('.textStatus');
if( name && phone && table_number && number_of_guests  &&  reservation_date && reservation_time )
{

  const formData = new FormData();

  formData.append('name',name);
  formData.append('phone',phone);
  formData.append('table_number',table_number);
  formData.append('number_of_guests',number_of_guests);
  formData.append('reservation_date',reservation_date);
  formData.append('reservation_time',reservation_time);
  formData.append('message',message);



  fetch('orderConfiguration.php', {

    method: 'POST',
    body:formData
}).then(response => response.text())
.then(data => 
{
if(!data.includes('This date is already booked'))
{
  Email.send({
    SecureToken: '',
    To: '',
    From: '',
    Subject: 'Rezerwacja stolika',
    Body: `
      Rezerwacja stolika number ${table_number}  <br><br>
      Imie: ${name}<br><br>
      Telefon: ${phone}<br><br>
      Stolik: ${table_number} <br><br>
      Liczba osób:  ${number_of_guests} <br><br>
      Data: ${reservation_date}<br><br>
      Godzina: ${reservation_time}<br><br>
      Widomość od klienta: ${message}<br><br>
    `
  }).then(message =>
  {
    if(message == 'OK')
    {
        textStatus.innerHTML =  'Reservations have been sent';
        textStatus.style.color = 'greenyellow'; 
}
else
{
  textStatus.innerHTML =  '<br><br>Failed to send the message.<br> This may be due to too many messages being sent at once.<br> Please send your message via hollapolla66@gmail.com <br><br>';
  textStatus.style.color = 'red'; 
}
  })
}
 else if (data.includes('This date is already booked'))
{
    textStatus.innerHTML =  'This date is already booked';
    textStatus.style.color = 'red';
}


})

}
else if (!name || !phone || !table_number || !number_of_guests || !reservation_date || !reservation_time)
{
  textStatus.innerHTML =  'Fields Last name, phone, number table, number of guests, date, time  must be completed';
  textStatus.style.color = ' #e7df01';
}

});