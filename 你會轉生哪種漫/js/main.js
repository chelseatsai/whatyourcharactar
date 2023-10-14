const startButton = document.getElementById("start-button");
const homePage = document.getElementById("home");
const quizForm = document.getElementById("quiz-form");
const preface = document.getElementById("preface");
const ready = document.getElementById("ready");
const questions = quizForm.querySelectorAll(".question");
const submitButton = quizForm.querySelector('input[type="submit"]');
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const resultImage = document.getElementById("result-image");
const restartButton = document.getElementById("restart-button");
const downloada = document.getElementById("download");
const instergram = document.getElementById("instergram");
let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("touchstart", function () {
  // 隱藏首頁，顯示測驗表單
  homePage.style.display = "none";
  preface.style.display = "block";
  // 開始測驗，顯示第一個問題
  showNextQuestion();
});

var music = document.getElementById("background-music");
var startbutton = document.getElementById("start-button");
var musictwo = document.getElementById("preface-music");
var readyButton = document.getElementById("ready");
var answerbutton = document.getElementById("answer");
var musicthree = document.getElementById("submit-music");
var restart = document.getElementById("restart-button");

startbutton.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    startbutton.innerHTML = "START";
  } else {
    music.pause();
    startbutton.innerHTML = "START";
  }
});
answerbutton.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    answerbutton.innerHTML = "我準備好了";
  } else {
    music.pause();
    answerbutton.innerHTML = "我準備好了";
  }
});
restart.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    restart.innerHTML = "[再測一次]";
  } else {
    music.pause();
    restart.innerHTML = "[再測一次]";
  }
});
answerbutton.addEventListener("click", function () {
  if (musicthree.paused) {
    musicthree.play();
    answerbutton.innerHTML = "查看結果";
  } else {
    musicthree.pause();
    answerbutton.innerHTML = "查看結果";
  }
});

ready.addEventListener("click", function () {
  // 隱藏首頁，顯示測驗表單
  preface.style.display = "none";
  quizForm.style.display = "block";
  // 開始測驗，顯示第一個問題
  showNextQuestion();
});
answer.addEventListener("click", function () {
  // 隱藏提交，顯示結果
  submit.style.display = "none";
  result.style.display = "block";
  // 显示结果页面和重新测试按钮
});

// 監聽選項的點擊事件，並跳到下一題
questions.forEach((question) => {
  const options = question.querySelectorAll('input[type="radio"]');
  options.forEach((option) => {
    option.addEventListener("click", function () {
      const nextQuestionNumber = parseInt(
        option.getAttribute("data-next-question")
      );
      showQuestion(nextQuestionNumber);
    });
  });
});

function showQuestion(questionNumber) {
  questions.forEach((question) => {
    const questionData = parseInt(question.getAttribute("data-question"));
    if (questionData === questionNumber) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  });
}

quizForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 防止表單提交
  calculateAndDisplayResult();
});

// 開始測驗，顯示第一個問題
showQuestion(1);

