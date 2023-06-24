import React from "react";
import { Badge } from "react-bootstrap";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import 'bootstrap/dist/css/bootstrap.min.css';


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        pill
        bg={vote_average > 6 ? "primary" : "secondary"}
        className="voteBadge"
      >
        {vote_average}
      </Badge>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <div className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitleDate">{date}</span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
