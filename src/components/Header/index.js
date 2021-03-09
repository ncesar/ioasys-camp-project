import React from 'react';
import { StyledHeaderTitle, StyledHeaderWrapper } from './styled';

export const Header = ({ title = 'Busca de imagens', ...props }) => {
  return (
    <StyledHeaderWrapper {...props}>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </StyledHeaderWrapper>
  );
};
