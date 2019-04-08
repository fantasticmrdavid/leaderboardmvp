import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
  background: ${theme.colorCharcoal};
  color: ${theme.colorWhite};
  box-shadow: ${theme.dropShadow};
  z-index: 2;
`;

export const Logo = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 1.5rem;
  text-transform: lowercase;
`;

export const Option = styled.div`
  cursor: pointer;
`;
