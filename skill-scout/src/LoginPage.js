import React from 'react';
import LoginInput from './components/LoginInput';
import Button from "./components/Button";
import styled from 'styled-components';



function LoginPage({handleLogin}) {

    const Logo = styled.h1`
    font-size: 7rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    // padding: 0;
    
    `;

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <div style={{marginTop: "15%"}}>
                <div>
                    <Logo style={{ color: '#3424C6'}}>SkillScout</Logo>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", gap: "20px"}}>
                    <LoginInput 
                        id={"email-login"} 
                        style={{width: "80%", height: "30px", backgroundColor: "white"}} 
                        type={"text"}
                        placeholder={"Email"}/>
                    <LoginInput 
                        id={"password-login"} 
                        style={{width: "80%", height: "30px", backgroundColor: "white"}} 
                        type={"password"}
                        placeholder={"Password"}/>
                    <Button onClick={handleLogin} text={"Login"}/>
                </div>
                
            </div>
        </div> 
    )
}

export default LoginPage