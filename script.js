const lightToggle = document.getElementById("lightToggle");
const roomPreview = document.getElementById("roomPreview");
const switchLabel = document.getElementById("switchLabel");

lightToggle.addEventListener("change", () => {
  const isOn = lightToggle.checked;

  roomPreview.classList.toggle("is-on", isOn);
  switchLabel.textContent = isOn ? "Lights are on" : "Turn lights on";
});
