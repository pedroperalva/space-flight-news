import styles from "./header.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import SearchBar from "../SearchBar";

function Header() {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  function handleInputValue(event) {
    setValue(event.target.value);
  }

  function handleSelectValue(event) {
    if (event.target.value === "2") {
      setSort("publishedAt");
    } else {
      setSort("");
    }
  }

  async function searchArticles() {
    navigate(`/`, {
      state: { sort: sort, title: value },
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.formsContainer}>
        <SearchBar onClick={searchArticles} onChange={handleInputValue} />
        <Form.Select style={{ width: "150px" }} onChange={handleSelectValue}>
          <option value="1">Mais Novas</option>
          <option value="2">Mais Antigas</option>
        </Form.Select>
      </div>
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img
          className={styles.headerImg}
          src="https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/static/home/img/launcher.png"
          alt="logo"
        />
        <h3>Space Flight News</h3>
      </div>
    </header>
  );
}

export default Header;
