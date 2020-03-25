const allLinks = document.querySelectorAll('#nav-bar a');
for (var i = 0, length = allLinks.length; i < length; i++) {
  allLinks[i].onclick = function() {
    var currentPage = document.querySelector("#nav-bar li.active");
    if (currentPage) {
      currentPage.classList.remove("active");
      this.parentNode.classList.add('active');
  }
  };
}
