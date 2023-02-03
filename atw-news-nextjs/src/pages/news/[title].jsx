import { API_KEY } from "@/utils/api_key";
import styles from "../../styles/article.module.scss";

const Article = ({ data }) => {
  return (
    <div className={styles.Article}>
      <h3> title {data.title}</h3>
    </div>
  );
};

export default Article;

/* FETCH */
export async function getStaticPaths() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&pageSize=20&language=en&apiKey=${API_KEY}`
  );
  const data = await res.json();

  const paths = data.articles.map((article) => {
    return {
      params: { title: article.title },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const title = context.params.title;
  console.log(context);

  const res = await fetch(
    `https://newsapi.org/v2/${title}/top-headlines?country=us&sortBy=popularity&pageSize=20&language=en/&apiKey=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  let article = JSON.parse(JSON.stringify(data));
  //   console.log(article);

  return {
    props: {
      data: data.articles,
    },
  };
}
