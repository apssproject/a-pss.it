$("#mainimg").addClass("img_loaded");
document.getElementById("signup").onmouseenter = function() {
  document.getElementById("signup_arrow").classList.add("signup_arrow_hide");
}
document.getElementById("login").onmouseenter = function() {
  document.getElementById("login_arrow").classList.add("login_arrow_hide");
}
document.getElementById("login").onmouseleave = function() {
  document.getElementById("login_arrow").classList.remove("login_arrow_hide");
}
document.getElementById("signup").onmouseleave = function() {
  document.getElementById("signup_arrow").classList.remove("signup_arrow_hide");
}
document.getElementById("signin").onmouseenter = function() {
  document.getElementById("signin_arrow").classList.add("signin_arrow_hide");
}
document.getElementById("signin").onmouseleave = function() {
  document.getElementById("signin_arrow").classList.remove("signin_arrow_hide");
}
document.getElementById("developers").onmouseenter = function() {
  document.getElementById("arrow_developers").classList.add("arrow_link_show");
}
document.getElementById("developers").onmouseleave = function() {
  document.getElementById("arrow_developers").classList.remove("arrow_link_show");
}
document.getElementById("blog").onmouseenter = function() {
  document.getElementById("arrow_blog").classList.add("arrow_link_show");
}
document.getElementById("blog").onmouseleave = function() {
  document.getElementById("arrow_blog").classList.remove("arrow_link_show");
}
document.getElementById("whoweare").onmouseenter = function() {
  document.getElementById("whohware_bar").classList.add("bottom_bar_show");
}
document.getElementById("whoweare").onmouseleave = function() {
  document.getElementById("whohware_bar").classList.remove("bottom_bar_show");
}
document.getElementById("about").onmouseenter = function() {
  document.getElementById("about_bar").classList.add("bottom_bar_show");
}
document.getElementById("about").onmouseleave = function() {
  document.getElementById("about_bar").classList.remove("bottom_bar_show");
}
document.getElementById("whyapss").onmouseenter = function() {
  document.getElementById("whyapss_bar").classList.add("bottom_bar_show");
}
document.getElementById("whyapss").onmouseleave = function() {
  document.getElementById("whyapss_bar").classList.remove("bottom_bar_show");
}
document.getElementById("findus").onmouseenter = function() {
  document.getElementById("findus_bar").classList.add("bottom_bar_show");
}
document.getElementById("findus").onmouseleave = function() {
  document.getElementById("findus_bar").classList.remove("bottom_bar_show");
}
document.getElementById("contacts").onmouseenter = function() {
  document.getElementById("contacts_bar").classList.add("bottom_bar_show");
}
document.getElementById("contacts").onmouseleave = function() {
  document.getElementById("contacts_bar").classList.remove("bottom_bar_show");
}
let focus = function() {
 document.getElementById("emailplaceholder").classList.add("transform");
 document.getElementById("txtmail").classList.add("txtbselected");
}
let blur = function() {
  if(document.getElementById("txtemailel").value == "") {
    document.getElementById("emailplaceholder").classList.remove("transform");
    document.getElementById("txtmail").classList.remove("txtbselected");
  }
}
let focusp = function() {
 document.getElementById("pswdplaceholder").classList.add("transform");
 document.getElementById("txtpswd").classList.add("txtbselected");
}
let blurp = function() {
  if(document.getElementById("txtpswdel").value == "") {
    document.getElementById("pswdplaceholder").classList.remove("transform");
    document.getElementById("txtpswd").classList.remove("txtbselected");
  }
}
document.getElementById("txtemailel").onfocus = focus;
document.getElementById("txtemailel").onblur = blur;
document.getElementById("txtpswdel").onfocus = focusp;
document.getElementById("txtpswdel").onblur = blurp;
let xhttp = new XMLHttpRequest();
let login = function() {
  let email = document.getElementById("txtemailel").value;
  let pswd = document.getElementById("txtpswdel").value;

  if (email == "") {
    document.getElementById("errmail").innerHTML = "Enter an email or username";
    document.getElementById("errpswd").innerHTML = "";
  } else {
    if (pswd == "") {
      document.getElementById("errpswd").innerHTML = "Enter a password";
      document.getElementById("errmail").innerHTML = "";
    } else {
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText == 1) {
            document.getElementById("errpswd").innerHTML = "";
            document.getElementById("errmail").innerHTML = "";
          }

          if (this.responseText == 2) {
            document.getElementById("errpswd").innerHTML = "Wrong password";
            document.getElementById("errmail").innerHTML = "";
          }

          if (this.responseText == 3) {
            document.getElementById("errmail").innerHTML = "Email doesen't match any account";
            document.getElementById("errpswd").innerHTML = "";
          }
        }
      };

      xhttp.open("GET", "php/login.php?email="+email+"&pswd="+pswd, true);
      xhttp.send();
    }
  }
}
