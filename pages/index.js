import ArticleList from '../components/Article/ArticleList';
import Header from '../components/Header';
import styles from '../styles/Index.module.css';

const Home = (props) => {
  const { articles } = props;

  return (
    <div className={styles.container}>
      <Header />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
