<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    // 전송된 내용을 로그에 기록
    file_put_contents("log.txt", "이름: $name, 이메일: $email\n", FILE_APPEND);

    // 응답 생성
    $response = "이름: " . $name . ", 이메일: " . $email;
    echo $response;
} else {
    echo "잘못된 요청입니다.";
}
?>