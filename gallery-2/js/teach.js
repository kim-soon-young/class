window.addEventListener("load", function () {
    const tabtitle = this.document.querySelectorAll(".tab-nav li a");
    tabtitle.forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        tabtitle.forEach(function (item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
  
        const tabItems = document.querySelectorAll(".tabitem");
        tabItems.forEach(function (tab) {
          tab.style.display = "none";
        });
        const target = this.getAttribute("href");
        document.querySelector(target).style.display = "block";
      });
    });
    tabtitle[0].click();
  });