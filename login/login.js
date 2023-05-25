const inputEles = document.querySelectorAll(".wrap-input");
const usernameEle = document.getElementById("user");
const passwordEle = document.getElementById("pass");

function login() {
  console.log("ok");
  Array.from(inputEles).map((ele) => ele.classList.remove("success", "error"));
  let isValid = checkValidate();
  // handle submit
  if (isValid) {
    console.log(isValid);
    window.location.pathname = "scan-qr/scan-qr.html";
  }
  return isValid;
}
function checkValidate() {
  let usernameValue = usernameEle.value;
  let passwordValue = passwordEle.value;
  let isCheck = true;

  if (usernameValue == "") {
    setError(usernameEle, "Tên tài khoản không được để trống");
    isCheck = false;
  } else {
    setSuccess(usernameEle);
  }

  if (passwordValue == "") {
    setError(passwordEle, "Mật khẩu không được để trống");
    isCheck = false;
  } else {
    setSuccess(passwordEle);
  }

  if (isCheck) {
    let values = {
      username: usernameValue,
      password: passwordValue,
    };
    return values;
  }
}

function setSuccess(ele) {
  ele.parentNode.classList.add("success");
}

function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add("error");
  parentEle.querySelector("p").innerText = message;
}
