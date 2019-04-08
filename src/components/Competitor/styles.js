import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25px auto 40% 35px;
  grid-column-gap: 15px;
  text-transform: capitalize;
  font-size: ${props => (props.leader ? '1.35rem' : '1rem')};
  font-weight: ${props => (props.leader ? 500 : undefined)};
  padding: 0.25em 0;
  text-align: left;
`;

export const Firstname = styled.div`
`;

export const Position = styled.div`
  text-align: right;
`;

export const Surname = styled.div`
  text-transform: uppercase;
`;

export const Score = styled.div`
  text-align: center;
`;
