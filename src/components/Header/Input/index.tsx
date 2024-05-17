// Styles
import * as S from "./styles";


import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const index = ({ label, ...props }: InputProps) => {
  return (
    <S.Container>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </S.Container>
  );
};

export default index;
