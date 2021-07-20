import React, {useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import "./Card.css";

function Card() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cardInfo = [
        { id: "stockchasr", text: "StockChasr", linkto: "/stockchasr", modalheading: "StockChasr", modaltext: "StockChasr Modal" },
        { id: "andChill", text: "&Chill", linkto: "/andChill", modalheading: "&Chill", modaltext: "&Chill Modal" },
    ];

    const renderCard = (card, index) => {
        return (
            <div>
                <div className="card" id={card.id} key={index} onClick={handleShow}>

                    <div className="overlay">
                        <div className="text">{card.text}</div>
                    </div>

                </div>

                <Modal show={show} onHide={handleClose} id={card.id}>
                        <Modal.Title>{card.modalheading}</Modal.Title>
                    <Modal.Body>{card.modaltext}</Modal.Body>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                </Modal>
            </div>
        );
    };

    return <div className="container">
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card;