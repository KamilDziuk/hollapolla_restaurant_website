
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>HollaPolla - Reservations</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="../styles/reservation.css">
<link rel="stylesheet" type="text/css" href="../styles/style.css">
<link rel="icon" type="image/png" href="assets/images/browserpictogram.png">
<link rel="apple-touch-icon" href="assets/images/icon-96x96.png">
<link rel="apple-touch-icon" sizes="152x152" href="assets/images/icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="assets/images/icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/icon-180x180.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<!-- gtranslate start -->
<div class="gtranslate_wrapper"></div>
<script>window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"languages":["en","pl","nl","fr"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","float_switcher_open_direction":"right"}</script>
<script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
   

<div class="nav_headar">
<div class="container">

<nav class="navbar">
<a href="https://hollapolla.nl/" class="nav-logo"><img    class="logoHP"  src="assets/images/logoHP.webp">  </a>
<ul class="nav-menu">

<li class="nav-item">
<a  href="https://hollapolla.nl/"  class="nav-link" >Menu</a>     
</li>

<li class="nav-item">
<a href="reservation.html" class="nav-link" id="openReservation"   style="color:#be8040" >Rezerwacjie stolika</a>        
</li>

<li class="nav-item">
<a class="nav-link" > hollapolla66@gmail.com</a>        
</li>

<li class="nav-item">
<a class="nav-link">  + 31 6 58723606</a>        
</li>

<li class="nav-item">
<a href="https://www.facebook.com/profile.php?id=61555700734528 " class="fa fa-facebook"></a>
<a href="https://www.instagram.com/hollapolla66/?utm_source=qr&igsh=MXFzdG11cWE0OXhvNg%3D%3D" class="fa fa-instagram"></a>
</li>

</ul>
<div class="hamburger">
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>   
   
</div>
</nav>
</div>
</div>
<div class="reservationSummaryBackground">
<div class="reservationSummary"> <div class="textStatus"> </div>
</div>  
</div>
<form id="reservationsForm">
<div class="information">Rezerwacje dla więcej niż 4 osób podlegają dopłacie w wysokości 5 € za osobę.</div>
<input type="text" id="name" name="name" placeholder="Nazwisko" required>
<input type="email" id="email" name="email" placeholder="Email"  required>
<input type="number" id="phone" name="phone" placeholder=" Telefon" >
<input  type="number" id="number_of_guests" name="number_of_guests" placeholder="Liczba gości"  required>
<div class="information">Możesz wybrać stolik, klikając na numer stolika na układzie <b>restauracji</b> po lewej stronie. Numery stolików wahają się od <b>9</b> do <b>23</b>.</div>
<input type="number" id="table_number" name="table_number" placeholder="9" min="9" max="23" required >
<input type="date" id="reservation_date" name="reservation_date" max="2026-10-31" required >
<input type="time" id="reservation_time" name="reservation_time" value="09:00" required>
<div id="contenerReservationInfo">
</div>
<textarea    rows="4" cols="50"  id="message" name="message" placeholder=" Wiadomość"></textarea>
<input type="submit" id="submit" value="Wyślij">
<div class="information" style="color: #be8040; top: 14px;">Akceptuj zasady wysyłania</div>
<label class="containerCheck">Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu i zakresie niezbędnym do realizacji zgłoszenia.
<input type="checkbox" name="checkbox" required >
<span class="checkmark"></span>
</label>
<label class="containerCheck">Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu przesyłania mi drogą elektroniczną ofert handlowych własnych produktów firmy.
<input type="checkbox" name="checkbox" required>
<span class="checkmark"></span>
</label>
<label class="containerCheck"> Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu kontaktu telefonicznego przedstawicieli firmy w sprawach związanych z ofertą handlową własnych produktów.
<input type="checkbox" name="checkbox" required>
<span class="checkmark"></span>
</label>
</div> 
</form>

<div id="contenerImage">

<svg  id="imageReservationsSvg0" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1075.000000pt" height="2245.000000pt" viewBox="0 0 1075.000000 2245.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,2245.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path class="position_21"  d="M2932 21021 c-29 -10 -70 -32 -90 -48 -61 -50 -72 -78 -76 -197 -4
-123 -7 -118 110 -177 99 -50 154 -52 241 -9 47 23 64 38 73 63 6 17 20 51 31
75 38 85 18 181 -52 241 -73 62 -156 81 -237 52z"/>
<path class="position_22"  d="M728 21015 c-66 -14 -136 -58 -149 -93 -5 -13 -11 -82 -13 -153 l-3
-129 26 -6 c14 -3 57 -21 95 -40 105 -53 173 -46 288 27 65 42 83 108 64 239
-7 49 -14 61 -60 106 -69 67 -121 77 -248 49z"/>
<path class="position_18"  d="M8478 20738 c-50 -13 -121 -78 -148 -134 -29 -59 -22 -133 21 -220
28 -59 33 -63 90 -84 160 -60 303 4 340 153 46 185 -114 335 -303 285z"/>
<path class="position_19"  d="M2920 19367 c-25 -7 -63 -25 -85 -40 -22 -15 -45 -27 -52 -27 -19 0
-30 -29 -38 -105 -13 -122 -4 -215 20 -215 7 0 41 -17 75 -37 101 -60 190 -57
290 10 96 64 114 96 113 203 -1 107 -16 127 -126 176 -100 44 -138 51 -197 35z"/>
<path class="position_20"  d="M709 19346 c-20 -8 -55 -26 -77 -40 -36 -22 -44 -35 -62 -92 -23 -76
-24 -97 -9 -162 27 -110 159 -187 279 -161 57 12 164 86 176 122 7 19 7 179 1
262 -2 27 -5 30 -37 31 -19 0 -54 11 -77 23 -53 28 -144 36 -194 17z"/>
<path class="position_17" d="M8009 16685 c-31 -10 -61 -31 -96 -68 -45 -48 -51 -58 -57 -114 -10
-93 7 -148 68 -209 58 -57 118 -80 191 -72 53 6 165 61 200 98 25 27 25 27 17
141 l-9 113 -49 43 c-26 23 -63 50 -82 59 -47 22 -129 26 -183 9z"/>
<path class="position_16"  d="M4207 14709 c-44 -10 -152 -82 -162 -107 -3 -9 -9 -50 -12 -92 -5
-64 -2 -83 17 -128 43 -99 148 -155 251 -133 139 30 203 112 200 257 -1 36 -9
81 -20 106 -16 39 -25 46 -83 70 -76 31 -139 40 -191 27z"/>
<path class="position_15"  d="M8625 13644 c-22 -8 -58 -32 -80 -53 -22 -21 -50 -44 -63 -51 -17 -8
-21 -16 -16 -28 4 -9 8 -45 9 -79 2 -85 42 -165 101 -203 102 -64 181 -62 282
7 93 64 120 152 82 267 -25 73 -50 99 -130 135 -53 24 -127 26 -185 5z"/>
<path class="position_14"  d="M8862 10668 c-111 -20 -199 -155 -172 -261 17 -61 56 -124 82 -131
13 -3 39 -6 59 -6 20 0 62 -12 93 -26 72 -33 101 -27 167 34 62 57 73 100 63
240 -5 74 -10 95 -23 98 -9 3 -43 18 -77 35 -65 31 -99 34 -192 17z"/>
<path class="position_12"  d="M7437 8544 c-72 -23 -132 -88 -147 -161 -21 -98 1 -171 73 -241 33
-33 54 -44 97 -52 166 -32 295 73 293 240 -1 82 -6 94 -70 165 l-52 58 -73 3
c-47 3 -90 -2 -121 -12z"/>
<path class="position_13"  d="M7438 7774 c-67 -21 -122 -76 -142 -143 -19 -64 -20 -92 -5 -144 27
-98 137 -211 183 -189 12 6 55 16 96 22 41 7 80 15 87 17 20 8 83 120 94 170
17 73 -8 151 -69 215 -65 68 -141 84 -244 52z"/>
<path class="position_11"  d="M7685 4241 c-3 -6 -31 -10 -63 -9 -121 1 -219 -78 -241 -196 -12 -63
2 -119 47 -187 32 -50 42 -59 90 -74 30 -9 73 -17 97 -17 55 0 134 35 173 75
79 81 82 226 7 315 -17 20 -40 52 -50 70 -19 31 -48 42 -60 23z"/>
<path  class="position_9" d="M2660 4021 c-63 -20 -131 -74 -158 -127 -18 -34 -25 -117 -13 -159
18 -69 66 -134 114 -154 72 -31 125 -34 199 -11 78 24 121 56 150 113 17 34
20 53 15 108 -7 82 -22 112 -80 166 -64 59 -157 85 -227 64z"/>
<path class="position_10"  d="M9635 2153 c-55 -11 -91 -29 -127 -61 -95 -86 -107 -198 -36 -318 28
-46 39 -56 90 -75 79 -29 145 -28 211 5 80 40 128 121 126 215 -1 63 -17 101
-68 166 -32 40 -52 56 -75 59 -64 10 -102 12 -121 9z"/>
<path  class="position_8" d="M2630 1448 c-59 -20 -126 -94 -145 -160 -63 -219 187 -392 368 -254
176 134 94 410 -126 422 -34 2 -78 -2 -97 -8z"/>
</g>
</svg>

<img id="imageReservations0" src="assets/images/mapTable.webp">

</div>

<!-- email  connect start -->
<script src="https://smtpjs.com/v3/smtp.js"></script>

<script src="../scripts/reservation.js" defer></script>
<script src="../scripts/script.js" defer></script>
</body>
</html>
