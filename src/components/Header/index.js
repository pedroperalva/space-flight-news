import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../services/http";
import Form from "react-bootstrap/Form";
import SearchBar from "../SearchBar";

function Header() {
  const [value, setValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  function handleInputValue(event) {
    setValue(event.target.value);
  }

  function handleSelectValue(event) {
    if (event.target.value === "2") {
      setSort("publishedAt");
      console.log(sort);
    } else {
      setSort("");
    }
  }

  async function searchArticle() {
    console.log(sort);
    try {
      const response = await http.get("/articles", {
        params: {
          title_contains: value,
          _sort: sort,
        },
      });
      setArticles(response.data);
    } catch (error) {
      navigate(`/error`);
    }
  }

  useEffect(() => {
    if (articles.length >= 1) {
      console.log(articles);
      navigate(`/`, {
        state: articles,
      });
      setArticles([]);
    }
  }, [articles, navigate]);

  return (
    <header className={styles.header}>
      <div className={styles.formsContainer}>
        <SearchBar onClick={searchArticle} onChange={handleInputValue} />
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
