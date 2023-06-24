import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import "./ContentModal.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "../Carousel/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TransitionsModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=faec6b2058b683dd7b0e4c761e877f7a&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=faec6b2058b683dd7b0e4c761e877f7a&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        show={open}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="transition-modal-title"
      >
        {content && (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="transition-modal-title">
                {content.name || content.title} (
                {(content.first_air_date ||
                  content.release_date ||
                  "-----"
                ).substring(0, 4)}
                )
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <div className="ContentModal__about">
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <p className="ContentModal__description">
                    {content.overview}
                  </p>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="secondary"
                    startIcon={<YouTubeIcon />}
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
              <img
                src={
                  content.backdrop_path
                    ? `${img_500}/${content.backdrop_path}`
                    : unavailableLandscape
                }
                alt={content.name || content.title}
                className="ContentModal__landscape"
              />
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}
