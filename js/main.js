const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (user && user.username === inputUsername.value && user.password === inputPassword.value) {
      alert("Đăng Nhập Thành Công");
      sessionStorage.setItem('loggedInUser', inputUsername.value);
      window.location.href = "index.html";
    } else {
      alert("Đăng Nhập Thất Bại hoặc tài khoản không tồn tại");
    }
  }
});
