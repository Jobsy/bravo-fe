import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

export const NavText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin-left: 8px;
`;
