import React from 'react';
import Meta from '../components/Meta';

const About = (props) => {
  const { articles } = props;

  return (
    <div>
      <Meta title="About | Next" />
      <h1>About</h1>
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
