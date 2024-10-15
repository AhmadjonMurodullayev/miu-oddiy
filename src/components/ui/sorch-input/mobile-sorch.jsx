import React from "react";
import styled from "@emotion/styled";
import InputSorchIcons from "../../../assets/icons/input-sorch-icons";
 const Input = styled.input`
   width: 100%;
   border: none;
   background-color: #EFF3F6;
   padding: 6px 10px 6px 36px;
   outline-color: #618C78;
   &::placeholder {
     font-weight: 400;
     font-size: 14px;
     line-height: 100%;
     color: #000;
     opacity: 0.5;
   }

 `

 const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const IconWrapper = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;


export const MobileSearchInput = ({ onChange }) => {
  return (
    <InputWrapper>
    <IconWrapper>

    <InputSorchIcons/>
    </IconWrapper>
    <Input onChange={onChange} placeholder="Поиск " />
    </InputWrapper>
  )
}