function calculateAndDisplayResult() {
  // 收集用戶的答案
  const answers = {
    q1: parseInt(document.querySelector('input[name="q1"]:checked').value),
    q2: parseInt(document.querySelector('input[name="q2"]:checked').value),
    q3: parseInt(document.querySelector('input[name="q3"]:checked').value),
    q4: parseInt(document.querySelector('input[name="q4"]:checked').value),
    q5: parseInt(document.querySelector('input[name="q5"]:checked').value),
    q6: parseInt(document.querySelector('input[name="q6"]:checked').value),
    q7: parseInt(document.querySelector('input[name="q7"]:checked').value),
    q8: parseInt(document.querySelector('input[name="q8"]:checked').value),
    q9: parseInt(document.querySelector('input[name="q9"]:checked').value),
    q10: parseInt(document.querySelector('input[name="q10"]:checked').value),
    q11: parseInt(document.querySelector('input[name="q11"]:checked').value),
    q12: parseInt(document.querySelector('input[name="q12"]:checked').value),
  };

  // 計算分數
  let score = 0;
  for (const key in answers) {
    if (answers.hasOwnProperty(key)) {
      score += answers[key];
    }
  }

  // 顯示結果
  document.getElementById("score").textContent = "";
  document.getElementById("interpretation").textContent = "";

  // 根據分數選擇要顯示的下載的結果圖片
  if (score >= 2415) {
    downloada.href = "./img/殺人魔.png";
  } else if (score >= 2401) {
    downloada.href = "./img/惡女.png";
  } else if (score >= 2315) {
    downloada.href = "./img/殺人魔.png";
  } else if (score >= 2301) {
    downloada.href = "./img/惡女.png";
  } else if (score >= 2215) {
    downloada.href = "./img/殺人魔.png";
  } else if (score >= 2201) {
    downloada.href = "./img/惡女.png";
  } else if (score >= 2115) {
    downloada.href = "./img/殺人魔.png";
  } else if (score >= 2101) {
    downloada.href = "./img/惡女.png";
  } else if (score >= 2015) {
    downloada.href = "./img/殺人魔.png";
  } else if (score >= 2001) {
    downloada.href = "./img/惡女.png";
  } else if (score >= 1914) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1910) {
    downloada.href = "./img/總裁.png";
  } else if (score >= 1901) {
    downloada.href = "./img/導師.png";
  } else if (score >= 1814) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1810) {
    downloada.href = "./img/總裁.png";
  } else if (score >= 1801) {
    downloada.href = "./img/導師.png";
  } else if (score >= 1714) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1710) {
    downloada.href = "./img/總裁.png";
  } else if (score >= 1701) {
    downloada.href = "./img/導師.png";
  } else if (score >= 1614) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1601) {
    downloada.href = "./img/吐槽.png";
  } else if (score >= 1514) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1501) {
    downloada.href = "./img/吐槽.png";
  } else if (score >= 1424) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 1414) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1401) {
    downloada.href = "./img/吐槽.png";
  } else if (score >= 1323) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 1314) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1301) {
    downloada.href = "./img/吐槽.png";
  } else if (score >= 1222) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 1214) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1210) {
    downloada.href = "./img/俠客.png";
  } else if (score >= 1201) {
    downloada.href = "./img/一般人.png";
  } else if (score >= 1121) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 1114) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1110) {
    downloada.href = "./img/俠客.png";
  } else if (score >= 1101) {
    downloada.href = "./img/一般人.png";
  } else if (score >= 1020) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 1014) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 1010) {
    downloada.href = "./img/俠客.png";
  } else if (score >= 1001) {
    downloada.href = "./img/一般人.png";
  } else if (score >= 919) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 914) {
    downloada.href = "./img/幸運星.png";
  } else if (score >= 910) {
    downloada.href = "./img/俠客.png";
  } else if (score >= 901) {
    downloada.href = "./img/一般人.png";
  } else if (score >= 819) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 814) {
    downloada.href = "./img/熱血笨蛋.png";
  } else if (score >= 811) {
    downloada.href = "./img/少女1.png";
  } else if (score >= 801) {
    downloada.href = "./img/大姊姊.png";
  } else if (score >= 719) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 714) {
    downloada.href = "./img/熱血笨蛋.png";
  } else if (score >= 709) {
    downloada.href = "./img/少女1.png";
  } else if (score >= 701) {
    downloada.href = "./img/大姊姊.png";
  } else if (score >= 619) {
    downloada.href = "./img/外星人.png";
  } else if (score >= 614) {
    downloada.href = "./img/熱血笨蛋.png";
  } else if (score >= 608) {
    downloada.href = "./img/少女1.png";
  } else if ((score = 606)) {
    downloada.href = "./img/大姊姊.png";
  } else {
    downloada.href = "./img/一般人.png";
  }

  // 根據分數選擇要顯示的結果圖片
  if (score >= 2415) {
    resultImage.src = "./img/殺人魔.png";
  } else if (score >= 2401) {
    resultImage.src = "./img/惡女.png";
  } else if (score >= 2315) {
    resultImage.src = "./img/殺人魔.png";
  } else if (score >= 2301) {
    resultImage.src = "./img/惡女.png";
  } else if (score >= 2215) {
    resultImage.src = "./img/殺人魔.png";
  } else if (score >= 2201) {
    resultImage.src = "./img/惡女.png";
  } else if (score >= 2115) {
    resultImage.src = "./img/殺人魔.png";
  } else if (score >= 2101) {
    resultImage.src = "./img/惡女.png";
  } else if (score >= 2015) {
    resultImage.src = "./img/殺人魔.png";
  } else if (score >= 2001) {
    resultImage.src = "./img/惡女.png";
  } else if (score >= 1914) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1910) {
    resultImage.src = "./img/總裁.png";
  } else if (score >= 1901) {
    resultImage.src = "./img/導師.png";
  } else if (score >= 1814) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1810) {
    resultImage.src = "./img/總裁.png";
  } else if (score >= 1801) {
    resultImage.src = "./img/導師.png";
  } else if (score >= 1714) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1710) {
    resultImage.src = "./img/總裁.png";
  } else if (score >= 1701) {
    resultImage.src = "./img/導師.png";
  } else if (score >= 1614) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1601) {
    resultImage.src = "./img/吐槽.png";
  } else if (score >= 1514) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1501) {
    resultImage.src = "./img/吐槽.png";
  } else if (score >= 1424) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 1414) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1401) {
    resultImage.src = "./img/吐槽.png";
  } else if (score >= 1323) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 1314) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1301) {
    resultImage.src = "./img/吐槽.png";
  } else if (score >= 1222) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 1214) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1210) {
    resultImage.src = "./img/俠客.png";
  } else if (score >= 1201) {
    resultImage.src = "./img/一般人.png";
  } else if (score >= 1121) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 1114) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1110) {
    resultImage.src = "./img/俠客.png";
  } else if (score >= 1101) {
    resultImage.src = "./img/一般人.png";
  } else if (score >= 1020) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 1014) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 1010) {
    resultImage.src = "./img/俠客.png";
  } else if (score >= 1001) {
    resultImage.src = "./img/一般人.png";
  } else if (score >= 919) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 914) {
    resultImage.src = "./img/幸運星.png";
  } else if (score >= 910) {
    resultImage.src = "./img/俠客.png";
  } else if (score >= 901) {
    resultImage.src = "./img/一般人.png";
  } else if (score >= 819) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 814) {
    resultImage.src = "./img/熱血笨蛋.png";
  } else if (score >= 811) {
    resultImage.src = "./img/少女1.png";
  } else if (score >= 801) {
    resultImage.src = "./img/大姊姊.png";
  } else if (score >= 719) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 714) {
    resultImage.src = "./img/熱血笨蛋.png";
  } else if (score >= 709) {
    resultImage.src = "./img/少女1.png";
  } else if (score >= 701) {
    resultImage.src = "./img/大姊姊.png";
  } else if (score >= 619) {
    resultImage.src = "./img/外星人.png";
  } else if (score >= 614) {
    resultImage.src = "./img/熱血笨蛋.png";
  } else if (score >= 608) {
    resultImage.src = "./img/少女1.png";
  } else if ((score = 606)) {
    resultImage.src = "./img/大姊姊.png";
  } else {
    resultImage.src = "./img/一般人.png";
  }

  // 顯示結果圖片
  resultImage.style.display = "block";

  // 顯示結果區域
  document.getElementById("result").style.display = "block";
}

// 當按鈕被點擊時，執行導航函數
instergram.addEventListener("click", function () {
  // 使用 window.location.href 進行網頁導航
  window.open("https://www.instagram.com/", "_blank");
});

// 添加重新测试按钮的点击事件
restartButton.addEventListener("click", function () {
  // 重置测试状态
  currentQuestionIndex = 0;
  score = 0;
  // 隐藏结果页面和结果图片
  result.style.display = "none";
  resultImage.style.display = "none";
  // 重新显示第一个问题
  quizForm.style.display = "block";
  // 隐藏提交按钮

  questions.forEach((question) => {
    const options = question.querySelectorAll('input[type="radio"]');

    // 將每個單選按鈕的選中狀態重置
    options.forEach((option) => {
      option.checked = false;
    });
  });
  showQuestion(1);
});
