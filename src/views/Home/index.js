import { useEffect, useState } from "react";
import http from "../../services/http";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Article from "../../components/Article";
import InfoModal from "../../components/InfoModal";

function Home() {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpened, setModal] = useState(false);
  const [article, setArticle] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function searchArticles() {
      try {
        setLoading(true);
        const response = await http.get("/articles", {
          params: {
            _limit: limit,
            title_contains: location.state ? location.state.title : "",
            _sort: location.state ? location.state.sort : "",
          },
        });
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        navigate(`/error`);
      }
    }

    searchArticles();
  }, [location, limit, navigate]);

  const handleModal = (article) => {
    setModal(!isModalOpened);
    setArticle(article);
  };
  return (
    <div className="d-flex flex-column align-items-center my-5">
      {isLoading && limit === 10 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        articles.map((article, i) => {
          return (
            <section className="mb-5" key={article.id}>
              <Article
                article={article}
                index={i}
                onClick={handleModal}
              ></Article>
            </section>
          );
        })
      )}
      {isLoading && limit > 10 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : isLoading ? (
        <></>
      ) : (
        <Button
          data-cy="loadBtn"
          onClick={() => setLimit(limit + 10)}
          className="mt-5"
        >
          Carregar Mais
        </Button>
      )}
      <InfoModal
        article={article}
        show={isModalOpened}
        onHide={handleModal}
      ></InfoModal>
    </div>
  );
}

export default Home;
