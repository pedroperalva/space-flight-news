import Button from "react-bootstrap/Button";
import styles from "./article.module.scss";
import dayjs from "dayjs";
import useWindowDimensions from "../../composables/windowUseDimensions";

function Article(props) {
  const article = props.article;
  const { width } = useWindowDimensions();
  const articleContainer = {
    display: "flex",
    maxWidth: "700px",
    flexDirection: props.index % 2 === 0 ? "row" : "row-reverse",
  };
  const articleContainerMobile = {
    display: "flex",
    maxWidth: "700px",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 40px 0 40px",
    gap: "20px",
  };
  const btnContainer = {
    display: "flex",
    justifyContent: props.index % 2 === 0 ? "flex-end" : "flex-start",
    justifySelf: "flex-end",
  };
  const btnContainerMobile = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };
  return (
    <div style={width > 768 ? articleContainer : articleContainerMobile}>
      <img
        src={article.imageUrl}
        className={styles.image}
        alt={article.title}
      ></img>
      <section className="d-flex flex-column justify-content-between p-3">
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
        <div style={width > 768 ? btnContainer : btnContainerMobile}>
          <Button size="sm" onClick={() => props.onClick(article)}>
            Ver Mais
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Article;
