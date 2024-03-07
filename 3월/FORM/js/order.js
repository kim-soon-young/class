window.onload = function () {
  var check = document.querySelector("#shippingInfo");
  // 체크박스에 변화가 있을 때 이벤트 발생
  check.addEventListener("click", function () {
    // 체크박스가 체크되어 있는지 확인
    if (check.checked == true) {
      // 주문 정보(이름)를 배송 정보(이름)에 복사
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAddr").value =
        document.querySelector("#billingAddr").value;
    } else {
      document.querySelector("#shippingName").value = "";
      document.querySelector("#shippingTel").value = "";
      document.querySelector("#shippingAddr").value = "";
    }
  });
};
