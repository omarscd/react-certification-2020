import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from '../SearchBar';

const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
`;

const HeaderSection = styled.div`
  display: flex;
`;

const HeaderElement = styled.div`
  align-self: center;
  margin: 0;
  padding: 0 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;

  :hover {
    color: #dedede;
    transition: color 0.3s ease-in-out;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderSection>
        <HeaderElement>
          <NavLink to="/">Open Sidebar</NavLink>
        </HeaderElement>
        <HeaderElement>
          <SearchBar defaultQuery="Nimrodel" />
        </HeaderElement>
      </HeaderSection>
      <HeaderSection>
        <HeaderElement>
          <NavLink to="/login">Log in</NavLink>
        </HeaderElement>
      </HeaderSection>
    </Container>
  );
};

export default Header;
