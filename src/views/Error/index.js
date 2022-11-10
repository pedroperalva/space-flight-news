import styles from "./error.module.scss";

function Error() {
  return (
    <div className="w-100 d-flex justify-content-center mt-5">
      <div className={styles.error}>
        <h1>404 not found!</h1>
      </div>
    </div>
  );
}

export default Error;
