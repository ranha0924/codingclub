const PW = '8889';
let unlocked = false;

function pwCheck() {
  const v = document.getElementById('pw-input').value;
  const s = document.getElementById('pw-status');
  if (v === PW) {
    unlocked = true;
    s.style.color = '#1e7e34';
    s.textContent = '코드 열람이 활성화되었습니다.';
    document.getElementById('pw-input').disabled = true;
  } else {
    s.style.color = '#cc0000';
    s.textContent = '비밀번호가 틀렸습니다.';
  }
}

function tryToggle(id, btn) {
  if (!unlocked) {
    const s = document.getElementById('pw-status');
    s.style.color = '#cc0000';
    s.textContent = '비밀번호를 먼저 입력해주세요.';
    document.getElementById('pw-input').focus();
    return;
  }
  const el = document.getElementById(id);
  el.classList.toggle('open');
  btn.textContent = el.classList.contains('open') ? '▼ 코드 숨기기' : '▶ 코드 보기';
}

function switchTab(t) {
  document.querySelectorAll('.tab').forEach((b, i) => b.classList.toggle('active', i === (t === 'init' ? 0 : 1)));
  document.querySelectorAll('.section').forEach((s, i) => s.classList.toggle('active', i === (t === 'init' ? 0 : 1)));
}

// MBTI
const mbtiQ = [
  {q:"말을 잘 거는 편인가요?", y:'E', n:'I'},
  {q:"상상하는 것을 좋아하나요?", y:'N', n:'S'},
  {q:"공감하는 것을 어려워하나요?", y:'T', n:'F'},
  {q:"현재 방이 어질러진 상태인가요?", y:'P', n:'J'}
];
let mbtiIdx = 0, mbtiRes = '';
function mbtiStart() {
  mbtiIdx = 0; mbtiRes = '';
  document.getElementById('mbti-out').textContent = '< 당신의 MBTI는? >\ny/n으로 대답해주세요.\n\n' + mbtiQ[0].q;
  document.getElementById('mbti-btns').innerHTML = '<button class="demo-btn" onclick="mbtiAns(\'y\')">y</button><button class="demo-btn" onclick="mbtiAns(\'n\')">n</button>';
}
function mbtiAns(v) {
  mbtiRes += mbtiQ[mbtiIdx][v];
  mbtiIdx++;
  if (mbtiIdx < mbtiQ.length) {
    document.getElementById('mbti-out').textContent = '< 당신의 MBTI는? >\n\n' + mbtiQ[mbtiIdx].q;
  } else {
    document.getElementById('mbti-out').textContent = '당신의 MBTI는 [ ' + mbtiRes + ' ] 입니다!';
    document.getElementById('mbti-btns').innerHTML = '<button class="demo-btn" onclick="mbtiStart()">다시하기</button>';
  }
}

// 사칙연산
function calcRun() {
  const a = parseFloat(document.getElementById('calc-a').value) || 0;
  const b = parseFloat(document.getElementById('calc-b').value) || 0;
  let out = `< 사칙 연산 계산기 >\n\n${a} + ${b} = ${a+b}\n${a} - ${b} = ${a-b}\n${a} * ${b} = ${a*b}\n${a} / ${b} = ` + (b === 0 ? '0으로 나눌 수 없음' : parseFloat((a/b).toFixed(4)));
  document.getElementById('calc-out').textContent = out;
}

// 퀴즈
const quizData = [
  {q:"파이썬을 만든 사람은?", a:"귀도 반 로섬"},
  {q:"대한민국의 수도는?", a:"서울"},
  {q:"1 + 1 = ?", a:"2"}
];
let quizIdx = 0, quizScore = 0;
function quizStart() {
  quizIdx = 0; quizScore = 0;
  document.getElementById('quiz-out').textContent = '=== 나만의 퀴즈 게임 ===\n\nQ1. ' + quizData[0].q;
  document.getElementById('quiz-row').innerHTML = '<input class="demo-input" id="quiz-ans" placeholder="정답 입력"><button class="demo-btn" onclick="quizCheck()">제출</button>';
}
function quizCheck() {
  const ans = document.getElementById('quiz-ans').value.trim();
  let fb = ans === quizData[quizIdx].a ? '정답! ✓' : '오답! 정답: ' + quizData[quizIdx].a;
  if (ans === quizData[quizIdx].a) quizScore++;
  quizIdx++;
  if (quizIdx < quizData.length) {
    document.getElementById('quiz-out').textContent = '=== 나만의 퀴즈 게임 ===\n\n' + fb + '\n\nQ' + (quizIdx+1) + '. ' + quizData[quizIdx].q;
    document.getElementById('quiz-ans').value = '';
  } else {
    document.getElementById('quiz-out').textContent = fb + '\n\n최종 점수: ' + quizScore + ' / ' + quizData.length;
    document.getElementById('quiz-row').innerHTML = '<button class="demo-btn" onclick="quizStart()">다시하기</button>';
  }
}

// 짝수홀수
function numRun() {
  const n = parseInt(document.getElementById('num-in').value);
  if (isNaN(n)) { document.getElementById('num-out').textContent = '숫자를 입력해주세요.'; return; }
  let out = n + '은(는) ' + (n % 2 === 0 ? '짝수' : '홀수') + '입니다.\n';
  function ip(x) { if (x < 2) return false; for (let i = 2; i <= Math.sqrt(x); i++) if (x % i === 0) return false; return true; }
  out += n + '은(는) ' + (ip(n) ? '소수' : '소수가 아닙니다') + '입니다.';
  document.getElementById('num-out').textContent = out;
}

