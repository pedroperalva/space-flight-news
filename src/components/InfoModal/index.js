import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./infoModal.module.scss";
import dayjs from "dayjs";

function InfoModal(props) {
  const article = props.article;

  const redirect = () => {
    window.open(article.url, "_blank");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
    >
      <Modal.Body>
        <div className="d-flex flex-column align-items-center p-5">
          <section className={styles.articleContainer}>
            <img
              src={article && article.imageUrl}
              className={styles.image}
              alt={article && article.title}
            ></img>
            <section className="ms-4">
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
