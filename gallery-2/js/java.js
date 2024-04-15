document.addEventListener("DOMContentLoaded", function () {
    const tabTitles = document.querySelectorAll(".tab-nav li a");
  
    function handleClick(event) {
      event.preventDefault();
  
      // 모든 탭 제목에서 'active' 클래스 제거
      tabTitles.forEach(function (tabTitle) {
        tabTitle.classList.remove("active");
      });
  
      // 클릭된 탭 제목에 'active' 클래스 추가
      this.classList.add("active");
  
      // 모든 탭 아이템 숨기기
      const tabItems = document.querySelectorAll(".tabitem");
      tabItems.forEach(function (tabItem) {
        tabItem.style.display = "none";
      });
  
      // 해당하는 탭 아이템 보이기
      const target = this.getAttribute("href");
      document.querySelector(target).style.display = "block";
    }
  
    // 각 탭 제목에 클릭 이벤트 리스너 추가
    tabTitles.forEach(function (tabTitle) {
      tabTitle.addEventListener("click", handleClick);
    });
  
    // 첫 번째 탭 제목을 자동으로 활성화하기 위해 클릭 이벤트 발생
    tabTitles[0].click();
  });
  