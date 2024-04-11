window.onload = function () {
  const postTieleInput = document.getElementById("postTitle");
  const postContentInput = document.getElementById("postContent");
  const postImageInput = document.getElementById("postImage");
  const addPostBtn = document.getElementById("addPostBtn");
  const postList = document.getElementById("postList");
  const postDateInput = document.getElementById("postDate");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  // 저장된 게시글 배열
  let posts = [];
  // 로컬 스토리지에서 저장된 게시글 불러오기
  if (localStorage.getItem("posts")) {
    // 만약 posts라는 키로 저장된 데이터가 있다면,
    // localStorage.getItem("posts")를 통해 가져온 문자열 데이터를 JSON 객체로 파싱합니다.
    // 이 데이터는 posts라는 변수에 저장됩니다.
    // 즉, 로컬 스토리지에서 가져온 데이터는 이제 JavaScript 객체의 형태로 posts 변수에 저장되었습니다.
    posts = JSON.parse(localStorage.getItem("posts"));
    // 저장된 게시글을 화면에 표시
    for (const post of posts) {
      addPostToDOM(post);
    }
  }

  // 게시글 추가 함수
  function addPostToDOM(post) {
    const postElement = document.createElement("li");
    postElement.classList.add("post");
    postElement.innerHTML = `
  <div class="post-content">
  <h2>${post.title}</h2>
  ${post.date ? `<p>Date: ${post.date}</p>` : ""} <!-- Display the date if it's not null -->
  <div class="post-details">
      <p>${post.content}</p>
      ${post.image ? `<img src="${post.image}" alt="게시글 이미지">` : ""}
  </div>
  <button class="delete-post-btn">닫기</button> <!-- Close button -->
  </div>
  `;
    //   삭제 버튼에 클릭 이벤트 처리기능
    const deletButton = postElement.querySelector(".delete-post-btn");
    deletButton.addEventListener("click", function () {
      // 게시글을 삭제하고 화면에서 제거
      const postLi = posts.indexOf(post);
      if (postLi !== -1) {
        posts.splice(postLi, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        postElement.remove();
      }
    });

    postList.prepend(postElement);
  }

  //  게시글 작성 버튼 클릭 이벤트처리 기능
  addPostBtn.addEventListener("click", function () {
    const title = postTieleInput.value;
    const content = postContentInput.value;
    const imageFile = postImageInput.files[0];
    const date = postDateInput.value;
    if (title && content) {
      // 이미지를 base64 형식으로 변환
      const reader = new FileReader();
      reader.onload = function () {
        // 새 게시글 객체 생성
        const newPost = {
          title,
          content,
          image: reader.result, // 이미지를 base64로 설정
          date: date || null,
        };
        // 배열에 게시글 추가
        posts.push(newPost);

        // console.log(posts);
        // 로컬 스토리지에 게시글 저장
        localStorage.setItem("posts", JSON.stringify(posts));
        // 화면에 게시글 추가
        addPostToDOM(newPost);
        // 입력필드 내용이 남아있을경우
        postTieleInput.value = "";
        postContentInput.value = "";
        postImageInput.value = "";
        postDateInput.value = "";
      };
      if (imageFile) {
        reader.readAsDataURL(imageFile); //이미지 파일을 base64로 읽기
      } else {
        // 이미지가 없을 경우도 처리
        reader.onload();
      }
    }
  });

  //   검색 지우기 버튼을 클릭 이벤트 처리 기능
  clearBtn.addEventListener("click", function () {
    // 기존 게시글 목록을 지우고 모든 게시글 표시
    postList.innerHTML = "";
    searchInput.value = "";
    for (const post of posts) {
      addPostToDOM(post);
    }
  });
  // 검색기능 추가
  searchBtn.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filterPosts = posts.filter(function (post) {
      return (
        // includes()문자열이 특정문자열 또는 문자열을 포함하는지 여부를 확인하는 메서드
        post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm)
      );
    });
    postList.innerHTML = "";
    for (const post of filterPosts) {
      addPostToDOM(post);
    }
  });
  // 888888888888888888888888888888888888888
};
