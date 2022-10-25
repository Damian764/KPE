const checkCookie = () => {
    if (document.cookie.split(';').some((item) => item.trim().includes('rememberMe=true'))) {
        return true;
    }
    if (document.cookie.split(';').some((item) => item.trim().includes('rememberMe=false'))) {
        return false;
    }
}