// 성적
function gradeRun() {
  const g = [+document.getElementById('g1').value, +document.getElementById('g2').value, +document.getElementById('g3').value];
  const names = ['국어', '수학', '영어'];
  const avg = g.reduce((a, b) => a + b, 0) / 3;
  const grade = avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : avg >= 60 ? 'D' : 'F';
  let out = '=== 성적 결과 ===\n\n';
  names.forEach((n, i) => out += n + ' : ' + g[i] + '점\n');
  out += '\n평균 : ' + avg.toFixed(1) + '점\n등급 : ' + grade;
  document.getElementById('grade-out').textContent = out;
}

// 가위바위보
let rpsW = 0, rpsL = 0, rpsD = 0;
function rpsPlay(p) {
  const c = ['가위', '바위', '보'][Math.floor(Math.random() * 3)];
  let r;
  if (p === c) { r = '무승부!'; rpsD++; }
  else if ((p==='가위'&&c==='보')||(p==='바위'&&c==='가위')||(p==='보'&&c==='바위')) { r = '승리!'; rpsW++; }
  else { r = '패배!'; rpsL++; }
  document.getElementById('rps-out').textContent = `나: ${p}  컴퓨터: ${c}\n→ ${r}\n\n승:${rpsW} 패:${rpsL} 무:${rpsD}`;
}
function rpsReset() { rpsW = rpsL = rpsD = 0; document.getElementById('rps-out').textContent = '아래 버튼을 눌러 가위바위보!'; }

// 숫자 맞추기
let guessAns = Math.floor(Math.random() * 100) + 1, gTries = 0;
function guessPlay() {
  const g = parseInt(document.getElementById('guess-in').value);
  if (isNaN(g) || g < 1 || g > 100) { document.getElementById('guess-out').textContent = '1~100 사이 숫자를 입력하세요.'; return; }
  gTries++;
  if (g === guessAns) {
    document.getElementById('guess-out').textContent = `정답! ${gTries}번 만에 맞췄습니다!\n정답은 ${guessAns}였습니다.`;
  } else if (gTries >= 10) {
    document.getElementById('guess-out').textContent = `게임 오버!\n정답은 ${guessAns}였습니다.`;
  } else {
    document.getElementById('guess-out').textContent = `${g} → ` + (g < guessAns ? '더 큰 숫자' : '더 작은 숫자') + '입니다.\n남은 기회: ' + (10 - gTries) + '번';
  }
}
function guessReset() {
  guessAns = Math.floor(Math.random() * 100) + 1; gTries = 0;
  document.getElementById('guess-in').value = '';
  document.getElementById('guess-out').textContent = '1~100 사이 숫자를 맞춰보세요! (10번 기회)';
}

// 텍스트 RPG
const rpgM = [{name:'슬라임',hp:20,atk:5},{name:'고블린',hp:35,atk:12},{name:'드래곤',hp:80,atk:25}];
let rpgHp = 100, rpgKills = 0, rpgItems = [], rpgMon = null;
function rpgStart() { rpgHp = 100; rpgKills = 0; rpgItems = []; rpgNext(); }
function rpgNext() {
  rpgMon = {...rpgM[Math.floor(Math.random() * rpgM.length)]};
  document.getElementById('rpg-out').textContent = `HP: ${rpgHp} | 처치: ${rpgKills}마리 | 포션: ${rpgItems.length}개\n\n${rpgMon.name}이(가) 나타났다! (적 HP: ${rpgMon.hp})`;
  document.getElementById('rpg-btns').innerHTML = '<button class="demo-btn" onclick="rpgAct(1)">공격</button><button class="demo-btn" onclick="rpgAct(2)">포션</button><button class="demo-btn" onclick="rpgAct(3)">도망</button>';
}
function rpgAct(a) {
  let log = `HP: ${rpgHp} | 처치: ${rpgKills}마리 | 포션: ${rpgItems.length}개\n\n`;
  if (a === 1) {
    const d = Math.floor(Math.random() * 16) + 10;
    rpgMon.hp -= d;
    log += `${d} 데미지!\n`;
    if (rpgMon.hp <= 0) {
      rpgKills++;
      log += `${rpgMon.name} 처치!\n`;
      if (Math.random() > 0.5) { rpgItems.push('포션'); log += '포션 획득!\n'; }
      document.getElementById('rpg-out').textContent = log;
      setTimeout(rpgNext, 900);
      return;
    } else {
      rpgHp -= rpgMon.atk;
      log += `적의 반격! 내 HP: ${rpgHp}\n`;
    }
  } else if (a === 2) {
    if (rpgItems.length > 0) { rpgHp = Math.min(100, rpgHp + 30); rpgItems.pop(); log += `포션 사용! HP: ${rpgHp}\n`; }
    else { log += '포션이 없습니다.\n'; }
  } else {
    log += '도망쳤다!\n'; rpgMon.hp = 0;
  }
  if (rpgHp <= 0) {
    document.getElementById('rpg-out').textContent = `게임 오버!\n최종 기록: ${rpgKills}마리 처치`;
    document.getElementById('rpg-btns').innerHTML = '<button class="demo-btn" onclick="rpgStart()">다시하기</button>';
    return;
  }
  log += `\n[적 HP: ${Math.max(0, rpgMon.hp)}]`;
  document.getElementById('rpg-out').textContent = log;
  if (rpgMon.hp <= 0) setTimeout(rpgNext, 800);
}