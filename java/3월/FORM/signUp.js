window.onload = function () {
  let userId = document.querySelector("#user-id");
  let pw1 = document.querySelector("#user-pw1");
  let pw2 = document.querySelector("#user-pw2");
  userId.onchange = checkId;
  pw1.onchange = checkPw;
  pw2.onchange = comparePw;

  function checkId() {
    // 4조건이 사용자가 입력한 값이 4보다 작거나 15보다 크면
    if (userId.value.length < 4 || userId.value.length > 15) {
      // 오류 메세지 출력 (유효성검사)
      alert("4~15자리의 영문과 숫자를 사용하세요.");
      userId.select();
    }
  }
  // 비밀번호
  function checkPw() {
    if (pw1.Value.length < 8) {
      // 오류 메세지 출력 (유효성검사)
      alert("비밀번호는 8자리 이상이어야 합니다.");
      pw1.Value = "";
      pw1.focus();
    }
  }
  // 비밀번호 확인
  function comparePw() {
    if (pw1.Value != pw2.value) {
      alert("비밀번호가 다릅니다. 다시 입력하세요.");
      pw2.focus();
    }
  }
};
