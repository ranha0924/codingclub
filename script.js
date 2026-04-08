/* ===== PROBLEM DATA ===== */
const PROBLEMS = [
  {
    id: 1,
    title: "MBTI 테스트",
    difficulty: "초급",
    description: "y/n 질문 4개에 답하면 MBTI 성격 유형을 알려주는 프로그램입니다. 잘못된 입력에 대한 예외처리가 포함되어 있습니다.",
    sampleIO: `<span class="prompt">&lt; 당신의 MBTI는 무엇인가요? &gt;</span>
<span class="prompt">y/n으로 대답해주세요.</span>

<span class="prompt">말을 잘 거는 편인가요? : </span><span class="user-input">abc</span>
y랑 n만 입력해주세요.
<span class="prompt">말을 잘 거는 편인가요? : </span><span class="user-input">y</span>
<span class="prompt">상상하는 것을 좋아하나요? : </span><span class="user-input">n</span>
<span class="prompt">공감하는 것을 어려워하나요? : </span><span class="user-input">y</span>
<span class="prompt">현재 방이 어질러진 상태인가요? : </span><span class="user-input">n</span>

당신의 MBTI는 ESTJ입니다!`,
    code: `print(" < 당신의 MBTI는 무엇인가요? > ")
print(" y/n으로 대답해주세요. ")

while True:
    ei = input("말을 잘 거는 편인가요? : ")
    if ei == "y": ei = 'E'; break
    elif ei == "n": ei = 'I'; break
    else: print("y랑 n만 입력해주세요.")

while True:
    ns = input("상상하는 것을 좋아하나요? : ")
    if ns == "y": ns = 'N'; break
    elif ns == "n": ns = 'S'; break
    else: print("y랑 n만 입력해주세요.")

while True:
    ft = input("공감하는 것을 어려워하나요? : ")
    if ft == "y": ft = 'T'; break
    elif ft == "n": ft = 'F'; break
    else: print("y랑 n만 입력해주세요.")

while True:
    pj = input("현재 방이 어질러진 상태인가요? : ")
    if pj == "y": pj = 'P'; break
    elif pj == "n": pj = 'J'; break
    else: print("y랑 n만 입력해주세요.")

print("당신의 MBTI는 " + ei+ns+ft+pj + "입니다!")`
  },
  {
    id: 2,
    title: "사칙연산 계산기",
    difficulty: "초급",
    description: "두 숫자를 입력받아 사칙연산 결과를 보여주는 계산기입니다. 0으로 나누기 예외처리가 포함되어 있습니다.",
    sampleIO: `<span class="prompt">&lt; 사칙 연산 계산기 &gt;</span>
<span class="prompt">첫번째 숫자를 입력해주세요 : </span><span class="user-input">12</span>
<span class="prompt">두번째 숫자를 입력해주세요 : </span><span class="user-input">0</span>

12  +  0  =  12
12  -  0  =  12
12  *  0  =  0
0으로 나눌 수 없습니다.`,
    code: `print("< 사칙 연산 계산기 >")
a = int(input("첫번째 숫자를 입력해주세요 : "))
b = int(input("두번째 숫자를 입력해주세요 : "))

print(a, " + ", b, " = ", a+b)
print(a, " - ", b, " = ", a-b)
print(a, " * ", b, " = ", a*b)
if b == 0:
    print("0으로 나눌 수 없습니다.")
else:
    print(a, " / ", b, " = ", a/b)`
  },
  {
    id: 3,
    title: "나만의 퀴즈 게임",
    difficulty: "초급",
    description: "3개의 퀴즈를 풀고 최종 점수를 확인하는 게임입니다. 빈 입력에 대한 예외처리가 포함되어 있습니다.",
    sampleIO: `<span class="prompt">=== 나만의 퀴즈 게임 ===</span>

<span class="prompt">Q1. 파이썬을 만든 사람은? : </span><span class="user-input"></span>
답을 입력해주세요.
<span class="prompt">Q1. 파이썬을 만든 사람은? : </span><span class="user-input">귀도 반 로섬</span>
정답!
<span class="prompt">Q2. 대한민국의 수도는? : </span><span class="user-input">서울</span>
정답!
<span class="prompt">Q3. 1 + 1 = ? : </span><span class="user-input">3</span>
오답! 정답은 2입니다.

최종 점수: 2 / 3`,
    code: `print("=== 나만의 퀴즈 게임 ===")
score = 0

while True:
    answer = input("Q1. 파이썬을 만든 사람은? : ")
    if answer == "":
        print("답을 입력해주세요.")
    else:
        break
if answer == "귀도 반 로섬":
    print("정답!"); score += 1
else:
    print("오답! 정답은 귀도 반 로섬입니다.")

while True:
    answer = input("Q2. 대한민국의 수도는? : ")
    if answer == "":
        print("답을 입력해주세요.")
    else:
        break
if answer == "서울":
    print("정답!"); score += 1
else:
    print("오답! 정답은 서울입니다.")

while True:
    answer = input("Q3. 1 + 1 = ? : ")
    if answer == "":
        print("답을 입력해주세요.")
    else:
        break
if answer == "2":
    print("정답!"); score += 1
else:
    print("오답! 정답은 2입니다.")

print("최종 점수:", score, "/ 3")`
  },
  {
    id: 4,
    title: "짝수/홀수 판별기",
    difficulty: "초급",
    description: "숫자를 입력받아 짝수인지 홀수인지 판별해주는 프로그램입니다.",
    sampleIO: `<span class="prompt">숫자를 입력하세요 : </span><span class="user-input">7</span>

7 은(는) 홀수입니다.`,
    code: `n = int(input("숫자를 입력하세요 : "))

if n % 2 == 0:
    print(n, "은(는) 짝수입니다.")
else:
    print(n, "은(는) 홀수입니다.")`
  },
  {
    id: 5,
    title: "학교 성적 계산기",
    difficulty: "중급",
    description: "국어, 수학, 영어 점수를 입력받아 평균과 등급을 계산하는 프로그램입니다. 점수 범위 검증이 포함되어 있습니다.",
    sampleIO: `<span class="prompt">국어 점수를 입력하세요 : </span><span class="user-input">105</span>
0~100 사이의 점수를 입력해주세요.
<span class="prompt">국어 점수를 입력하세요 : </span><span class="user-input">85</span>
<span class="prompt">수학 점수를 입력하세요 : </span><span class="user-input">72</span>
<span class="prompt">영어 점수를 입력하세요 : </span><span class="user-input">90</span>

=== 성적 결과 ===
국어 : 85 점
수학 : 72 점
영어 : 90 점
평균 : 82.3 점
등급 : B`,
    code: `subjects = ["국어", "수학", "영어"]
scores = []

for s in subjects:
    while True:
        score = int(input(s + " 점수를 입력하세요 : "))
        if score < 0 or score > 100:
            print("0~100 사이의 점수를 입력해주세요.")
        else:
            break
    scores.append(score)

avg = sum(scores) / len(scores)

if avg >= 90: grade = "A"
elif avg >= 80: grade = "B"
elif avg >= 70: grade = "C"
elif avg >= 60: grade = "D"
else: grade = "F"

print("\\n=== 성적 결과 ===")
for i in range(len(subjects)):
    print(subjects[i], ":", scores[i], "점")
print("평균 :", round(avg, 1), "점")
print("등급 :", grade)`
  },
  {
    id: 6,
    title: "가위바위보",
    difficulty: "중급",
    description: "컴퓨터와 가위바위보 대결을 하는 게임입니다. 잘못된 입력 검증과 전적 기록이 포함되어 있습니다.",
    sampleIO: `<span class="prompt">가위/바위/보 (종료: q) : </span><span class="user-input">주먹</span>
올바른 입력이 아닙니다.
<span class="prompt">가위/바위/보 (종료: q) : </span><span class="user-input">가위</span>
컴퓨터: 보
승리!
<span class="prompt">가위/바위/보 (종료: q) : </span><span class="user-input">바위</span>
컴퓨터: 바위
무승부!
<span class="prompt">가위/바위/보 (종료: q) : </span><span class="user-input">q</span>

결과 - 승:1 패:0 무:1`,
    code: `import random

choices = ["가위", "바위", "보"]
win = lose = draw = 0

while True:
    player = input("가위/바위/보 (종료: q) : ")
    if player == "q": break
    if player not in choices:
        print("올바른 입력이 아닙니다."); continue

    computer = random.choice(choices)
    print("컴퓨터:", computer)

    if player == computer:
        print("무승부!"); draw += 1
    elif (player=="가위" and computer=="보") or \\
         (player=="바위" and computer=="가위") or \\
         (player=="보" and computer=="바위"):
        print("승리!"); win += 1
    else:
        print("패배!"); lose += 1

print(f"\\n결과 - 승:{win} 패:{lose} 무:{draw}")`
  },
  {
    id: 7,
    title: "숫자 맞추기 게임",
    difficulty: "중급",
    description: "1~100 사이의 랜덤 숫자를 맞추는 게임입니다. 10번의 기회 안에 정답을 찾아야 하며, 범위 검증이 포함되어 있습니다.",
    sampleIO: `<span class="prompt">1~100 사이 숫자를 맞춰보세요!</span>
<span class="prompt">기회는 10번입니다.</span>

<span class="prompt">숫자를 입력하세요 : </span><span class="user-input">200</span>
1~100 사이의 숫자를 입력해주세요.
<span class="prompt">숫자를 입력하세요 : </span><span class="user-input">50</span>
더 큰 숫자입니다. (남은 기회: 9)
<span class="prompt">숫자를 입력하세요 : </span><span class="user-input">75</span>
더 작은 숫자입니다. (남은 기회: 8)
<span class="prompt">숫자를 입력하세요 : </span><span class="user-input">63</span>
정답! 3번 만에 맞췄습니다!`,
    code: `import random

answer = random.randint(1, 100)
tries = 0
max_tries = 10

print("1~100 사이 숫자를 맞춰보세요!")
print(f"기회는 {max_tries}번입니다.")

while tries < max_tries:
    guess = int(input("숫자를 입력하세요 : "))
    if guess < 1 or guess > 100:
        print("1~100 사이의 숫자를 입력해주세요.")
        continue
    tries += 1

    if guess == answer:
        print(f"정답! {tries}번 만에 맞췄습니다!")
        break
    elif guess < answer:
        print(f"더 큰 숫자입니다. (남은 기회: {max_tries-tries})")
    else:
        print(f"더 작은 숫자입니다. (남은 기회: {max_tries-tries})")
else:
    print(f"게임 오버! 정답은 {answer}였습니다.")`
  },
  {
    id: 8,
    title: "텍스트 RPG",
    difficulty: "중급",
    description: "몬스터를 처치하고 아이템을 얻는 텍스트 기반 RPG 게임입니다. 다양한 입력 검증과 전투 시스템이 포함되어 있습니다.",
    sampleIO: `<span class="prompt">용사의 이름을 입력하세요 : </span><span class="user-input">홍길동</span>

홍길동 용사여, 모험을 시작합니다!

슬라임이(가) 나타났다! (HP:20)
<span class="prompt">1.공격 2.아이템 3.도망 : </span><span class="user-input">공격</span>
1, 2, 3 중에 입력해주세요.
<span class="prompt">1.공격 2.아이템 3.도망 : </span><span class="user-input">1</span>
18 데미지!
적의 반격! 내 HP: 95
<span class="prompt">1.공격 2.아이템 3.도망 : </span><span class="user-input">1</span>
14 데미지!
슬라임 처치! 포션 획득!
<span class="prompt">계속하시겠습니까? (y/n) : </span><span class="user-input">maybe</span>
y 또는 n을 입력해주세요.
<span class="prompt">계속하시겠습니까? (y/n) : </span><span class="user-input">n</span>

최종 기록: 1마리 처치`,
    code: `import random

name = input("용사의 이름을 입력하세요 : ")
hp = 100
items = []
kills = 0
monsters = [
    {"name":"슬라임","hp":20,"atk":5},
    {"name":"고블린","hp":35,"atk":12},
    {"name":"드래곤","hp":80,"atk":25}
]

print(f"\\n{name} 용사여, 모험을 시작합니다!")

while hp > 0:
    monster = random.choice(monsters).copy()
    print(f"\\n{monster['name']}이(가) 나타났다! (HP:{monster['hp']})")

    while monster["hp"] > 0 and hp > 0:
        action = input("1.공격 2.아이템 3.도망 : ")
        if action not in ["1", "2", "3"]:
            print("1, 2, 3 중에 입력해주세요.")
            continue
        if action == "1":
            dmg = random.randint(10, 25)
            monster["hp"] -= dmg
            print(f"{dmg} 데미지!")
            if monster["hp"] > 0:
                hp -= monster["atk"]
                print(f"적의 반격! 내 HP: {hp}")
        elif action == "2":
            if "포션" in items:
                hp = min(100, hp+30)
                items.remove("포션")
                print(f"포션 사용! HP: {hp}")
            else:
                print("아이템이 없습니다.")
        elif action == "3":
            print("도망쳤다!"); break

    if monster["hp"] <= 0:
        kills += 1
        if random.random() > 0.5:
            items.append("포션")
            print("포션 획득!")

    while True:
        cont = input("계속하시겠습니까? (y/n) : ")
        if cont not in ["y", "n"]:
            print("y 또는 n을 입력해주세요.")
        else:
            break
    if cont != "y": break

print(f"\\n최종 기록: {kills}마리 처치")`
  }
];

