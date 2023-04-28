let Form = document.getElementById("form");
let ticketPrice = 0;
const pricePerKilometre = 0.21;

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let age = document.getElementById("age");
  let kilometersTravelled = document.getElementById("kilometers-travelled");

  ticketPrice = pricePerKilometre * kilometersTravelled.value;

  if (age.value < 18) {

    ticketPrice = parseFloat((ticketPrice - ((ticketPrice * 20) / 100)));

  } else if (userAge.value >= 65) {

    ticketPrice =parseFloat((ticketPrice - ((ticketPrice * 40) / 100)));

  }
    console.log(username.value, age.value);

    document.getElementById("ticket-price").innerHTML = `Il prezzo del biglietto è ${ticketPrice.toFixed(2)}` + '\u20AC';
  
}
);
