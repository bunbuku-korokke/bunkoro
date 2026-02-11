 const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');

    // 画面サイズに合わせる
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // 星データを作る
    const STAR_COUNT = 150;
    // const STAR_COUNT = 10;
    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,   // 半径
        a: Math.random() * Math.PI * 2, // 点滅用の位相
        speed: Math.random() * 0.02 + 0.01
      });
    }

/* ▼▼▼ ここから流れ星の追加コード ▼▼▼ */

// 流れ星データ（最初は存在しない）
let shootingStar = null;

// 流れ星を発生させる関数（ボタンから呼び出す）
function spawnShootingStar() {
  shootingStar = {
    x: Math.random() * canvas.width, // ランダムな横位置
    y: -50,                          // 画面上から出現
    vx: 8 + Math.random() * 4,       // 右下方向へ流れる速度（←ここを変更）
    vy: 8 + Math.random() * 4,
    life: 0
  };
}

/* ▲▲▲ ここまで流れ星の追加コード ▲▲▲ */
    
    function draw() {
      // 背景（少しグラデーション）
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#02030a');
      grad.addColorStop(1, '#000000');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "#000000";
// ctx.fillRect(0, 0, canvas.width, canvas.height);


      // 星を描画
      for (const star of stars) {
        star.a += star.speed; // 点滅アニメーション
        const alpha = 0.3 + Math.abs(Math.sin(star.a)) * 0.7;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }
/* ▼▼▼ 流れ星の描画 ▼▼▼ */
  if (shootingStar) {
    shootingStar.x += shootingStar.vx;
    shootingStar.y += shootingStar.vy;
    shootingStar.life++;

    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 2;
    ctx.moveTo(shootingStar.x, shootingStar.y);
    ctx.lineTo(shootingStar.x + 30, shootingStar.y + 30);
    ctx.stroke();

    // 一定時間で消える
    if (shootingStar.life > 40) {
      shootingStar = null;
    }
  }
  /* ▲▲▲ 流れ星の描画 ▲▲▲ */

      requestAnimationFrame(draw);
    }

    draw();