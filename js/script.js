//  transform the form on signup and login clicks
var login = document.querySelector(".login");
var register = document.querySelector(".register");
// var reset=document.querySelector(".reset");
var btnLogin = document.getElementById("login");
var btnregister = document.getElementById("register");
// var btnreset = document.getElementById("reset");

btnLogin.onclick = function () {
    login.classList.add("active");
    // reset.classList.add("inActive");
    register.classList.add("inActive");

}
btnregister.onclick = function () {
    login.classList.remove("active");
    //    reset.classList.add("inActive");
    register.classList.remove("inActive");
}
// btnreset.onclick = function(){   
//    reset.classList.add("active"); 
//    login.classList.add("inactive");   
//    register.classList.add("inActive");   
// }

// The usernamer and passwordr are username and pass in the regitration section 

$("#regbtn").click(function regLog (event) {
    var usernamers = [];
    var passwordrs = [];
    var universitys = [];
    var citys = [];
    var usernamer = usernamers.push($("#usernamer").val());
    var passwordr = passwordrs.push($("#passwordr").val());
    var university = universitys.push($("#university").val());
    var city = citys.push($("#city").val());
    var usernames = usernamers.map();
    var passwords = passwordrs.map();

})
    



