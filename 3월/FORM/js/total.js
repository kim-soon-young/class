window.onload = function () {
  let price = 24000;
  const sideMenu = document.querySelectorAll(".checkbox");
  const total = document.querySelector("#total");
  const selectedItems = document.querySelector("#selectedItem");
  // price.toLocaleString() 숫자를 통화 형식으로 변환하는 메서드
  total.value = `합계 : ${price.toLocaleString()}원`;
  for (i = 0; i < sideMenu.length; i++) {
    // 추가메뉴 체크박스에 클릭했을 때 실행 함
    sideMenu[i].onclick = function () {
      //trim(): 문자열 앞뒤의 공백을 제거
      //  리스트 아이템을 클릭했을 때 해당 아이템의 텍스트를 얻고자 할 때 유용합니다.
      let itemName = this.parentNode.textContent.trim();
      //(this.value)을 정수로 변환한 후, 그 값을 itemPrice 변수에 할당하는 것입니다.
      let itemPrice = parseInt(this.value);
      // 체크 했을 때
      if (this.checked == true) {
        // price 에  itemPrice 더해라
        //
        price += itemPrice;
        //선택된 아이템의 이름과 가격을 포함한 HTML 요소가 설정
        selectedItems.innerHTML += `<div> ${itemName} : ${itemPrice.toLocaleString()}원 </div>`;
      } else {
        //price = price - itemPrice;
        price -= itemPrice;
        let selected = selectedItems.querySelectorAll("div");
        selected.forEach((item) => {
          if (item.textContent.includes(itemName)) {
            item.remove();
          }
        });
      }
      total.value = `합계 : ${price.toLocaleString()}원`;
    };
  }
};