/* ===== STATE ===== */
const PW = '8889';
const state = {
  currentView: 'list',
  currentProblem: null,
  currentFilter: 'all',
  unlocked: false
};

/* ===== DOM HELPER ===== */
const $ = id => document.getElementById(id);

/* ===== ROUTING ===== */
function handleRoute() {
  const hash = location.hash;
  if (hash.startsWith('#problem/')) {
    const id = parseInt(hash.split('/')[1]);
    showDetail(id);
  } else {
    showList();
  }
}

/* ===== LIST VIEW ===== */
function showList() {
  state.currentView = 'list';
  state.currentProblem = null;
  $('view-list').style.display = '';
  $('view-detail').style.display = 'none';
  document.title = '융합코딩부 Online Judge';
  renderTable();
}

function renderTable() {
  const filter = state.currentFilter;
  const filtered = filter === 'all'
    ? PROBLEMS
    : PROBLEMS.filter(p => p.difficulty === filter);

  const tbody = $('problem-tbody');
  tbody.innerHTML = '';

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    const diffClass = p.difficulty === '초급' ? 'easy' : 'mid';
    tr.innerHTML =
      `<td class="cell-id">${p.id}</td>` +
      `<td><a href="#problem/${p.id}">${p.title}</a></td>` +
      `<td><span class="diff-badge diff-${diffClass}">${p.difficulty}</span></td>`;
    tr.addEventListener('click', () => { location.hash = `#problem/${p.id}`; });
    tbody.appendChild(tr);
  });
}

