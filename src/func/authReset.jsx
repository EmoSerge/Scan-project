function authReset(setter, redirection) {
    localStorage.setItem("TOKEN", "");
    localStorage.setItem("EXPIRE", "");
    localStorage.setItem("AuthStatus", false);
    localStorage.setItem("CompaniesUsed", "");
    localStorage.setItem("CompaniesLimit", "");
    setter(false);
    console.log("Logged out...");
    redirection("/");
}

export { authReset };
