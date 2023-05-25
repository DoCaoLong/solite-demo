const inputEles = document.querySelectorAll(".wrap-input");
const usernameEle = document.getElementById("user");
const phoneEle = document.getElementById("phone");
const cccdEle = document.getElementById("cccd");

function handleSubmit() {
  console.log("ok");
  Array.from(inputEles).map((ele) => ele.classList.remove("success", "error"));
  let isValid = checkValidate();
  // handle submit
  if (isValid) {
    console.log(isValid);
    window.location.pathname = "step3-option1/step3.html";
  }
  return isValid;
}
function checkValidate() {
  let usernameValue = usernameEle.value;
  let phoneValue = phoneEle.value;
  let cccdValue = cccdEle.value;
  let isCheck = true;

  if (usernameValue == "") {
    setError(usernameEle, "Họ và tên không được để trống");
    isCheck = false;
  } else {
    setSuccess(usernameEle);
  }
  if (cccdValue == "") {
    setError(cccdEle, "Số CCCD không được để trống");
    isCheck = false;
  } else {
    setSuccess(cccdEle);
  }

  if (phoneValue == "") {
    setError(phoneEle, "Số điện thoại không được để trống");
    isCheck = false;
  } else if (!isPhone(phoneValue)) {
    phoneEle.value = "";
    setError(phoneEle, "Số điện thoại không đúng định dạng");
    isCheck = false;
  } else {
    setSuccess(phoneEle);
  }

  if (isCheck) {
    let values = {
      username: usernameValue,
      password: phoneValue,
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

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

function textName(name) {
  return /([!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])|\s/.test(name);
}
