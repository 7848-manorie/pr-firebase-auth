import React from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id: "824774775059-if4h77pkr79nsl1l4jtd8vkl105divpu.apps.googleusercontent.com",
            callback: handleResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById("googleSignin"),
            {
                theme : "outline",
                size : "large"
            }
        );
    },[])

    const handleResponse = (response) => {
        const userObject = jwtDecode(response.credential);
        console.log("User  :", userObject);
        localStorage.setItem("User", JSON.stringify(userObject));
        window.location.href = "/home";
    }
    return (
        <>
            <div id="googleSignin" style={{width: "300px", margin: "0 auto"}}></div>
        </>
    )
}
export default GoogleLogin;