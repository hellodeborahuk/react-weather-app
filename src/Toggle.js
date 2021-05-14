import "./Toggle.css";

export default function Toggle(){
  const toggle = document.getElementById("toggle");
  const weatherapp = document.weatherapp;

  toggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      weatherapp.classList.add("dark-theme");
    } else {
      weatherapp.classList.remove("dark-theme");
    }
  });
};