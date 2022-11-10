import Button from "react-bootstrap/Button";
import styles from "./article.module.scss";
import dayjs from "dayjs";

function Article(props) {
  const article = props.article;
  const articleContainer = {
    display: "flex",
    maxWidth: "700px",
    flexDirection: props.index % 2 === 0 ? "row" : "row-reverse",
  };
  const btnContainer = {
    display: "flex",
    justifyContent: props.index % 2 === 0 ? "flex-end" : "flex-start",
    justifySelf: "flex-end",
  };
  return (
    <div style={articleContainer}>
      <img
        src={article.imageUrl}
        className={styles.image}
        alt={article.title}
      ></img>
      <section
        className={
          props.index % 2 === 0
            ? "d-flex flex-column justify-content-between ms-4"
            : "d-flex flex-column justify-content-between me-4"
        }
      >
        <div>
          <h5>{article.title}</h5>
          <section className={styles.infosContainer}>
            <p>
              <small>{dayjs(article.publishedAt).format("DD/MM/YYYY")}</small>
            </p>
            <p className={styles.newsSite}>{article.newsSite}</p>
          </section>
          <p className="lh-1 mt-2">
            <small>{article.summary}</small>
          </p>
        </div>
        <div style={btnContainer}>
          <Button size="sm" onClick={() => props.onClick(article)}>
            Ver Mais
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Article;
