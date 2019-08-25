import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TypographicSpacer = styled.div`
  width: 8px;
  height: 182px;
  margin: auto 0;
  background: ${props => (props.background ? props.background : '#6a6a6a')};
`;

// export const Cards = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-left: 10px;
// `;

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   width: 200px;
//   height: 160px;
//   padding-left: 25px;
//   border-left: 3px solid #6a6a6a;
// `;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
`;

export const Title = styled.span`
  margin: 10px 0;
  width: 165px;
  height: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

export const CardText = styled.span`
  width: 214px;
  height: 46px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6a6a6a;
`;
