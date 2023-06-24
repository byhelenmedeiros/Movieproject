import React from "react";
import Pagination from "react-bootstrap/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomPagination.css';



export default function CustomPagination({ setPage, page, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination>
        {Array.from({ length: numOfPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === page}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}
