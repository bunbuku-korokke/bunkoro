// ごあいさつ　と　おしらせ
const titles = {
  greeting: {
    jp: "ごあいさつ",
    en: "Greeting",
    fi: "Tervehdys"
  },
  info: {
    jp: "おしらせ",
    en: "Information",
    fi: "Ilmoitukset"
  }
};

function updateTitles(lang) {
  document.getElementById("title-greeting").textContent = titles.greeting[lang];
  document.getElementById("title-info").textContent = titles.info[lang];
}


// 日本語
const greetingsJP = [
  'ぶんぶくコロッケ の公式ホームページです！！',
  '素敵なカッパさんや動物たち 🐾',
  'みんなが暮らす世界をお届けします。',
  '<br>',
  '絵本やマンガ、イラストを通して描いていきます。',
  'カッパさんたちの日常に起きる物語。',
  '不定期更新とはなりますが、お楽しみください ♪',
  '◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️'
];

// 英語（例）
const greetingsEN = [
  "Welcome to Bunbuku Korokke's official website!",
  "You'll find lovely kappa and animal friends.🐾",
  "We bring you the world where they live.",
  "<br>",
  "Stories about their everyday life are shared",
  "through picture books, comics, and illustrations.",
  "Updates are irregular, but please enjoy ♪",
  "◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️"
];

// フィンランド語（例）
const greetingsFI = [
  "Tervetuloa Bunbuku Korokken virallisille sivuille!",
  "Täältä löydät ihanat kappa-hahmot ja eläinystävät.🐾",
  "Tuomme sinulle maailman, jossa ystävykset elävät.",
  "<br>",
  "Heidän arjestaan kertovia tarinoita tuodaan esiin",
  "kuvakirjojen, sarjakuvien ja kuvitusten kautta.",
  "Päivitykset ovat epäsäännöllisiä, mutta nauttikaa niistä ♪",
    // "Päivitykset ovat epäsäännöllisiä,",
    // "mutta nauttikaa niistä ♪",
  "◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️"
];

const ul = document.getElementById('bunbuk-list');

// リスト描画関数
function renderList(list) {
  ul.innerHTML = "";
  list.forEach(text => {
    const li = document.createElement('li');
    li.innerHTML = text;
    ul.appendChild(li);
  });
}



// 初期表示（日本語）
renderList(greetingsJP);
 
const informationsJP = [
  { text: 'SNS へのリンクや、活動予定を掲載します！！', url: null },
  { text: '⭐️ instagram はこちらです。', url: 'https://www.instagram.com/bunbuku_korokke2/' },
  // { text: '⭐️ facebook はこちらです。', url: 'https://www.facebook.com/' },
  { text: '⭐️ オリジナル アプリ準備中です。', url: null },
  { text: '⭐️ ポーチ、サコッシュなど制作予定です。', url: null },
  { text: '⭐️ エゾこだぬきさんの裏方記 公開中', url: 'https://note.com/bunbuku_korokke' },
  { text: '◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️', url: null }
];

const informationsEN = [
  { text: 'Links to SNS and activities will be posted here!', url: null },
  { text: '⭐️ instagram:bunbuku_korokke2.', url: 'https://www.instagram.com/bunbuku_korokke2/' },
  { text: '⭐️ Original app will be released.', url: null },
  { text: '⭐️ Pouches and sacoche items are planned.', url: null },
  { text: '⭐️ Behind_the_Scenes (Japanese Only).', url: 'https://note.com/bunbuku_korokke' },
  { text: '◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️', url: null }
];

const informationsFI = [
  // { text: 'Tänne lisätään linkkejä someen ja tietoja tulevista aktiviteeteista!', url: null },
  { text: 'Tänne lisätään linkkejä someen', url: null },
  { text: 'ja tietoja tulevista aktiviteeteista!', url: null },
  { text: '⭐️ Instagramissa:bunbuku_korokke2.', url: 'https://www.instagram.com/bunbuku_korokke2/' },
  { text: '⭐️ Oma sovellus on valmisteilla.', url: null },
  { text: '⭐️ Pussukoita ja olkalaukkuja on suunnitteilla.', url: null },
  { text: '⭐️ Kulissien takana (vain japaniksi).', url: 'https://note.com/bunbuku_korokke' },
  { text: '◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️', url: null }
];


const ul2 = document.getElementById('info-list');

function renderInfoList(list) {
  ul2.innerHTML = "";

  list.forEach(info => {
    const li = document.createElement('li');

    if (info.url) {
      const match = info.text.match(/⭐️\s*(\S+)\s*/);
      const keyword = match ? match[1] : null;

      if (keyword) {
        const index = info.text.indexOf(keyword);
        const before = info.text.slice(0, index);
        const after = info.text.slice(index + keyword.length);

        li.innerHTML = `
          ${before}<a href="${info.url}" target="_blank" class="info-link"><strong>${keyword}</strong></a>${after}
        `;
      } else {
        li.textContent = info.text;
      }
    } else {
      li.textContent = info.text;
    }

    ul2.appendChild(li);
  });
}

// ボタンに影をつける
// すべての言語ボタン
const langButtons = document.querySelectorAll('nav button');

