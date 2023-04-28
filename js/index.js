let Form = document.getElementById("form");
let ticketPrice = 0;
let offertTipe = "Tariffa base";
const pricePerKilometre = 0.21;

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  onclick = document.getElementById("ticket-info").style.display = "block";

  let username = document.getElementById("username");

  let age = document.getElementById("age");

  let kilometersTravelled = document.getElementById("kilometers-travelled");

  ticketPrice = pricePerKilometre * kilometersTravelled.value;

  if (age.value < 18) {

    ticketPrice = parseFloat((ticketPrice - ((ticketPrice * 20) / 100)));
    offertTipe = "Sconto minori"

  } else if (age.value >= 65) {

    ticketPrice =parseFloat((ticketPrice - ((ticketPrice * 40) / 100)));
    offertTipe = "Sconto over 65"

  } else {
    offertTipe = "Tariffa base"
  }
    console.log(username.value, age.value);

    document.getElementById("name-surname").innerHTML = username.value;

    document.getElementById("offert-tipe").innerHTML = offertTipe;


    document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + '\u20AC';
  
}
);
