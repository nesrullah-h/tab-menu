function openTab(evt, CName) {
    var i, click, link;
    click = document.getElementsByClassName("click");

    for (i = 0; i < click.length; i++) {
      click[i].style.display = "none";
    }
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active", "");
    }

    document.getElementById(CName).style.display = "block";
    evt.currentTarget.className += " active";
  }