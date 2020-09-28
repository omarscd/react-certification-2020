import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Message = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const HomeLink = styled(Link)`
  color: ${(props) => props.theme.colors.font};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  transition: color 0.3s ease-in-out;
`;

function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <div>
          <img src="/404.gif" alt="page not found" />
        </div>
        <Message>This is not the page you are lookin for</Message>
        <HomeLink to="/">Return to home page</HomeLink>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
