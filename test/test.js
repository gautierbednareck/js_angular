var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";
    document.getElementById("btnbar").style.bottom = "0";
  } else {
    document.getElementById("navbar").style.bottom = "-60px";
    document.getElementById("btnbar").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}