function setFilter(filter) {
  state.currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderTable();
}

/* ===== DETAIL VIEW ===== */
function showDetail(id) {
  const problem = PROBLEMS.find(p => p.id === id);
  if (!problem) { location.hash = ''; return; }

  state.currentView = 'detail';
  state.currentProblem = problem;

  $('view-list').style.display = 'none';
  $('view-detail').style.display = '';
  document.title = `#${problem.id} ${problem.title} - 융합코딩부 OJ`;

  $('detail-id').textContent = problem.id;
  $('detail-title').textContent = problem.title;

  const diffEl = $('detail-diff');
  diffEl.textContent = problem.difficulty;
  diffEl.className = 'diff-badge diff-' + (problem.difficulty === '초급' ? 'easy' : 'mid');

  $('detail-desc').textContent = problem.description;
  $('detail-terminal').innerHTML = problem.sampleIO;

  const codeSection = $('code-section');
  const codeBlock = $('detail-code');
  const pwDetail = $('pw-input-detail');

  if (state.unlocked) {
    codeBlock.innerHTML = highlightPython(problem.code);
    codeSection.classList.add('unlocked');
    pwDetail.disabled = true;
    const s = $('pw-status-detail');
    s.textContent = '코드 열람이 활성화되었습니다.';
    s.className = 'pw-status success';
  } else {
    codeBlock.innerHTML = '';
    codeSection.classList.remove('unlocked');
    pwDetail.disabled = false;
    pwDetail.value = '';
    $('pw-status-detail').textContent = '';
    $('pw-status-detail').className = 'pw-status';
  }
}

