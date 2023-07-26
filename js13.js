var html = "";
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var res = document.getElementById("res");
var res2 = document.getElementById("res2");
btn1.addEventListener("click", function() {         // function(){ } => 익명의 함수
    objectInfo();
});
function objectInfo() {
    for (var key in history) {
        html += "<p>" + key + " : " + history[key] + "</p>";
    }
    res.innerHTML = html;
}

btn2.addEventListener("click", function() {
    res2.innerText = location.href;
    setTimeout(function() {
        location.href = "https://www.naver.com";        // 속성을 사용하여 다른 사이트로 이동하기 (뒤로가기 가능)
    }, 2500);       // 2.5초 후에 'NAVER'로 이동
});

btn3.addEventListener("click", function() {
    location.reload();
});

btn4.addEventListener("click", function() {             // 메소드를 사용하여 다른 사이트로 이동하기 (뒤로가기 불가능)
    location.replace("https://www.google.com");
});

btn5.addEventListener("click", function() {
    location.assign("https://www.daum.net");            // 메서드를 사용하여 다른 사이트로 이동하기 (뒤로가기 가능)
});

btn6.addEventListener("click", function() {
    history.back();                                     // 1단계 뒤로가기 (history.back(2); 2단계 뒤로가기)
});

btn7.addEventListener("click", function() {
    history.forward();                                  // 1단계 앞으로가기 (history.forward(2); 2단계 앞으로가기)
});

btn8.addEventListener("click", function() {
    // history.go(0);                                      // 현재 웹페이지에 가만히 있기
    // history.go(1);                                      // 1단계 앞으로가기
    // history.go(2);                                      // 2단계 앞으로가기
    history.go(-1);                                     // 1단계 뒤로가기
});

function moving() {
    var loc = document.getElementById("sel");
    if (loc.value != "") {
        location.assign(loc.value);
    }
}