import React from 'react';
import moment from 'moment';
import { CommentCardContainer, CommentHeader, CommentTime, CommentText } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const CommentCard = ({ name, avatar, text, timestamp }) => (
  <CommentCardContainer>
    <CommentHeader>
      <User img={avatar || placeholder} name={name} />
      <CommentTime>{moment(timestamp).fromNow()}</CommentTime>
    </CommentHeader>
    <CommentText>{text}</CommentText>
  </CommentCardContainer>
);

export default CommentCard;
