const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const loading = document.querySelector(".loading");
const countdown = document.querySelector("#countdown");
// console.log(countdown);
window.addEventListener("load", () => {
  loading.style.display = "block";
  // miiseconds
  setTimeout(() => {
    // bir kere çalışır
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000); //gif i zamanlar

  let H2Elements = document.getElementsByTagName("h2");

  [...H2Elements].forEach((element) => {
    element.innerHTML = "00";
  });
});

let selectedBirthday;
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event) => {
  console.log("dateString", event.target.value);
  //convert to date from dateString
  selectedBirthday = new Date(event.target.value);
  console.log("dateObject", selectedBirthday);
  if (selectedBirthday > new Date()) {
    alert("Doğum tarihiniz bugünden büyük olamaz!!");
    return; // şart sağlanmadığında fonk.u siler
  }
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

  loading.style.display = "block";
  setInterval(updateCountdown, 1000); // daimi çalışır
});

const updateCountdown = () => {
  let birthdayValue = new Date(birthdayInput.value);
  let now = new Date();
  let age = new Date(now - birthdayValue);

  let yearOfAge = age.getFullYear() - 1970;
  let monthOfAge = age.getMonth();
  let dayOfAge = age.getDate();
  let hourOfAge = age.getHours();
  let minuteOfAge = age.getMinutes();
  let secondOfAge = age.getSeconds();

  //Add values to DOM

  years.innerHTML = yearOfAge.toString().padStart(2, "0");
  months.innerHTML = monthOfAge.toString().padStart(2, "0");
  days.innerHTML = dayOfAge.toString().padStart(2, "0");
  hours.innerHTML = hourOfAge.toString().padStart(2, "0");
  minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
  seconds.innerHTML = secondOfAge.toString().padStart(2, "0");
};
