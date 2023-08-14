
document.getElementById('login-btn').addEventListener("click", function () {

    // Dom elements
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailValue = email.value;
    const passwordValue = password.value;

    // validation
    if ((emailValue == "rasel" || emailValue == 'rasel@mail.com') && passwordValue == 123) {
        console.log('valid user');
    } else {
        alert("You Typed wrong user name/password")
    }


})