var user_id = document.querySelector(".user")
var password = document.querySelector(".password")
var use_name = document.querySelector(".name")
var country = document.querySelector(".country")
var code = document.querySelector(".code")
var email = document.querySelector(".email")

var invalid_user_id = document.querySelector(".invalid_user_id")
var invalid_password = document.querySelector(".invalid_password")
var invalid_name = document.querySelector(".invalid_name")
var empty_error_country = document.querySelector(".empty_error_country")
var invalid_code = document.querySelector(".invalid_code")
var invalid_email = document.querySelector(".invalid_email")


// sự kiện blur của user id
user_id.addEventListener("blur", function(){
    let a = user_id.value.length
    if(user_id.value.trim()=="" || a<5 || a>12){
        user_id.style.borderBottomColor = "red"
        invalid_user_id.textContent = "User ID must be between 5 and 12 characters long"
    }
    else{
        user_id.style.borderBottomColor = "#37893c"
        invalid_user_id.textContent = ""
    }
})

// sự kiện blur của password
password.addEventListener("blur", function(){
    var a = password.value.length
    if(password.value.trim()=="" ||a<7 || a>12){
        password.style.borderBottomColor = "red"
        invalid_password.textContent = "User ID must be between 7 and 12 characters long"
    }
    else{
        password.style.borderBottomColor = "#37893c"
        invalid_password.textContent = ""
    }
})

// sự kiện blur của name
use_name.addEventListener("blur",function(){
    const reg = /^[A-Za-z]{1,}$/
    if(use_name.value.trim()=="" || reg.test(use_name.value)==false){
        use_name.style.borderBottomColor = "red"
        invalid_name.textContent = "Names consist of letters only"
    }
    else{
        use_name.style.borderBottomColor = "#37893c"
        invalid_name.textContent = ""
    }
})

// sự kiện blur của country
// console.log(country)
// console.log(country.value)

// sự kiện blur của ZIP code
code.addEventListener("blur", function(){
    if(isNaN(code.value) || code.value.trim() == ""){
        code.style.borderBottomColor = "red"
        invalid_code.textContent = "code only include the number"
    }
    else{
        code.style.borderBottomColor = "#37893c"
        invalid_code.textContent = ""
    }
})

// sự kiện blur của email
var reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/
email.addEventListener("blur", function(){
    if(email.value.trim() == "" || reg.test(email.value)==false){
        email.style.borderBottomColor = "red"
        invalid_email.textContent = "invalid email"
    }
    else{
        email.style.borderBottomColor = "#37893c"
        invalid_email.textContent = ""
    }
})