/* ===== PASSWORD SYSTEM ===== */
function pwCheck(inputId) {
  const input = $(inputId);
  const val = input.value;

  if (val === PW) {
    state.unlocked = true;

    // Update both password UIs
    ['pw-input-list', 'pw-input-detail'].forEach(id => {
      const el = $(id);
      if (el) el.disabled = true;
    });
    ['pw-status-list', 'pw-status-detail'].forEach(id => {
      const el = $(id);
      if (el) {
        el.textContent = '코드 열람이 활성화되었습니다.';
        el.className = 'pw-status success';
      }
    });

    // Show code if on detail page
    if (state.currentView === 'detail' && state.currentProblem) {
      $('detail-code').innerHTML = highlightPython(state.currentProblem.code);
      $('code-section').classList.add('unlocked');
    }
  } else {
    const statusId = inputId === 'pw-input-list' ? 'pw-status-list' : 'pw-status-detail';
    const statusEl = $(statusId);
    statusEl.textContent = '비밀번호가 틀렸습니다.';
    statusEl.className = 'pw-status error';
  }
}

/* ===== PYTHON SYNTAX HIGHLIGHTING ===== */
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightPython(code) {
  const tokens = [];
  let lastIndex = 0;

  // Master regex: comments | strings | keywords | builtins | numbers
  const re = /(#[^\n]*)|(f?"""[\s\S]*?"""|f?'''[\s\S]*?'''|f?"(?:[^"\\]|\\.)*"|f?'(?:[^'\\]|\\.)*')|\b(if|elif|else|while|for|in|break|continue|def|class|import|from|return|True|False|None|not|and|or)\b|\b(print|input|int|str|float|len|sum|round|min|max|range|append|remove|copy|choice|randint|random)\b|\b(\d+\.?\d*)\b/g;

  let m;
  while ((m = re.exec(code)) !== null) {
    if (m.index > lastIndex) {
      tokens.push(escapeHtml(code.slice(lastIndex, m.index)));
    }

    const escaped = escapeHtml(m[0]);

    if (m[1])      tokens.push('<span class="syn-comment">' + escaped + '</span>');
    else if (m[2]) tokens.push('<span class="syn-string">' + escaped + '</span>');
    else if (m[3]) tokens.push('<span class="syn-keyword">' + escaped + '</span>');
    else if (m[4]) tokens.push('<span class="syn-builtin">' + escaped + '</span>');
    else if (m[5]) tokens.push('<span class="syn-number">' + escaped + '</span>');
    else           tokens.push(escaped);

    lastIndex = re.lastIndex;
  }

  if (lastIndex < code.length) {
    tokens.push(escapeHtml(code.slice(lastIndex)));
  }

  return tokens.join('');
}

/* ===== INIT ===== */
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  ['pw-input-list', 'pw-input-detail'].forEach(id => {
    const el = $(id);
    if (el) {
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter') pwCheck(id);
      });
    }
  });

  handleRoute();
});
