import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const StyledContainer = styled.div`
  background-color: ${colors.background};
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const LinkNotes = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 35px;
  margin-top: 8px;
  color: #008ae3;
  &:active {
    color: #ed5f87;
  }
`;
