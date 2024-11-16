import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top from "../../components/Top";
import { Container, ContentContainer, PageTitle } from "../../styles/common/FrameStyles";
import { Input, InputWrapper } from "../../styles/common/InputStyles";
import { SubmitBtn } from "../../styles/common/ButtonStyles";

const REGIONS = {
    경기도: ['수원', '고양', '용인', '성남', '부천'],
    강원도: ['춘천', '원주', '강릉', '속초'],
    충청도: ['청주', '천안', '아산', '공주'],
    전라도: ['전주', '군산', '익산', '목포'],
    경상도: ['부산', '대구', '울산', '포항'],
    제주도: ['제주시', '서귀포시']
};

const USER_TYPES = {
    business: { value: 'business', label: '소상공인', color: 'indianred' },
    influencer: { value: 'influencer', label: '인플루언서', color: 'dodgerblue' }
};

const INITIAL_FORM_STATE = {
    username: '',
    password: '',
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
};

const FORM_FIELDS = {
    common: [
        { name: 'username', type: 'text', placeholder: '아이디', label: '아이디' },
        { name: 'password', type: 'password', placeholder: '비밀번호', label: '비밀번호' },
        { name: 'email', type: 'email', placeholder: '이메일', label: '이메일' },
        {
            name: 'genderType',
            type: 'radio',
            placeholder: '성별',
            label: '성별',
            options: ['남성', '여성'],
            component: 'radio'
        },
        { name: 'birthDate', type: 'date', placeholder: '생년월일', label: '생년월일' },
        { name: 'region', type: 'select', component: 'regionSelect', label: '지역' }
    ],
    business: [
        {
            name: 'storeType',
            type: 'select',
            placeholder: '가게 유형',
            label: '가게 유형',
            options: ['식당', '술집', '카페', '베이커리', '디저트'],
            component: 'select'
        },
        { name: 'storeName', type: 'text', placeholder: '가게 이름', label: '가게 이름' },
        { name: 'storeAddress', type: 'text', placeholder: '가게 주소', label: '가게 주소' }
    ],
    influencer: [
        {
            name: 'snsType',
            type: 'select',
            placeholder: 'SNS 타입',
            label: 'SNS 타입',
            options: ['인스타그램', '블로그', '유튜브', '틱톡'],
            component: 'select'
        },
        { name: 'snsUrl', type: 'url', placeholder: 'SNS 링크', label: 'SNS 링크' },
        { name: 'followerCount', type: 'number', placeholder: '팔로워 수', label: '팔로워 수' }
    ]
};

const RadioField = React.memo(({ field, name, value, onChange }) => (
    <FieldWrapper>
        <FieldLabel>{field.label}</FieldLabel>
        <RadioGroup>
            {field.options.map(option => (
                <RadioLabel key={option}>
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={value === option}
                        onChange={onChange}
                    />
                    {option}
                </RadioLabel>
            ))}
        </RadioGroup>
    </FieldWrapper>
));

const SelectField = React.memo(({ field, name, value, onChange }) => (
    <FieldWrapper>
        <FieldLabel>{field.label}</FieldLabel>
        <SelectInput>
            <select name={name} value={value} onChange={onChange}>
                <option value="">선택하세요</option>
                {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </SelectInput>
    </FieldWrapper>
));

const RegionField = React.memo(({ value, onChange }) => (
    <FieldWrapper>
        <FieldLabel>지역</FieldLabel>
        <RegionInputGroup>
            <select
                value={value.province}
                onChange={(e) => onChange('province', e.target.value)}
            >
                <option value="">도/시 선택</option>
                {Object.keys(REGIONS).map(province => (
                    <option key={province} value={province}>{province}</option>
                ))}
            </select>
            {value.province && (
                <select
                    value={value.city}
                    onChange={(e) => onChange('city', e.target.value)}
                >
                    <option value="">시/군/구 선택</option>
                    {REGIONS[value.province].map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            )}
        </RegionInputGroup>
    </FieldWrapper>
));

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('business');
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

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
        navigate('/login');
        alert('회원가입되셨습니다!');
    };

    const renderField = (field) => {
        const fieldKey = `field-${field.name}`;

        switch (field.component) {
            case 'radio':
                return (
                    <RadioField
                        key={fieldKey}
                        field={field}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                    />
                );
            case 'select':
                return (
                    <SelectField
                        key={fieldKey}
                        field={field}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                    />
                );
            case 'regionSelect':
                return (
                    <RegionField
                        key={fieldKey}
                        value={formData.region}
                        onChange={handleRegionChange}
                    />
                );
            default:
                return (
                    <FieldWrapper key={fieldKey}>
                        <FieldLabel>{field.label}</FieldLabel>
                        <Input
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                        />
                    </FieldWrapper>
                );
        }
    };

    const renderFormFields = () => {
        const fieldsToRender = [...FORM_FIELDS.common, ...FORM_FIELDS[userType]];
        return fieldsToRender.map(renderField);
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

const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
`;

const FieldLabel = styled.label`
    min-width: 100px;
    text-align: right;
    font-weight: 500;
`;

const RadioGroup = styled.div`
    display: flex;
    gap: 20px;
    flex: 1;
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 100px;
    padding: 8px 16px;

    &:hover {
        background: #ebebeb;
    }
`;

const SelectInput = styled.div`
    flex: 1;

    select {
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;

        &:focus {
            outline: none;
            border-color: #666;
        }
    }
`;

const RegionInputGroup = styled.div`
    display: flex;
    gap: 10px;
    flex: 1;

    select {
        flex: 1;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;

        &:focus {
            outline: none;
            border-color: #666;
        }
    }
`;

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