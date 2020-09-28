import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from '../SearchBar';

const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;

  -webkit-box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
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

const Icon = styled.img`
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <HeaderSection>
        <HeaderElement>
          <NavLink to="/">Home</NavLink>
        </HeaderElement>
        <HeaderElement>
          <NavLink to="/favorites">Favorites</NavLink>
        </HeaderElement>
        <HeaderElement>
          <SearchBar defaultQuery="Nimrodel" />
        </HeaderElement>
      </HeaderSection>
      <HeaderSection>
        <HeaderElement>
          <NavLink to="/login">Log in</NavLink>
        </HeaderElement>
        <HeaderElement>
          <Icon src="/key-24px.svg" alt="key" />
        </HeaderElement>
      </HeaderSection>
    </Container>
  );
};

export default Header;
