let userId =  /^[a-z0-9]{5,12}$/


let txtUser = document.getElementById('txtUser')
let userError = document.getElementById('userError')
let submit = document.getElementById('btnCheck')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(userId.test(txtUser.value)){
        userError.textContent = 'Bạn có thể sử dụng ID này'
        userError.style.color = 'blue'
    }else{
        userError.textContent = 'ID không hợp lệ'
        userError.style.color = 'red'
    }
})

let passWord =  /^[a-z0-9]{5,12}$/

let txtPass = document.getElementById('txtPass')
let passError = document.getElementById('passError')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(passWord.test(txtPass.value)){
        passError.textContent = 'Bạn có thể sử dụng Password này'
        passError.style.color = 'blue'
    }else{
        passError.textContent = 'Password không hợp lệ'
        passError.style.color = 'red'
    }
})

let nameUser =  /^[a-z]$/

let txtName = document.getElementById('txtName')
let nameError = document.getElementById('nameError')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(nameUser.test(txtName.value)){
        nameError.textContent = 'Bạn có thể sử dụng tên này'
        nameError.style.color = 'blue'
    }else{
        nameError.textContent = 'Tên không hợp lệ'
        nameError.style.color = 'red'
    }
})


let txtAddress = document.getElementById('txtAddress')
let addressError = document.getElementById('addressError')

submit.addEventListener('click',function(e){
    e.preventDefault();
    addressError.textContent = 'Địa chỉ hợp lệ';
    addressError.style.color = 'blue';
})

let zipCode = /^[0-9]{5-12}$/

let txtZip = document.getElementById('txtZip')
let zipError = document.getElementById('zipError')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(zipCode.test(txtZip.value)){
        zipError.textContent = 'Bạn có thể sử dụng tên này'
        zipError.style.color = 'blue'
    }else{
        zipError.textContent = 'Tên không hợp lệ'
        zipError.style.color = 'red'
    }
})

let Email = /^([a-z0-9_\.-]+)@tlu\.edu\.vn$/

let txtEmail = document.getElementById('txtEmail')
let emailError = document.getElementById('emailError')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(Email.test(txtEmail.value)){
        emailError.textContent = 'Bạn có thể sử dụng tên này'
        emailError.style.color = 'blue'
    }else{
        emailError.textContent = 'Tên không hợp lệ'
        emailError.style.color = 'red'
    }
})


