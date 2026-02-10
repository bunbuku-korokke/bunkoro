const snowContainer = document.querySelector('.snow-container');

// 雪の数（お好みで調整）
const SNOW_COUNT = 120;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';

  // ランダムな位置・サイズ・速度・揺れ
  const size = Math.random() * 10 + 5; // 5〜15px
  const startLeft = Math.random() * 100; // vw
  const duration = Math.random() * 10 + 8; // 8〜18秒
  const delay = Math.random() * 10; // 0〜10秒

  snowflake.style.left = `${startLeft}vw`;
  snowflake.style.fontSize = `${size}px`;
  snowflake.style.animationDuration = `${duration}s`;
  snowflake.style.animationDelay = `${delay}s`;

  snowContainer.appendChild(snowflake);

  // アニメーションが終わったら再利用（ループ感を出す）
  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
    createSnowflake();
  });
}
// ここから変更部分⭐️⭐️
function startSnow() {
  for (let i = 0; i < SNOW_COUNT; i++) {
    createSnowflake();
  }
}

async function checkWeatherAndStartSnow() {
  const API_KEY = "475e794cf2a91e98f346dd6b2300c366"; // ←自分のキーに変更
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Iwamizawa,jp&appid=${API_KEY}&lang=ja`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=${API_KEY}&lang=ja`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    const weather = data.weather[0].main.toLowerCase();
    console.log("現在の天気:", weather);

    if (weather.includes("snow")) {
      startSnow();
    }
  } catch (error) {
    console.error("天気情報の取得に失敗:", error);
  }
}

 checkWeatherAndStartSnow();
//ここまで変更部分⭐️⭐️

// 初期生成⭐️テストで無効化、有効化すれば雪降る
// for (let i = 0; i < SNOW_COUNT; i++) {
//   createSnowflake();
// }

// 背景のグラデーションの設定
  function updateBackground() {
    const hour = new Date().getHours();
    const body = document.body;

    body.className = ""; // 既存クラスをリセット

    if (hour >= 22 || hour < 4) {
  // 20:00〜3:59 → midnight（星空ON）
  body.classList.add("midnight");
  document.getElementById("starfield").style.display = "block";

} else if (hour >= 4 && hour < 7) {
  body.classList.add("morning");
  document.getElementById("starfield").style.display = "none";

} else if (hour >= 7 && hour < 16) {
  body.classList.add("noon");
  document.getElementById("starfield").style.display = "none";

} else if (hour >= 16 && hour < 18) {
  body.classList.add("evening");
  document.getElementById("starfield").style.display = "none";

} else if (hour >= 18 && hour < 20) {
  body.classList.add("late");
  document.getElementById("starfield").style.display = "none";

} else {
  body.classList.add("night");
  document.getElementById("starfield").style.display = "none";
}
  }

  updateBackground();