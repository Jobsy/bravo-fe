import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import colors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';

export const RightBarContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100vh;
  padding: 140px 30px 0px 30px;
  background: #f9fbfd;

  section {
    display: flex;
    flex-direction: column;

    .learn {
      color: #000000;
      font-weight: 300;
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${Breakpoints.medium}px) {
    display: none;
  }
`;

export const RightBarCard = styled(Card)`
  padding: 0px;
  width: 292px;
  min-height: 70px;
  height: 240px;
  margin-bottom: 80px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 10px 10px;
  background: #ffffff;

  header {
    background-color: #6884f1;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);

    img {
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const TextContent = styled.div`
  height: 150px;
  padding: 10px;
  background: #ffffff;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);

  p {
    margin-top: 5px;
    line-height: 1.8;
    margin-bottom: 5px;

    span {
      color: red;
      font-size: 15px;
      font-weight: 300;
      background: #f9fbfd;
    }
  }
`;

export const MediumCard = styled(Card)`
  width: 292px;
  height: 50px;
  display: flex;
  padding: 10px;
  align-items: center;
  margin: 10px 0;
  transition: 0.3s ease-in-out;
  background: #ffffff;
  border-radius: 9.631px;
  box-shadow: 0px 2.8893px 9.631px rgba(0, 0, 0, 0.06);

  p {
    margin-left: 10px;
  }

  .check {
    font-size: 20px;
    font-weight: 50;
    stroke-width: 1.3;
    color: #9e9696;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3.75561px 12.5187px rgba(0, 0, 0, 0.12);

    .check {
      stroke-width: 2;
    }
  }
`;
