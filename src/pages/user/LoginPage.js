import styled from "styled-components";
import {ErrorText, InputWrapper, RequiredInput} from "../../styles/common/InputStyles";
import {NavLink} from "../../styles/common/NavStyles";
import {useCallback, useState} from "react";
import {Container, PageTitle} from "../../styles/common/FrameStyles";

function LoginPage() {
    const [userInputs, setUserInputs] = useState({
        id: '',
        password: '',
    })

    const [isEmpty, setIsEmpty] = useState({
        id: false,
        password: false,
    });

    const {id, password} = userInputs;

    const onChange = useCallback(e => {
        e.preventDefault();
        const {value, name} = e.target;

        setUserInputs(prev => ({
            ...prev,
            [name]: value
        }));

        setIsEmpty(prev => ({
            ...prev,
            [name]: false
        }));
    }, []);

    const onClick = useCallback(e => {
        e.preventDefault();

        if (!userInputs.password) setIsEmpty({...isEmpty, password: true});
        if (!userInputs.id) setIsEmpty({...isEmpty, id: true});

        if (userInputs.id && userInputs.password) {
            setUserInputs({ id: '', password: '' });
            setIsEmpty( {id: false, password: false});
            console.log(userInputs);
        }

    }, [userInputs, isEmpty])

    return (
        <Container>
            <NavLink to={"/"}>뒤로</NavLink>
            <LoginDiv>
                <PageTitle>로그인</PageTitle>
                <LoginInputDiv>
                    <InputWrapper>
                        <RequiredInput
                            name="id"
                            placeholder="아이디"
                            onChange={onChange}
                            $isError={isEmpty.id}
                            value={id || ''}
                            autoFocus
                        />
                        {isEmpty.id && <ErrorText> '아이디를 입력해주세요'</ErrorText>}
                    </InputWrapper>
                    <InputWrapper>
                        <RequiredInput
                            name="password"
                            placeholder="비밀번호"
                            type="password"
                            onChange={onChange}
                            $isError={isEmpty.password}
                            value={password || ''}
                        />
                        {isEmpty.password && <ErrorText>'비밀번호를 입력해주세요' </ErrorText>}
                    </InputWrapper>
                    <LoginBtn onClick={onClick}>로그인</LoginBtn>
                    <SignUpBtn id="signUpBtn">회원가입</SignUpBtn>
                </LoginInputDiv>
            </LoginDiv>
        </Container>
    );
}

export default LoginPage;

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
    
    &:hover {
        cursor: pointer;
    }
`;

const SignUpBtn = styled.button`
    border: none;
    background: none;
    font-weight: bold;

    display: flex;
    left: 0;

    &:hover {
        cursor: pointer;
    }
`;