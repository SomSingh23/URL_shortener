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

let call_api = async (token) => {
  try {
    let response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${token}`
    );
    const link1 = response.data.result.short_link;
    const link2 = response.data.result.short_link2;
    const link3 = response.data.result.short_link3;
    let main3 = document.querySelector(".main3");
    let _link1 = document.querySelector("#link1");
    let _link2 = document.querySelector("#link2");
    let _link3 = document.querySelector("#link3");
    // main3.style.border = "1px solid #4f4831";
    _link1.textContent = "";
    _link2.textContent = "";
    _link3.textContent = "";
    _link1.textContent = `${link1}`;
    _link2.textContent = `${link2}`;
    _link3.textContent = `${link3}`;
  } catch (err) {
    let _link1 = document.querySelector("#link1");
    _link1.textContent = "";
    _link1.textContent = err;
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
