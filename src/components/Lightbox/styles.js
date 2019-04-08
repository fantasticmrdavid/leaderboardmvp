import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: ${props => (props.active ? 12 : -1)};
  opacity: ${props => (props.active ? 1 : 0)};
  background: ${theme.colorLightbox};
`;
