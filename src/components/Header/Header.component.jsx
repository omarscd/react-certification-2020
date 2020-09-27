import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <NavLink to="/fake-route">Test</NavLink>
        </HeaderElement>
        <HeaderElement>2</HeaderElement>
      </HeaderSection>
      <HeaderSection>
        <HeaderElement>3</HeaderElement>
        <HeaderElement>4</HeaderElement>
      </HeaderSection>
    </Container>
  );
};

export default Header;
