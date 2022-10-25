window.addEventListener("DOMContentLoaded", () => {
    // checkCookie() ? 0 : window.location.href = "../../index.html";
    const logoutButton = document.querySelector("#logout-button");
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        // document.cookie = "rememberMe = false; max-age=86400; path=/";
        window.location.href = "../index.html"
    })
})