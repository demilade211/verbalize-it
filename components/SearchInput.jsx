import React from 'react'
import styled from "styled-components";

const SearchInput = ({ place, withIcon, image, type, onChange, name, value, errors }) => {
  return (
    <InputLabelCon>
      <InputCon>
        {withIcon && <img src={image} alt="img" />}
        <input type={type} placeholder={place} onChange={onChange} name={name} value={value} />
      </InputCon>
      {errors?.inputName === name && errors?.isError && <ErrorMessage>{errors.message}</ErrorMessage>}
    </InputLabelCon>

  )
}
const InputLabelCon = styled.div`
    margin-bottom:0px;
`;
const ErrorMessage = styled.div` 
    color: red; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:5px;
`;

const InputCon = styled.div`
    width: 100%;
    height:45px;
    display:flex; 
    align-items:center;
    border-radius: 40px;
    background: rgba(245, 245, 245, 1);   
    padding:10px 20px; 
    img{
        margin-right:10px;
        width:25px;
        height:25px;
    }
    input{
      width:100%;
      background:none;
      border:none;
      outline:none;
      color: #FFF;
      color: var(--pure-black, #000); 
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 100% */
      &::placeholder {
        color: rgba(113, 113, 113, 1); 
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px; /* 100% */
      }

    }
`;

export default SearchInput