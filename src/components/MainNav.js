import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FiTrendingUp, FiFilm, FiTv, FiSearch } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SimpleBottomNavigation() {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  useEffect(() => {
    handleNavigation("/");
  }, []); // Redirecionar para a página inicial ao montar o componente

  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Nav className="mx-auto">
        <Nav.Link onClick={() => handleNavigation("/")}>
          <FiTrendingUp />
          Trending
        </Nav.Link>
        <Nav.Link onClick={() => handleNavigation("/movies")}>
          <FiFilm />
          Movies
        </Nav.Link>
        <Nav.Link onClick={() => handleNavigation("/series")}>
          <FiTv />
          TV Series
        </Nav.Link>
        <Nav.Link onClick={() => handleNavigation("/search")}>
          <FiSearch />
          Search
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
