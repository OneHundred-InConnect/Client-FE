import styled from "styled-components";
import Top from "../../components/Top";
import {Button1} from "../../styles/common/Buttons";
import {LoginInput} from "../../styles/common/Inputs";
import {useState} from "react";

function Login() {
    const [isBusiness, setBusiness] = useState(true);

    const handleTypeBtnClick = e => {  // 토글로 구현하셈
        e.preventDefault();

        setBusiness(!isBusiness);

        if(isBusiness) {
            e.target.style.color = "white";
            e.target.style.backgroundColor = "dodgerblue";
            e.target.style.borderColor = "dodgerblue";
        }
        else {
            e.target.style.color = "grey";
            e.target.style.borderColor = "lightgrey";
            e.target.style.backgroundColor = "white";
        }

    }

    return (
        <>
            <Top/>
            <Container>
                <ImgDiv/>
                <LoginDiv>
                    <PageTitle>로그인</PageTitle>
                    <LoginTypeDiv>
                        <Button1 onClick={handleTypeBtnClick}>소상공인</Button1>
                        <Button1 onClick={handleTypeBtnClick}>인플루언서</Button1>
                    </LoginTypeDiv>
                    <LoginInputDiv>
                        <LoginInput type="text" id="id" placeholder="아이디" required autoFocus></LoginInput>
                        <LoginInput type="text" id="password" placeholder="비밀번호" required></LoginInput>
                        <LoginBtn id="loginBtn">로그인</LoginBtn>
                        <SignUpBtn id="signUpBtn">회원가입</SignUpBtn>
                    </LoginInputDiv>
                </LoginDiv>

            </Container>
        </>
    );
}

export default Login;

const Container = styled.div`
    padding-top: 70px;
    display: flex;
    
`

const PageTitle = styled.h1`
`

const ImgDiv = styled.div`
    width: 500px;
    height: 600px;

`;

const LoginDiv = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;

    :nth-child(n) {
        gap: 8px;
    }
`;

const LoginTypeDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    
    margin-bottom: 8px;
`;

const LoginInputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginBtn = styled.button`
    height: 50px;

    font-size: 16px;
    font-weight: bold;
    color: white;
    background: dodgerblue;
    border: none;
    border-radius: 5px;
`;

const SignUpBtn = styled.button`
    border: none;
    background: none;
    font-weight: bold;

    display: flex;
    left: 0;
`;