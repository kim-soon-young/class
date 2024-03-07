window.onload = function () {
  const register = document.getElementById("register");
  register.addEventListener("submit", function (event) {
    // 입력값 검사
    let userId = document.getElementById("user-id").value;
    let email = document.getElementById("email").value;
    let userPw1 = document.getElementById("user-pw1").value;
    let userPw2 = document.getElementById("user-pw2").value;
    // 에러메시지 초기화
    document.getElementById("user-id-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("user-pw1-error").textContent = "";
    document.getElementById("user-pw2-error").textContent = "";
    // 아이디 유효성 검사
    // 아이디는 4~15자리의 영문과 숫자
    let userIdRegex = /^[a-zA-Z0-9]{4,15}$/;
    if (!userIdRegex.test(userId)) {
      document.getElementById("user-id-error").textContent =
        "아이디는 4~15자리의 영문과 숫자로 이루어져야 합니다.";
      event.preventDefault();
    }
    // 이메일 유효성 검사
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!userIdRegex.test(email)) {
      document.getElementById("email-error").textContent =
        "올바른 이메일 주소를 입력하세요.";
      event.preventDefault();
    }
    // 비밀번호 유효성 검사
    // 단순 6~18자리
    let userPw1Regex = /^[a-z0-9_-]{6,18}$/;
    // 만약 userPw1이 정규표현식과 맞지 않다면
    if (!userPw1Regex.test(userPw1)) {
      // user-pw1-error라는 요소의 텍스트 내용을 설정하여 사용자에게 오류 메시지를 보여줍니다.
      document.getElementById("user-pw1-error").textContent =
        "단순 6~18자로 넣으세요.";
      // 이벤트의 기본 동작을 막아 폼이 제출되지 않도록 합니다.
      event.preventDefault();
    }
    // 비밀번호확인 유효성 검사
    // 같지 않으면 !==
    if (userPw2 !== userPw1) {
      document.getElementById("user-pw2-error").textContent =
        "비밀번호가 틀렸습니다.";
      event.preventDefault();
    }
  });
};
