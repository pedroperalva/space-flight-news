import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./searchbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar(props) {
  return (
    <div className={styles.searchbarContainer}>
      <Form.Control
        data-cy="searchbar"
        type="text"
        id="searchbar"
        aria-describedby="passwordHelpBlock"
        placeholder="Search"
        className="me-2"
        onChange={props.onChange}
      />
      <Button variant="primary" onClick={props.onClick} data-cy="searchbarBtn">
        <AiOutlineSearch />
      </Button>
    </div>
  );
}

export default SearchBar;
