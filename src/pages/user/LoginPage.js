import styled from "styled-components";
import {ErrorText, InputWrapper, RequiredInput} from "../../styles/common/InputStyles";
import {useCallback, useState} from "react";
import {Container, LinkDefault, PageTitle} from "../../styles/common/FrameStyles";
import {Link, useNavigate} from "react-router-dom";
import Top from "../../components/Top";

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

    const navigate = useNavigate();

    return (
        <>
            <Top/>
            <Container>
                <LoginDiv>
                    <PageTitle>로그인</PageTitle>
                    <InputWrapper>
                        <RequiredInput
                            name="id"
                            placeholder="아이디"
                            onChange={onChange}
                            $isError={isEmpty.id}
                            value={id || ''}
                            autoFocus
                        />
                        {isEmpty.id && <ErrorText>아이디를 입력해주세요.</ErrorText>}
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
                        {isEmpty.password && <ErrorText>비밀번호를 입력해주세요.</ErrorText>}
                    </InputWrapper>
                    <LoginBtn onClick={onClick}>로그인</LoginBtn>
                    <LinkDefault to="signUp" className='black'>회원가입</LinkDefault>
                </LoginDiv>
            </Container>
        </>
    );
}

export default LoginPage;

const LoginDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;   
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

const SignUpLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
`
