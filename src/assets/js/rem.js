export default function rem () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 10.8 + 'px';
}
rem();
window.onresize = rem;