import {Input} from "../common/Inputs/Input";
import React from "react";
import {RadioGroup, RadioLabel} from "../common/Inputs/Radio";
import {SelectInput} from "../common/Inputs/Select";
import {REGIONS} from "../../constants/regions";
import styled from "styled-components";

export const RadioField = React.memo(({ field, name, value, onChange }) => (
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

export const SelectField = ({field, name, value, onChange}) => (
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
);

export const RegionField = React.memo(({ value, onChange }) => (
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

export const renderField = (formData, handleInputChange, handleRegionChange) => (field) => {
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
                        value={formData[field.name]}
                        onChange={handleInputChange}
                    />
                </FieldWrapper>
            );
    }
};

const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
`;

const FieldLabel = styled.label`
    min-width: 120px;
    text-align: right;
    font-weight: 500;
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

export default renderField;