import { API_KEY } from "@/utils/api_key";
import Link from "next/link";
import styles from "../../styles/news.module.scss";

export default function News({ data }) {
  return (
    <div className={styles.News}>
      <h1> Live: Around The World</h1>
      {data.map((article) => (
        <div className={styles.newsCard} key={article.title}>
          <Link href={`/news/${article.title}`}>
            <div className={styles.imageContainer}>
              <img src={article.urlToImage} alt={article.title} priority />
              <h2 className={styles.titleImage}>{article.title} </h2>
            </div>
            <div className={styles.articleContent}>
              <div className={styles.articleTitle}>
                <p>{article.description}</p>
              </div>
              <div className={styles.articleAuthor}>
                <h4>{article.author}</h4>
                <p>{article.publishedAt}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

/* FETCH */
export async function getStaticProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&pageSize=20&language=en&apiKey=${API_KEY}`
  );

  const data = await res.json();

  console.log(data);

  return {
    props: {
      data: data.articles,
    },
  };
}
