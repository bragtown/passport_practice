var signupDiv = document.getElementById("signup");
var logoutDiv = document.getElementById("logout");
var loginDiv = document.getElementById("login");

var divs = [signupDiv, logoutDiv, loginDiv]

var adjFcn = function(curDiv){
 return function(){
  for(s in divs){
  	divs[s].style.display = "none";
  }
  console.log(curDiv);
  curDiv.style.display = "block";
 }
}

document.getElementById("openRegister").addEventListener("click", adjFcn(signupDiv));
document.getElementById("openLogout").addEventListener("click", adjFcn(logoutDiv));
document.getElementById("openLogin").addEventListener("click", adjFcn(loginDiv));

