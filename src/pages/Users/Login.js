import styled from "styled-components";
import {LoginInput} from "../../styles/common/Inputs";
import {NavLink} from "../../styles/common/NavStyles";

function Login() {

    return (
        <>
            <Container>
                <NavLink to={"/"}>뒤로</NavLink>
                <LoginDiv>
                    <PageTitle>로그인</PageTitle>
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
    justify-content: center;
`

const PageTitle = styled.h1`
    text-align: center;
`

const LoginDiv = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;

    :nth-child(n) {
        gap: 15px;
    }
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