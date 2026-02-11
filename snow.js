
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