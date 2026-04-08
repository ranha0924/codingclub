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