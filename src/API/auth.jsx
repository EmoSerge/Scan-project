import axios from "axios";
import { LOGIN_URL, LOGIN_INFO_URL } from "./API.jsx";

async function logIn(userName, password) {
    return await axios({
        url: LOGIN_URL,
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            login: userName,
            password: password,
        },
    })
        .then((res) => {
            console.log("Logged in successfully");
            localStorage.setItem("TOKEN", res.data.accessToken);
            localStorage.setItem("EXPIRE", res.data.expire);
            return res.data.accessToken;
        })
        .catch((e) => {
            console.log("Authorization issues...", e);
        });
}

async function accountInfo(token) {
    if (token) {
        return await axios({
            url: LOGIN_INFO_URL,
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log("Account info is received successfully");
                return res.data.eventFiltersInfo;
            })
            .catch((e) => console.log("Failed receiving data..."));
    } else {
        console.log("You are not authorized");
    }
}

export { logIn, accountInfo };
