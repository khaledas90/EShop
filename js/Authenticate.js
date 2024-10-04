document.addEventListener('DOMContentLoaded', () => {
    let user = JSON.parse(localStorage.getItem("user")) || [];

    const Register = document.querySelector(".Register");
    const NameUser = document.querySelector("#loginName");
    const EmailUser = document.querySelector("#loginEmail");
    const PasswordUser = document.querySelector("#loginPassword");
    const ConfirmPassword = document.querySelector("#loginPasswordConfirm");
    const checkboxinput = document.querySelector("#checkboxinput");

    const validName = document.querySelector(".validName");
    const validEmail = document.querySelector(".validEmail");
    const validPassword = document.querySelector(".validPass");
    const validConfirmPassword = document.querySelector(".validConfirmPass");
    const RememberMe = document.querySelector(".RememberMe");

    var regexPatterns = {
        name: /^[a-zA-Z\s]{2,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    };


    // Register
    function ConfirmRegister(e) {
        e.preventDefault();

        if (!validName || !validEmail || !validPassword || !validConfirmPassword || !RememberMe) {
            Swal.fire({
                icon: "error",
                title: "validation error",
                text: "One or more validation elements are missing in the DOM. ",
            });
            console.error("One or more validation elements are missing in the DOM.");
            return;
        }


        validName.innerHTML = "";
        validEmail.innerHTML = "";
        validPassword.innerHTML = "";
        validConfirmPassword.innerHTML = "";
        NameUser.style.border = "";
        EmailUser.style.border = "";
        PasswordUser.style.border = "";
        ConfirmPassword.style.border = "";
        RememberMe.innerHTML = "";

        let isValid = true;

        // Validate name
        if (!regexPatterns.name.test(NameUser.value)) {
            validName.innerHTML = "Invalid name  ";
            validName.style.color = "#f00";
            NameUser.style.border = "1px solid red";
            isValid = false;
        } else {
            validName.innerHTML = "Valid name ";
            validName.style.color = "#17a2b8";
            NameUser.style.border = "1px solid green";
        }

        // Validate email
        if (!regexPatterns.email.test(EmailUser.value)) {
            validEmail.innerHTML = "Invalid email";
            validEmail.style.color = "#f00";
            EmailUser.style.border = "1px solid red";
            isValid = false;
        } else {
            validEmail.innerHTML = "Valid email";
            validEmail.style.color = "#17a2b8";
            EmailUser.style.border = "1px solid green";
        }

        // Validate password
        if (!regexPatterns.password.test(PasswordUser.value)) {
            validPassword.innerHTML = "Invalid password";

            validPassword.style.color = "#f00";
            PasswordUser.style.border = "1px solid red";
            isValid = false;
        } else {
            validPassword.innerHTML = "Valid password";

            validPassword.style.color = "#17a2b8";

            PasswordUser.style.border = "1px solid green";
        }

        // Confirm password
        if (PasswordUser.value !== ConfirmPassword.value) {
            validConfirmPassword.innerHTML = "Passwords do not match";

            validConfirmPassword.style.color = "#f00";
            ConfirmPassword.style.border = "1px solid red";
            isValid = false;
        } else {
            validConfirmPassword.innerHTML = "Valid confirm password";

            validConfirmPassword.style.color = "#17a2b8";
            ConfirmPassword.style.border = "1px solid green";
        }

        // Check if Remember Me checkbox is checked
        if (!checkboxinput.checked) {
            RememberMe.innerHTML = "You must agree to the terms";

            RememberMe.style.color = "#f00";
            isValid = false;
        } else {
            RememberMe.innerHTML = "";

        }

        // If all validations pass
        if (isValid) {
            user.push({
                name: NameUser.value,
                email: EmailUser.value,
                password: PasswordUser.value
            });

            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);

            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "Your account has been created successfully.",
            });

            setTimeout(() => {
                window.location.href = "login.html";
            }, 3000);
        }
    }

    if (Register) {
        Register.addEventListener('click', ConfirmRegister);
    } else {
        console.error("Register button not found.");
    }



    // login

    const LoginBtn = document.querySelector("#loginBtn");
    const loginEmail = document.querySelector("#logininEmail");
    const loginPassword = document.querySelector("#logininPassword");
    const validatePass = document.querySelector(".validatePass");
    const validateEmail = document.querySelector(".validateEmail");




    function ConfirmLogin(e) {
        e.preventDefault();

        if (!loginEmail || !loginPassword) {
            Swal.fire({
                icon: "error",
                title: "validation error",
                text: "One or more validation elements are missing in the DOM. ",
            });
            console.error("One or more validation elements are missing in the DOM.");
            return;
        }

        validateEmail.innerHTML = "";
        validatePass.innerHTML = "";

        let isValid = true;

        // Validate email
        if (!regexPatterns.email.test(loginEmail.value)) {
            validateEmail.innerHTML = "Invalid email";
            validateEmail.style.color = "#f00";
            loginEmail.style.border = "1px solid red";
            isValid = false;
        } else {
            validateEmail.innerHTML = "Valid email";
            validateEmail.style.color = "#17a2b8";
            loginEmail.style.border = "1px solid green";
            isValid = true;
        }
        // Validate password
        if (!regexPatterns.password.test(loginPassword.value)) {
            validatePass.innerHTML = "Invalid password";
            validatePass.style.color = "#f00";
            loginPassword.style.border = "1px solid red";
            isValid = false;
        } else {
            validatePass.innerHTML = "Valid password";
            validatePass.style.color = "#17a2b8";
            loginPassword.style.border = "1px solid green";
            isValid = true;
        }
        if (isValid) {

            let user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                for (let i = 0; i < user.length; i++) {
                    if (user[i].email === loginEmail.value && user[i].password === loginPassword.value) {
                        Swal.fire({
                            icon: "success",
                            title: "Login Successful",
                            text: "You have successfully logged in.",
                        });
                        setTimeout(() => {
                            window.location.href = "profile.html";
                        }, 3000);
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Login Failed",
                            text: "Invalid email or password.",
                        });
                    }
                }
            }
        }
    }


    LoginBtn.addEventListener("click", ConfirmLogin)
});