import React, {useState} from 'react';
import styled from "styled-components";
import {Container, ContentContainer, PageTitle} from "../../styles/common/FrameStyles";
import Top from "../../components/Top";
import {Input, InputWrapper} from "../../styles/common/InputStyles";
import {SubmitBtn} from "../../styles/common/ButtonStyles";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [userType, setUserType] = useState('business');
    const [signUpInput, setSignUpInput] = useState({
        username: "",
        password: "",
        email: "",
        genderType: "",
        birthDate: "",
        region: "",
        storeType: "",
        storeName: "",
        storeAddress: "",
        snsType: "",
        snsUrl: "",
        followerCount: "",
    });

    const commonFields = [
        { name: 'username', type: 'text', placeholder: '아이디' },
        { name: 'password', type: 'password', placeholder: '비밀번호' },
        { name: 'email', type: 'email', placeholder: '이메일' },
        { name: 'genderType', type: 'text', placeholder: '성별' },
        { name: 'birthDate', type: 'date', placeholder: '생년월일' },
        { name: 'region', type: 'text', placeholder: '지역' }
    ];

    const businessFields = [
        { name: 'storeType', type: 'number', placeholder: '가게 유형' },
        { name: 'storeName', type: 'text', placeholder: '가게 이름' },
        { name: 'storeAddress', type: 'text', placeholder: '가게 주소' }
    ];


    const influencerFields = [
        { name: 'snsType', type: 'text', placeholder: 'SNS 유형' },
        { name: 'snsUrl', type: 'text', placeholder: 'SNS 링크' }
    ];
    const onTypeBtnClick = e => {
        e.preventDefault();
        setUserType(e.target.id);
        console.log("signup type: " + e.target.id);

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpInput(prev => ({
            ...prev,
            [name]: value
        }));

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signUpInput);
        navigate('/login');
    };
    return (
        <>
            <Top/>
            <Container>
                <ContentContainer>
                    <PageTitle>회원가입</PageTitle>
                    <UserTypeWrapper>
                        <UserTypeBtn id="business" onClick={onTypeBtnClick}>소상공인</UserTypeBtn>
                        <UserTypeBtn id="influencer" onClick={onTypeBtnClick}>인플루언서</UserTypeBtn>
                    </UserTypeWrapper>

                    <form onSubmit={handleSubmit}>
                        <InputWrapper>
                            {commonFields.map(field => (
                                <Input
                                    key={field.name}
                                    {...field}
                                    value={signUpInput[field.name]}
                                    onChange={handleInputChange}
                                />
                            ))}

                            {userType === 'business'
                                ? businessFields.map(field => (
                                    <Input
                                        key={field.name}
                                        {...field}
                                        value={signUpInput[field.name]}
                                        onChange={handleInputChange}
                                    />
                                ))
                                : influencerFields.map(field => (
                                    <Input
                                        key={field.name}
                                        {...field}
                                        value={signUpInput[field.name]}
                                        onChange={handleInputChange}
                                    />
                                ))
                            }
                            <SubmitBtn type="submit">가입하기</SubmitBtn>
                        </InputWrapper>
                    </form>
                </ContentContainer>
            </Container>
        </>
    );
};

export default SignUpPage;

const UserTypeWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`
const UserTypeBtn = styled.button`
    width: 150px;
    height: 50px;
    border: 2px solid gray;
    border-radius: 12px;

    font-size: 20px;
    font-weight: bold;
    text-align: center;
    align-content: center;
    background: white;
    
    &#business {
        color: indianred;
        border-color: indianred;
    }

    &#influencer {
        color: dodgerblue;
        border-color: dodgerblue;
    }

    &:hover {
        background: #eaeaea;
    }
`