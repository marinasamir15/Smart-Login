
var username=document.getElementById("username");
var logoutbtn=document.getElementById("logout")
function dataInfo() {
    var logInUser = localStorage.getItem("logInUser");
    if (logInUser) {
        username.innerText ="Welcome "+ logInUser;
    }
}
dataInfo();
function logout(){
    localStorage.removeItem('logInUser')
    
}
logoutbtn.addEventListener("click",function(){
    logout()
})