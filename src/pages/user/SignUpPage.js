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

const FORM_CONFIG = {
    common: [
        {
            name: 'username',
            type: 'text',
            placeholder: '아이디',
            component: 'input'
        },
        {
            name: 'password',
            type: 'password',
            placeholder: '비밀번호',
            component: 'input'
        },
        {
            name: 'email',
            type: 'email',
            placeholder: '이메일',
            component: 'input'
        },
        {
            name: 'genderType',
            type: 'radio',
            placeholder: '성별',
            options: ['남성', '여성'],
            component: 'radio'
        },
        {
            name: 'birthDate',
            type: 'date',
            placeholder: '생년월일',
            component: 'input'
        },
        {
            name: 'region',
            type: 'select',
            component: 'regionSelect'
        }
    ],
    business: [
        {
            name: 'storeType',
            type: 'select',
            options: ['식당', '술집', '카페', '베이커리', '디저트'],
            component: 'select'
        },
        {
            name: 'storeName',
            type: 'text',
            placeholder: '가게 이름',
            component: 'input'
        },
        {
            name: 'storeAddress',
            type: 'text',
            placeholder: '가게 주소',
            component: 'input'
        }
    ],
    influencer: [
        {
            name: 'snsType',
            type: 'select',
            placeholder: 'SNS 타입',
            options: ['인스타그램', '블로그', '유튜브', '틱톡'],
            component: 'select'
        },
        {
            name: 'snsUrl',
            type: 'url',
            placeholder: 'SNS 링크',
            component: 'input'
        },
        {
            name: 'followerCount',
            type: 'number',
            placeholder: '팔로워 수',
            component: 'input'
        }
    ]
};

const USER_TYPES = {
    business: { id: 'business', label: '소상공인', color: 'indianred' },
    influencer: { id: 'influencer', label: '인플루언서', color: 'dodgerblue' }
};

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('business');
    const [formData, setFormData] = useState({
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
    };

    const renderField = (field) => {
        switch (field.component) {
            case 'radio':
                return (
                    <RadioGroup key={field.name}>
                        <label>{field.placeholder || field.name}</label>
                        {field.options.map(option => (
                            <RadioLabel key={option}>
                                <input
                                    type="radio"
                                    name={field.name}
                                    value={option}
                                    checked={formData[field.name] === option}
                                    onChange={handleInputChange}
                                />
                                {option}
                            </RadioLabel>
                        ))}
                    </RadioGroup>
                );

            case 'select':
                return (
                    <SelectWrapper key={field.name}>
                        <label>{field.placeholder || field.name}</label>
                        <select
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                        >
                            <option value="">선택하세요</option>
                            {field.options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </SelectWrapper>
                );

            case 'regionSelect':
                return (
                    <RegionWrapper key={field.name}>
                        <label>지역</label>
                        <select
                            value={formData.region.province}
                            onChange={(e) => handleRegionChange('province', e.target.value)}
                        >
                            <option value="">도/시 선택</option>
                            {Object.keys(REGIONS).map(province => (
                                <option key={province} value={province}>
                                    {province}
                                </option>
                            ))}
                        </select>
                        {formData.region.province && (
                            <select
                                value={formData.region.city}
                                onChange={(e) => handleRegionChange('city', e.target.value)}
                            >
                                <option value="">시/군/구 선택</option>
                                {REGIONS[formData.region.province].map(city => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        )}
                    </RegionWrapper>
                );

            default:
                return (
                    <Input
                        key={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                    />
                );
        }
    };

    const renderFormFields = () => {
        const fieldsToRender = [
            ...FORM_CONFIG.common,
            ...FORM_CONFIG[userType]
        ];

        return fieldsToRender.map(renderField);
    };

    return (
        <>
            <Top />
            <Container>
                <ContentContainer>
                    <PageTitle>회원가입</PageTitle>
                    <UserTypeWrapper>
                        {Object.values(USER_TYPES).map(({ id, label }) => (
                            <UserTypeBtn
                                key={id}
                                id={id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setUserType(id);
                                }}
                            >
                                {label}
                            </UserTypeBtn>
                        ))}
                    </UserTypeWrapper>

                    <form onSubmit={handleSubmit}>
                        <InputWrapper>
                            {renderFormFields()}
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
`;

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
        color: ${USER_TYPES.business.color};
        border-color: ${USER_TYPES.business.color};
    }

    &#influencer {
        color: ${USER_TYPES.influencer.color};
        border-color: ${USER_TYPES.influencer.color};
    }

    &:hover {
        background: #eaeaea;
    }
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  
  label {
    margin-right: 10px;
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
  
  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const RegionWrapper = styled(SelectWrapper)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  
  select {
    flex: 1;
  }
`;