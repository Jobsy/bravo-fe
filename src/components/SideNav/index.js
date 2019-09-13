import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../styling/atoms/SVGs/Logo';
import { SideNavContainer } from './sidenav.styles';
import Avatar from './Avatar';
import NavItems from './NavItems';
import logoutIcon from '../../assets/logout-icon.svg';
import NavItem from './NavItem';
import MobileAvatar from './MobileAvatar';
import UIColors from '../../styling/variables/UIColors';

const SideNav = props => {
  const { slack } = props;
  return (
    <SideNavContainer>
      <Link to="/">
        <Logo fillColor={UIColors.light} svgWidth="48px" svgHeight="48px" />
      </Link>
      {slack.user && (
        <MobileAvatar
          link="/profile"
          name={slack.user.name}
          src={slack.user.avatar}
          alt={slack.user.name}
        />
      )}
      {slack.isLoggedIn && <NavItems />}
      {slack.installSuccess && <Avatar src={slack.user.avatar} alt="user-avatar" />}
      {slack.isLoggedIn && <NavItem icon={logoutIcon} label="Logout" link="/logout" />}
    </SideNavContainer>
  );
};

export default connect(
  state => ({
    slack: state.slack,
  }),
  null
)(SideNav);
