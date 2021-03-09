import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../GlobalContext';
import { StyledAbout } from './styled';

export const About = () => {
  const [word] = useContext(Context);
  return (
    <StyledAbout>
      <Link to="/">Ir para Home</Link>
      Essa é a nossa página de Sobre e esse é o termo pesquisado: {word}
    </StyledAbout>
  );
};
