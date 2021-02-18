import React from 'react';
import Meta from '../../components/Meta';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Index.module.css';

const ArticlePage = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Meta title={`${article.title} | Next`} />
      <h1 className={styles.title}>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">
        <a className={styles.button}>&larr; Go Back</a>
      </Link>
    </div>
  );
};

export default ArticlePage;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();

//   const articleIds = articles.map((x) => x.id);

//   return {
//     paths: articleIds.map((id) => ({ params: { id: id.toString() } })),
//     fallback: false,
//   };
// };
