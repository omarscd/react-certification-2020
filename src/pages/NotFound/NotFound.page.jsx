import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import './NotFound.styles.scss';

function NotFoundPage() {
  return (
    <Layout>
      <section className="not-found">
        <Link to="/" className="home-link">
          home
        </Link>
        <img src="/404.gif" alt="page not found" />
      </section>
    </Layout>
  );
}

export default NotFoundPage;
