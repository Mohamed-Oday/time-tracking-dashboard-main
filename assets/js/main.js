const dailybtn = document.getElementById("dailybtn");
const weeklybtn = document.getElementById("weeklybtn");
const monthlybtn = document.getElementById("monthlybtn");

const work_hours = document.getElementById("work-hours");
const play_hours = document.getElementById("play-hours");
const study_hours = document.getElementById("study-hours");
const exercise_hours = document.getElementById("exercise-hours");
const social_hours = document.getElementById("social-hours");
const selfCare_hours = document.getElementById("selfCare-hours");

const latest_work = document.getElementById("latest-work");
const latest_play = document.getElementById("latest-play");
const latest_study = document.getElementById("latest-study");
const latest_exercise = document.getElementById("latest-exercise");
const latest_social = document.getElementById("latest-social");
const latest_selfCare = document.getElementById("latest-selfCare");

dailybtn.addEventListener("click", () => {
  // Today's Hours
  work_hours.textContent = "8hrs";
  play_hours.textContent = "3hrs";
  study_hours.textContent = "1hrs";
  exercise_hours.textContent = "1hrs";
  social_hours.textContent = "2hrs";
  selfCare_hours.textContent = "1hrs";
  // Last day's hours
  latest_work.textContent = "Last Day - 9hrs";
  latest_play.textContent = "Last Day - 2hrs";
  latest_study.textContent = "Last Day - 2hrs";
  latest_exercise.textContent = "Last Day - 1hrs";
  latest_social.textContent = "Last Day - 1hrs";
  latest_selfCare.textContent = "Last Day - 1hrs";
});

weeklybtn.addEventListener("click", () => {
  // Weekly's Hours
  work_hours.textContent = "32hrs";
  play_hours.textContent = "10hrs";
  study_hours.textContent = "4hrs";
  exercise_hours.textContent = "4hrs";
  social_hours.textContent = "5hrs";
  selfCare_hours.textContent = "2hrs";
  // Last Week's hours
  latest_work.textContent = "Last Week - 36hrs";
  latest_play.textContent = "Last Week - 8hrs";
  latest_study.textContent = "Last Week - 7hrs";
  latest_exercise.textContent = "Last Week - 5hrs";
  latest_social.textContent = "Last Week - 10hrs";
  latest_selfCare.textContent = "Last Week - 2hrs";
});

monthlybtn.addEventListener("click", () => {
  // Weekly's Hours
  work_hours.textContent = "115hrs";
  play_hours.textContent = "42hrs";
  study_hours.textContent = "30hrs";
  exercise_hours.textContent = "12hrs";
  social_hours.textContent = "24hrs";
  selfCare_hours.textContent = "9hrs";
  // Last Week's hours
  latest_work.textContent = "Last Month - 235hrs";
  latest_play.textContent = "Last Month - 90hrs";
  latest_study.textContent = "Last Month - 65hrs";
  latest_exercise.textContent = "Last Month - 25hrs";
  latest_social.textContent = "Last Month - 72hrs";
  latest_selfCare.textContent = "Last Month - 19hrs";
});
