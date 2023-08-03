function authCheck(token, expireDate, setter, redirection) {
    if (token && expireDate) {
        const now = new Date();
        if (Date.parse(expireDate) > Date.parse(now)) {
            localStorage.setItem("AuthStatus", true);
            setter(true);
            redirection("/");
        }
    } else {
        localStorage.setItem("AuthStatus", false);
        setter(false);
        localStorage.setItem("TOKEN", "");
        localStorage.setItem("EXPIRE", "");
        localStorage.setItem("CompaniesUsed", "");
        localStorage.setItem("CompaniesLimit", "");
        redirection("/error");
    }
}

function authControl(token, expireDate, setter) {
    if (token && expireDate) {
        const now = new Date();
        if (Date.parse(expireDate) > Date.parse(now)) {
            localStorage.setItem("AuthStatus", true);
            setter(true);
        }
    } else {
        localStorage.setItem("AuthStatus", false);
        setter(false);
        localStorage.setItem("TOKEN", "");
        localStorage.setItem("EXPIRE", "");
    }
}

export { authControl, authCheck };
