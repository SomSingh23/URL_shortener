function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const linkId = button.getAttribute("data-link");
    const linkText = document.getElementById(linkId).textContent;
    copyToClipboard(linkText);
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1500);
  });
});

let delayFunc = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, ms);
  });
};

let call_api = async (token) => {
  let setIntId = setInterval(()=>{
    let _link1 = document.querySelector("#link1");
  _link1.textContent = "# #"
  },500)
  await delayFunc(100);
  let setIntId2 = setInterval(()=>{
    let _link1 = document.querySelector("#link1");
  _link1.textContent = "# # # #"
  },500)
  await delayFunc(100);
  let setIntId3 = setInterval(()=>{
    let _link1 = document.querySelector("#link1");
  _link1.textContent = "# # # # # #"
  },500)
  await delayFunc(100);
  let setIntId4 = setInterval(()=>{
    let _link1 = document.querySelector("#link1");
  _link1.textContent = "# # # # # # # #"
  },500) 
  try {
    let response = await axios.get(
      `https://som-745j.onrender.com?url=${token}`
    );
   clearInterval(setIntId);
   clearInterval(setIntId2);
   clearInterval(setIntId3);
   clearInterval(setIntId4);
    const link1 = response.data.shortUrl;
    let _link1 = document.querySelector("#link1");
    _link1.textContent = "";
    _link1.textContent = `${link1}`;
  } catch (err) {
    clearInterval(setIntId);
    clearInterval(setIntId2);
    clearInterval(setIntId3);
    clearInterval(setIntId4);
    let _link1 = document.querySelector("#link1");
    _link1.textContent = "";
    _link1.textContent = "Request failed with status code 400";
  }
};
let form = document.querySelector("#btn");
form.addEventListener("click", (e) => {
  e.preventDefault();
  let inp = document.querySelector("input");
  let url_submit = inp.value;
  inp.value = "";
  call_api(url_submit);
});
