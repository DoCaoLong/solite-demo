let number = 0;
let isPercentage = true;
let congratulationWheel = document.querySelector(".congratulation");
let btnScreen = document.querySelector(".btnScreen");
// upload file img
function upload() {
  const fileEle = document.getElementById("image");
  let loadingEle = document.querySelector(".loading");
  let value = $("input[type='file']").val();
  $(".js-value").text(value);
  let fileValue = fileEle.value;
  // loading true
  loadingEle.style.display = "block";
  // value upload img
  console.log(fileValue);
}

// close wheel
function back() {
  congratulationWheel.style.display = "none";
  let valueInput = document.querySelectorAll("#image");
  if (valueInput) {
    valueInput.forEach((item) => {
      item.value = "";
    });
    $(".js-value").text("Vui lòng hoàn thành bước chụp ảnh");
  }
}
function back_error() {
  congratulationWheel.style.display = "none";
}

// logic wheel
let prizes = [
  {
    text: "locklock2",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "bag",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "minion",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "cake",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "cake2",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "locklock",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "bag2",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
  {
    text: "cake3",
    img: "",
    number: 1,
    percentpage: 0.1, // 10%
  },
];
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var sound = new Audio("../sound/clap.mp3"); // Thay đổi đường dẫn âm thanh tại đây

    hcLuckywheel.init({
      id: "luckywheel",
      config: function (callback) {
        callback && callback(prizes);
      },
      mode: "both", // "text", "image" or "both"

      // get gift run wheel
      getPrize: function (callback) {
        var rand = randomIndex(prizes);
        var chances = rand;
        callback && callback([rand, chances]);
      },

      // gọi khi kết thúc vòng quay và chọn quà tương ứng
      gotBack: function (data) {
        var prizeElement;
        if (data == null) {
          prizeElement = $("#congratulation-9");
        } else {
          sound.play();
          if (data == "minion") {
            prizeElement = $("#congratulation-3");
          } else if (data == "locklock") {
            prizeElement = $("#congratulation-1");
          } else if (data == "bag") {
            prizeElement = $("#congratulation-2");
          } else if (data == "cake") {
            prizeElement = $("#congratulation-4");
          } else if (data == "cake2") {
            prizeElement = $("#congratulation-5");
          } else if (data == "cake3") {
            prizeElement = $("#congratulation-8");
          } else if (data == "locklock2") {
            prizeElement = $("#congratulation-6");
          } else if (data == "bag2") {
            prizeElement = $("#congratulation-7");
          } else {
          }
        }
        // 0.5s hiện popup
        setTimeout(function () {
          $("#congratulation__result").html(prizeElement.html());
          $(".congratulation").show();
        }, 300);
      },
    });
  },
  false
);

// chọn một giải thưởng ngẫu nhiên từ mảng prizes dựa trên các phần trăm xuất hiện và số lượng giải thưởng còn lại. Nếu isPercentage là true, hàm sẽ tính toán phần trăm xuất hiện để chọn giải thưởng. Ngược lại, nếu isPercentage là false, hàm sẽ chọn ngẫu nhiên một giải thưởng dựa trên chỉ số.
function randomIndex(prizes) {
  if (isPercentage) {
    var counter = 1;
    for (let i = 0; i < prizes.length; i++) {
      if (prizes[i].number == 0) {
        counter++;
      }
    }
    if (counter == prizes.length) {
      return null;
    }
    let rand = Math.random();
    let prizeIndex = 1;
    // console.log(rand);
    switch (true) {
      case rand < prizes[7].percentpage:
        prizeIndex = 7;
        break;
      case rand < prizes[7].percentpage + prizes[6].percentpage:
        prizeIndex = 6;
        break;
      case rand <
        prizes[7].percentpage + prizes[6].percentpage + prizes[5].percentpage:
        prizeIndex = 5;
        break;
      case rand <
        prizes[7].percentpage +
          prizes[6].percentpage +
          prizes[5].percentpage +
          prizes[4].percentpage:
        prizeIndex = 4;
        break;
      case rand <
        prizes[7].percentpage +
          prizes[6].percentpage +
          prizes[5].percentpage +
          prizes[4].percentpage +
          prizes[3].percentpage:
        prizeIndex = 3;
        break;
      case rand <
        prizes[7].percentpage +
          prizes[6].percentpage +
          prizes[5].percentpage +
          prizes[4].percentpage +
          prizes[3].percentpage +
          prizes[2].percentpage:
        prizeIndex = 2;
        break;
      case rand <
        prizes[7].percentpage +
          prizes[6].percentpage +
          prizes[5].percentpage +
          prizes[4].percentpage +
          prizes[3].percentpage +
          prizes[2].percentpage +
          prizes[1].percentpage:
        prizeIndex = 1;
        break;
      case rand <
        prizes[7].percentpage +
          prizes[6].percentpage +
          prizes[5].percentpage +
          prizes[4].percentpage +
          prizes[3].percentpage +
          prizes[2].percentpage +
          prizes[1].percentpage +
          prizes[0].percentpage:
        prizeIndex = 0;
        break;
    }
    if (prizes[prizeIndex].number != 0) {
      prizes[prizeIndex].number = prizes[prizeIndex].number - 1;
      return prizeIndex;
    } else {
      return randomIndex(prizes);
    }
  } else {
    var counter = 0;
    for (let i = 0; i < prizes.length; i++) {
      if (prizes[i].number == 0) {
        counter++;
      }
    }
    if (counter == prizes.length) {
      return null;
    }
    var rand = (Math.random() * prizes.length) >>> 0;
    if (prizes[rand].number != 0) {
      prizes[rand].number = prizes[rand].number - 1;
      return rand;
    } else {
      return randomIndex(prizes);
    }
  }
}
