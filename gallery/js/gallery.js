$(document).ready(function () {
  $.ajax({
    url: "json/gallery.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $.each(data, function (index, item) {
        //갤러리 아이템을 추가
        var galleryItem = `
        <div class="gallery_item">      
        <img src="${item.img}" />
        <div class="item_desc">
          <h1>${item.title}</h1>
          <p>${item.dec}</p>
        </div>
      </div>
      `;
        $(".gallery_wrap").append(galleryItem);
        //   디테일 아이템 추가
        var detailItem = `
        <div class="gallery_detail">
        <div class="gallery_detail_wrap">
          <div class="detail_left">
            <img src="${item.img}" alt="${item.title}" />
          </div>
          <div class="detail_right">
            <div class="content">
              <h1 class="detail_title">${item.title}</h1>
              <div class="title_line"></div>
              <p class="detail_sub">${item.info}</p>
            </div>
          </div>
        </div>
        <a href="#">&times;</a>
      </div>
        `;
        $(".gallery_wrap").append(detailItem);
      });
      // 아이템을 클릭했을 때 디테일 아이템이 나옴
      $(".gallery_detail").hide();
      $(".gallery_item").click(function () {
        $(this).next(".gallery_detail").show();
      });
      $(".gallery_detail a").click(function () {
        $(".gallery_detail").hide();
      });
    },
    error: function (status, error) {
      console.log("오류:", status, error);
    },
  });
});
