const clock = document.body.querySelector(".clock");

const clockBlock = document.createElement("span");

clock.appendChild(clockBlock);

setInterval(
  () => (
    (clockBlock.innerText = `${String(new Date().getHours()).padStart(
      2,
      "0"
    )}:${String(new Date().getMinutes()).padStart(2, "0")}`),
    1000
  )
);
