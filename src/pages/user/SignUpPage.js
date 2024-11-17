import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top from "../../components/Header";
import { Container, ContentContainer, PageTitle } from "../../styles/common/FrameStyles";
import { InputWrapper } from "../../components/common/Inputs/Input";
import { SubmitBtn } from "../../components/common/Buttons/SubmitBtn";
import { FORM_FIELDS, USER_TYPES } from "../../constants/formFields";
import { renderField } from "../../components/SignUp/FormField";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('business');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        genderType: '',
        birthDate: '',
        region: { province: '', city: '' },
        storeType: '',
        storeName: '',
        storeAddress: '',
        snsType: '',
        snsUrl: '',
        followerCount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegionChange = (type, value) => {
        setFormData(prev => ({
            ...prev,
            region: {
                ...prev.region,
                [type]: value,
                ...(type === 'province' ? { city: '' } : {})
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/login');
        alert('회원가입되셨습니다!');
    };

    const renderFormFields = () => {
        const fieldsToRender = [...FORM_FIELDS.common, ...FORM_FIELDS[userType]];
        return fieldsToRender.map(renderField(formData, handleInputChange, handleRegionChange));
    };

    return (
        <>
            <Top />
            <Container>
                <ContentContainer>
                    <PageTitle>회원가입</PageTitle>
                    <UserTypeWrapper $userType={userType}>
                        <span />
                        {Object.values(USER_TYPES).map(({ value, label }) => (
                            <UserTypeBtn
                                key={`usertype-${value}`}
                                type="button"
                                value={value}
                                $userType={userType}
                                onClick={() => setUserType(value)}
                            >
                                {label}
                            </UserTypeBtn>
                        ))}
                    </UserTypeWrapper>

                    <form onSubmit={handleSubmit}>
                        <InputWrapper>
                            {renderFormFields()}
                            <SubmitBtnWrapper>
                                <SubmitBtn type="submit">가입하기</SubmitBtn>
                            </SubmitBtnWrapper>
                        </InputWrapper>
                    </form>
                </ContentContainer>
            </Container>
        </>
    );
};

const SubmitBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const UserTypeWrapper = styled.div`
    position: relative;
    width: 260px;
    height: 70px;
    margin: 0 auto 50px;
    border-radius: 1500px;
    background: ${({$userType}) =>
            $userType === "business" ? "indianred" : "dodgerblue"};

    span {
        position: absolute;
        width: 130px;
        height: 70px;
        border-radius: 1000px;
        background-color: #ffffff;
        transition: all 0.6s ease-in-out;
        z-index: 1;
        transform: translateX(${({$userType}) =>
                $userType === "business" ? "0px" : "130px"});
    }
`;

const UserTypeBtn = styled.button`
    position: relative;
    width: 130px;
    height: 70px;
    border: none;
    border-radius: 12px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    align-content: center;
    z-index: 2;
    background: transparent;
    color: ${({$userType, value}) =>
            $userType === value ?
                    (value === "business" ? "indianred" : "dodgerblue") :
                    "white"};
`;

export default SignUpPage;