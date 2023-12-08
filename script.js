const form_data = document.getElementById('form-field')

form_data.addEventListener('click',(e)=>{
    e.preventDefault()
    let user_name = document.getElementById('username').value
    let user_email = document.getElementById('email').value
    let user_phone = document.getElementById('phone').value
    let user_password = document.getElementById('password').value
    let user_confirm_password = document.getElementById('confirm-password').value
    let user_check = document.getElementById('check').value
    let date_of_birth = document.getElementById('dob').value
    if(user_name===" "){
        alert('Amma bhan pe Aajaunga me')
    }
})