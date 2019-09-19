import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';
import ShapeStyles from '../../styling/variables/ShapeStyles';

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  max-width: 900px;
  width: 100%;
  padding-bottom: 32px;
  padding-left: 50px;
  box-shadow: ${ShapeStyles.elevation.regular};
  background-color: ${colors.white};

  @media (max-width: ${Breakpoints.medium}px) {
    height: initial;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (max-width: ${Breakpoints.small}px) {
    padding-left: 0;
    align-items: center;

    .user {
      flex-direction: column;
      margin: 0;
      align-items: center;

      > *:first-child {
        margin: 0;
      }
    }
  }
`;

export const ProfileNavigation = styled.nav`
  z-index: 2;
  padding-left: 50px;
  max-width: 900px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: ${colors.white};
  box-shadow: ${ShapeStyles.elevation.regular};

  @media (max-width: ${Breakpoints.small}px) {
    padding-left: 0;
    position: sticky;
    top: 0;
    width: 100vw;
    height: 6.2rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }

    > * {
      flex: 0 0 auto;
    }
  }
`;

export const ShoutoutsButton = styled.div`
  text-align: center;
  align-items: center;
  width: 180px;
  height: 4rem;
  font-size: 24px;
  line-height: 29px;
  margin-right: 120px;
  color: ${colors.brand};
  border-bottom: ${props => (props.active ? `4px solid ${colors.brand}` : 'none')};
  cursor: pointer;

  @media (max-width: ${Breakpoints.small}px) {
    margin-right: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Emoji = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 5px;
`;

export const ProfileBody = styled.div`
  margin-top: 40px;
  max-width: 900px;
  width: 100%;
  height: max-content;
`;
