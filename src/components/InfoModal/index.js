import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./infoModal.module.scss";
import dayjs from "dayjs";
import useWindowDimensions from "../../composables/windowUseDimensions";

function InfoModal(props) {
  const article = props.article;
  const { width } = useWindowDimensions();
  const redirect = () => {
    window.open(article.url, "_blank");
  };
  return (
    <Modal
      {...props}
      size={width > 768 ? "lg" : "sm"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
    >
      <Modal.Body>
        <div
          className={
            width > 768
              ? "d-flex flex-column align-items-center p-5"
              : "d-flex flex-column align-items-center p-1"
          }
        >
          <section className={styles.articleContainer}>
            <img
              src={article && article.imageUrl}
              className={styles.image}
              alt={article && article.title}
            ></img>
            <section className={width > 999 ? "ms-4" : "mx-2"}>
              <h5>{article && article.title}</h5>
              <p>
                <small>
                  {dayjs(article && article.publishedAt).format("DD/MM/YYYY")}
                </small>
              </p>
              <p className="lh-1 mt-2">{article && article.summary}</p>
            </section>
          </section>
          <Button className="mt-5" onClick={redirect}>
            Ir para o site
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default InfoModal;
