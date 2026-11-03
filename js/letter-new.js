const audio = document.getElementById('music');
const toggle = document.getElementById('music-toggle');
const label = document.getElementById('music-label');
function reflectMusic() {
  const playing = !audio.paused;
  toggle.setAttribute('aria-pressed', String(playing));
  toggle.setAttribute('aria-label', playing ? '暂停背景音乐' : '播放背景音乐');
  label.textContent = playing ? '暂停音乐' : '播放音乐';
}
audio.addEventListener('play', reflectMusic);
audio.addEventListener('pause', reflectMusic);
toggle.addEventListener('click', async () => {
  if (audio.paused) { try { await audio.play(); } catch (_) { label.textContent = '音乐暂不可播放'; } }
  else audio.pause();
});
document.getElementById('open-letter').addEventListener('click', () => {
  const letter = document.getElementById('letter');
  letter.hidden = false;
  letter.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  if (audio.paused) audio.play().catch(() => reflectMusic());
});
document.getElementById('surprise-button').addEventListener('click', function () {
  const surprise = document.getElementById('surprise');
  surprise.hidden = !surprise.hidden;
  this.setAttribute('aria-expanded', String(!surprise.hidden));
  if (!surprise.hidden) surprise.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest'});
});
