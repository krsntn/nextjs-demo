import React from 'react';
import Article from './Article';
import styles from './Article.module.css';

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article, index) => (
        <Article article={article} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;
