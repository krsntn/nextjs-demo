import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Demo</span> Nextjs
      </h1>
      <p className={styles.description}>A sample site to test/demo Nextjs</p>
      <p className={styles.note}>
        Home page uses SSG (getStaticProps) to render the 6 articles below, when
        click into the article page, it uses SSR (getServerSideProps) to
        retrieve the article details by id (the id can be more than 6).
      </p>
    </div>
  );
};

export default Header;