// 選択状態を切り替える関数
function setActiveButton(buttonId) {
  langButtons.forEach(btn => btn.classList.remove('active'));
  document.getElementById(buttonId).classList.add('active');
}

// 初期状態（JP を選択）
setActiveButton('btn-jp');
updateTitles("jp"); // h2 タイトルを日本語にする
renderInfoList(informationsJP);

//fadeの処理
function fadeUpdate(element, updateFunc) {
  // フェードアウト
  element.classList.add("hide");

  setTimeout(() => {
    // 内容更新
    updateFunc();

    // フェードイン
    element.classList.remove("hide");
  }, 500); // CSS の transition と合わせる
}

//ボタンイベントの更新版⭐️消すかも！⇨うまくいった！
document.getElementById('btn-jp').addEventListener('click', () => {
  setActiveButton('btn-jp');

  fadeUpdate(document.getElementById("title-greeting"), () => updateTitles("jp"));
  fadeUpdate(document.getElementById("title-info"), () => updateTitles("jp"));

  fadeUpdate(document.getElementById("bunbuk-list"), () => renderList(greetingsJP));
  fadeUpdate(document.getElementById("info-list"), () => renderInfoList(informationsJP));

  spawnShootingStar();
});

document.getElementById('btn-en').addEventListener('click', () => {
  setActiveButton('btn-en');

  fadeUpdate(document.getElementById("title-greeting"), () => updateTitles("en"));
  fadeUpdate(document.getElementById("title-info"), () => updateTitles("en"));

  fadeUpdate(document.getElementById("bunbuk-list"), () => renderList(greetingsEN));
  fadeUpdate(document.getElementById("info-list"), () => renderInfoList(informationsEN));

  spawnShootingStar();
});

document.getElementById('btn-fi').addEventListener('click', () => {
  setActiveButton('btn-fi');

  fadeUpdate(document.getElementById("title-greeting"), () => updateTitles("fi"));
  fadeUpdate(document.getElementById("title-info"), () => updateTitles("fi"));

  fadeUpdate(document.getElementById("bunbuk-list"), () => renderList(greetingsFI));
  fadeUpdate(document.getElementById("info-list"), () => renderInfoList(informationsFI));

  spawnShootingStar();
});


//もし言語が増える可能性があるなら、まとめて書く方法もあります：
const labels = {
    "btn-en": "EN",
    "btn-fi": "FI",
    "btn-jp": "JP"
};

document.addEventListener("DOMContentLoaded", () => {
    for (const id in labels) {
        document.getElementById(id).textContent = labels[id];
    }
});





// カッパさんのメッセージ
const hour = new Date().getHours(); 
const minute = new Date().getMinutes();
let targetClass = ""; 
if (hour < 4) { targetClass = "midnight"; 

} else if (hour < 6) { targetClass = "beforeMorning"; 

} else if (hour < 8) { targetClass = "morning"; 

} else if (hour < 9) { targetClass = "breakfast"; 

} else if (hour < 15) { targetClass = "afternoon"; 

} else if (hour < 16) { targetClass = "breakTime"; 

} else if (hour < 18) { targetClass = "afterWork"; 

} else if (hour < 22 || (hour === 22 && minute < 1)) { targetClass = "evening";

} else if (hour < 22 || (hour === 22 && minute < 31)) { targetClass = "night";

} else if (hour < 23 || (hour === 23 && minute < 31)) {targetClass = "beforeMidnight";

} else { targetClass = "midnight"; 
    
} 



const messages = {
  beforeMorning: "「もう少し寝てていいよ。」",
  morning: "「おはようございます！」",
  breakfast: "「朝ごはん食べるんだよ」",
  afternoon: "「こんにちは！」",
  breakTime: "「ブレイク タイムにしようか。」",
  afterWork: "「おつかれさまです！」",
  evening: "「こんばんは！」",
  night: "「明日の準備をしようね。」",
  beforeMidnight: "「夜更かしはダメだよー」",
  midnight: "「もう深夜です。休みましょう。」"
};


document.getElementById("message001").textContent = messages[targetClass];
document.getElementById("message002").textContent = "カッパさんからのメッセージ";

const msg1 = document.getElementById("message001");
const msg2 = document.getElementById("message002");

let showingFirst = true;

// すべて非表示にする関数
function hideAll() {
  msg1.style.opacity = 0;
  msg2.style.opacity = 0;
}

// メッセージ切り替え関数
function switchMessages() {
  // まず両方消す（3秒）
  hideAll();

  setTimeout(() => {
    if (showingFirst) {
      msg1.style.opacity = 1;  // message001 フェードイン
      msg2.style.opacity = 0;
    } else {
      msg1.style.opacity = 0;
      msg2.style.opacity = 1;  // message002 フェードイン
    }

    showingFirst = !showingFirst;
  }, 3000); // ← 3秒後にフェードイン開始
}

// 最初の表示（message001 をフェードイン）
switchMessages();

// 1サイクル = 3秒非表示 + 3秒フェードイン + 3秒表示 = 9秒
setInterval(switchMessages, 9000);

