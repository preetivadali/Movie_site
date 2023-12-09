import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Movies.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movies = ({ title, posterPath, voteAverage, releaseDate, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="movie-card">
      <img className="movie-poster" src={API_IMG + posterPath} alt={title} onClick={handleShow} />
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
