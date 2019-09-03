import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 6rem;
  margin-left: 20rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.8rem;
  color: #000;
  margin-bottom: 4rem;
`;
