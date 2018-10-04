function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("header");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("header");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function includeFooter() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("footer");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("footer");
          includeFooter();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

window.onload = includeFooter();
window.onload = includeHTML();


/*
//this works but it overwrites the whole body. 
var text;
text = ' <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">' +
                '<a class=\"navbar-brand\" href=\"#\">Navbar</a>'
                + '<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">'
                + ' <span class=\"navbar-toggler-icon\"></span>'
               +' </button>'
              + '<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">'
              +   '<ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">'
                    +'<li class=\"nav-item active\">'
                     +'<a class=\"nav-link\" href=\"index.html\">index <span class=\"sr-only\">(current)</span></a>'
                    +'</li>'
                    +'<li class=\"nav-item\">'
                      +'<a class=\"nav-link\" href=\"include.html\">Include</a>'
                   + '</li>'
                    +'<li class=\"nav-item\">'
                      +'<a class=\"nav-link disabled\" href=\"#\">Disabled</a>'
                    +'</li>'
                  +'</ul>'
                  +'<form class=\"form-inline my-2 my-lg-0\">'
                    +'<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">'
                   + '<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>'
                  +'</form>'
               +'</div>'
              
              + '</nav>';

document.getElementById("header").innerHTML = text;



var v = new FileReader();
v.readAsText();

*/