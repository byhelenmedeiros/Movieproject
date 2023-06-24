import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { Container } from "react-bootstrap";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=faec6b2058b683dd7b0e4c761e877f7a&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <Container>
      <div>
        <h1 className="pageTitle">Trending Today</h1>
        <div>
      <h4>
        Discover the hottest and most thrilling movies that are trending right now! From epic superhero sagas to gripping dramas and hilarious comedies, there's a variety of options to cater to every taste. 
      </h4>
    </div>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))}
        </div>
        <CustomPagination setPage={setPage} />
      </div>
    </Container>
  );
};

export default Trending;
