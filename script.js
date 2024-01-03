const captcha = document.getElementById("captcha");
const input = document.getElementById("input");
const subbtn = document.getElementById("subbtn");
const refbtn = document.getElementById("refbtn");

function randomCaptcha() {
  let chrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let random1 = chrs[Math.floor(Math.random() * chrs.length)];
  let random2 = chrs[Math.floor(Math.random() * chrs.length)];
  let random3 = chrs[Math.floor(Math.random() * chrs.length)];
  let random4 = chrs[Math.floor(Math.random() * chrs.length)];
  let random5 = chrs[Math.floor(Math.random() * chrs.length)];
  let random6 = chrs[Math.floor(Math.random() * chrs.length)];
  // console.log(random1);
  const random = random1 + random2 + random3 + random4 + random5 + random6;
  captcha.innerHTML = random;
}
// randomCaptcha();

subbtn.addEventListener("click", () => {
  if (input.value === captcha.innerHTML) {
    subbtn;
    input.value = "";
    alert("Submited successfully");
  } else {
    alert("invalid capatch");
  }
  console.log("hii");
});

refbtn.addEventListener("click", () => {
  if (refbtn) {
    randomCaptcha();
  }
});
