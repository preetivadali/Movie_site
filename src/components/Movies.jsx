// Movies.jsx

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Movies.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movies = ({ title, posterPath, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="movie-card">
      <Link to={`/movies/${title}`}>
        <img
          className="movie-poster"
          src={API_IMG + posterPath}
          alt={title}
          onClick={handleShow}
        />
      </Link>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-responsive">
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>
          <img className="modal-img" src={API_IMG + posterPath} alt={title} />
          <p>{overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Movies;
