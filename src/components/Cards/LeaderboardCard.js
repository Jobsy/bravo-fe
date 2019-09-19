import React from 'react';
import { MemberCardContainer, MemberCardValue, Position } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';
import BravoDollar from '../../assets/bravo-dollar.svg';

const MemberCard = ({ id, name, avatar, wallet, index }) => (
  <MemberCardContainer>
    <Position>
      <p>{index + 1}.</p>
    </Position>
    <User avatar={avatar || placeholder} alt={name} name={name} />
    <MemberCardValue>
      <span role="img" aria-label="ballon">
        🎈
      </span>
      {wallet}
    </MemberCardValue>
  </MemberCardContainer>
);

export default MemberCard;
