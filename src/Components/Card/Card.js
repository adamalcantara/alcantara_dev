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
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShow1 = () => setShowModal1(true)
    const handleClose1 = () => setShowModal1(false)
    const handleShow2 = () => setShowModal2(true)
    const handleClose2 = () => setShowModal2(false)

    const cardInfo = [
        { id: "stockchasr", text: "StockChasr", modalheading: "StockChasr", modaltext: "StockChasr Modal", handleShow: handleShow1, handleClose: handleClose1, show: showModal1, modalTitle: "StockChasr", modalText: "StockChasr Modal" },
        { id: "andChill", text: "&Chill", modalheading: "&Chill", modaltext: "&Chill Modal", handleShow: handleShow2, handleClose: handleClose2, show: showModal2, modalTitle: "&Chill", modalText: "&Chill Modal" },
    ];

    const renderCard = (card, index) => {
        return (
            <div>
                <div className="card" id={card.id} key={index} onClick={card.handleShow}>

                    <div className="overlay">
                        <div className="text">{card.text}</div>
                    </div>

                </div>

                <Modal show={card.show} onHide={card.handleClose}>
                        <Modal.Title>{card.modalTitle}</Modal.Title>
                    <Modal.Body>{card.modalText}</Modal.Body>
                        <Button variant="secondary" onClick={card.handleClose}>
                            Close
                        </Button>
                </Modal>

                {/* <Modal show={showModal2} onHide={card.handleClose}>
                        <Modal.Title>2</Modal.Title>
                    <Modal.Body>2</Modal.Body>
                        <Button variant="secondary" onClick={card.handleClose}>
                            Close
                        </Button>
                </Modal> */}
            </div>
        );
    };

    return <div className="container">
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card;