window.onload = function () {
  const btn = document.getElementById("btn");
  let addValue = document.getElementById("addValue");
  let result = document.getElementById("result");
  // 할일 추가하기
  function addTodo() {
    if (addValue.value == false) {
      alert("내용을 입력하세요.");
    } else {
      let list = document.createElement("li");
      let del = document.createElement("button");
      list.innerHTML = addValue.value;
      result.appendChild(list);
      list.appendChild(del);
      del.innerText = "X";
      del.style.fontSize = "20px";
      del.style.border = "none";
      del.style.float = "right";
      del.style.right = "17px";
      del.style.marginTop = "10px";
      del.style.cursor = "pointer";
      del.addEventListener("click", deleteList);
      //   추가하고 텍스트 필드에 빈배열로 만들기
      addValue.value = "";
      addValue.focus();
      list.addEventListener("click", function () {
        list.style.textDecoration = "line-through";
        list.style.color = "red";
      });
    }
  }
  btn.addEventListener("click", function () {
    addTodo();
  });
  function deleteList(e) {
    let removeOne = e.target.parentElement;
    removeOne.remove();
  }

  //   엔터키 감지 이벤트 추가
  document
    .querySelector(".inputField")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault(); //기본 동작 방지
        addTodo(); // 엔터 키가 눌리면 addTodo() 함수를 호출하여 할 일 목록 추가
      }
    });
  // 할일 목록 삭제하기
  // 전체 삭제 하기
  document
    .querySelector("#allclear")
    .addEventListener("click", function allClearList() {
      // 확인을 눌렀으면
      if (confirm("정말 삭제하시겠습니까?") == true) {
        if (result.innerHTML == "") {
          alert("삭제할 목록이 없습니다.");
        } else {
          result.innerText = ""; //전체 삭제
        }
      } else {
        return false; // 삭제 취소
      }
    });
};
