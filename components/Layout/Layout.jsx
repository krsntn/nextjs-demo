import React from 'react';
import Meta from '../Meta';
import Nav from '../Nav';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          Test by&nbsp;
          <a
            href="https://dev.krsn.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            karson
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
