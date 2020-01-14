import React from 'react';

import { StyledContainer, LinkNotes, StyledLink } from './styles';

import Todos from '../../components/Todos';

const Home = () => (
  <StyledContainer>
    <LinkNotes>
      <StyledLink to="/notes">Notes</StyledLink>
    </LinkNotes>
    <Todos />
  </StyledContainer>
);

export default Home;
