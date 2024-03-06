window.onload = function () {
  const check = document.querySelector("#shoppingInfo");
  // check에 클릭했을 때 이벤트가 발생할 때 실행 함수
  check.addEventListener("click", function () {
    // 체크박스에 체크가 되었다면
    if (check.checked == true) {
      document.querySelector("#shoppingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shoppingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shoppingAddr").value =
        document.querySelector("#billingAddr").value;
    } else {
      document.querySelector("#shoppingName").value = "";
      document.querySelector("#shoppingTel").value = "";
      document.querySelector("#shoppingAddr").value = "";
    }
  });
};
