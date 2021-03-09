import React from 'react';
import { StyledButton, StyledForm, StyledInput } from './styled';

export const Search = ({
  title,
  buttonTitle,
  onSubmit,
  handleSubmit,
  register,
  ...props
}) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name="searchValue"
        placeholder={title}
        ref={register}
        {...props}
      />
      <StyledButton>{buttonTitle}</StyledButton>
    </StyledForm>
  );
};
