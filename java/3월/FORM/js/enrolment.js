window.onload = function () {
  // 제출버튼을 눌렀을 때 확인 함수
  const showConfirmation = document.getElementById("showConfirmation");
  showConfirmation.addEventListener("click", function () {
    const form = document.getElementById("testForm");
    // 메세지 확인하는 변수
    const confirmation = document.getElementById("confirmation");
    // 입려된 폼 데이터 가져오기
    const userName = form.userName.value;
    const major = form.major.value;
    const subject = form.subject.value;
    const mailing1 = form.mailing1.checked;
    const mailing2 = form.mailing2.checked;
    const mailing3 = form.mailing3.checked;
    // 확인 메세지 생성
    const confirmationMessage = `        
    <h2>수강신청 내용 확인</h2>
    <p><strong>이름 : </strong> ${userName}</p>
    <p><strong>학과 : </strong> ${major}</p>
    <p><strong>과목 : </strong> ${subject}</p>
    <p><strong>메일 : </strong> 
    <ul>
     <li>${mailing1 ? "해외단신" : ""}</li>
     <li>${mailing2 ? "5분회화" : ""}</li>
     <li>${mailing3 ? "모닝팝스" : ""}</li>
    </ul>
    </p>

    `;
    // 확인메세지 표시 및 폼 숨기기
    confirmation.innerHTML = confirmationMessage;
    form.style.display = "none";
    confirmation.style.display = "block";
  });
};
