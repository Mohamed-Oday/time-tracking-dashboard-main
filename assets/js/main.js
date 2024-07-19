let info = [];

fetch("assets/js/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    info = data;
    console.log("Data fetched successfully:", info); // Debugging log
    getWeekly();
  })
  .catch((error) => {
    console.error("Error fetching the JSON data: ", error);
  });

const hours = document.querySelectorAll("#hours");
const recent = document.querySelectorAll("#latesthrs");
const dailyBtn = document.querySelector("#dailybtn");
const weeklyBtn = document.querySelector("#weeklybtn");
const monthlyBtn = document.querySelector("#monthlybtn");

function getDaily() {
  dailyBtn.classList.add("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");

  hours.forEach((hours, i) => {
    hours.innerHTML = `${info[i].timeframes.daily.current}hrs`;
  });

  recent.forEach((latesthrs, i) => {
    latesthrs.innerHTML = `Last day - ${info[i].timeframes.daily.previous}hrs`;
  });
}

function getWeekly(){
  dailyBtn.classList.remove("active")
  weeklyBtn.classList.add("active")
  monthlyBtn.classList.remove("active")

  hours.forEach((hours, i) =>{
    hours.innerHTML = `${info[i].timeframes.weekly.current}hrs`;
  })

  recent.forEach((latesthrs, i) => {
    latesthrs.innerHTML = `Last Week - ${info[i].timeframes.weekly.previous}hrs`;
  });
}

function getMonthly(){
  dailyBtn.classList.remove("active")
  weeklyBtn.classList.remove("active")
  monthlyBtn.classList.add("active")

  hours.forEach((hours, i) =>{
    hours.innerHTML = `${info[i].timeframes.monthly.current}hrs`;
  })

  recent.forEach((latesthrs, i) => {
    latesthrs.innerHTML = `Last Week - ${info[i].timeframes.monthly.previous}hrs`;
  });
}
