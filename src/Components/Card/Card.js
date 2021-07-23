import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import "./Card.css";

//image imports
import StockChasrScreenshot from "../../Assets/screenshots/stockchasrscreenshot.png";
import andChillScreenshot from "../../Assets/screenshots/andchillscreenshot.png"
import CinePareScreenshot from "../../Assets/screenshots/cineparescreenshot.png"

function Card() {
    const [show, setShow] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const handleShow1 = () => setShowModal1(true)
    const handleClose1 = () => setShowModal1(false)
    const handleShow2 = () => setShowModal2(true)
    const handleClose2 = () => setShowModal2(false)
    const handleShow3 = () => setShowModal3(true)
    const handleClose3 = () => setShowModal3(false)

    const cardInfo = [
        { id: "stockchasr", text: "StockChasr", handleShow: handleShow1, handleClose: handleClose1, show: showModal1, modalTitle: "StockChasr", modalText1: "Using the Market Stack API, and the Polygon API, my final group project for my coding boot camp involved building a stock application that lets users create a watch list and track stocks they might want to buy.  The greatest undertaking for me in this project was creating the interactive chart that users see once they search for a stock.", modalText2: "StockChasr was built using React as the framework, and I was primarily responsible for the chart, which used CanvasJS, the look of the dashboard, which used Material UI, and the styling which was done with CSS.", img: StockChasrScreenshot, project: "https://stockchasr.herokuapp.com/", github: "https://github.com/adamalcantara/stockchasr" },
        { id: "andChill", text: "&Chill", handleShow: handleShow2, handleClose: handleClose2, show: showModal2, modalTitle: "&Chill", modalText1: "Built primaily with Handlebars, this application allows users to sign up and create an account. Once signed up, users will be matched with other users whose movie watching preferences match their own.", modalText2: "&Chill was built using Handlebars. I was responsible for the routing of the Handlebars files, the back end work which was done with SQL, and some of the CSS", img: andChillScreenshot, project: "https://and--chill.herokuapp.com/", github: "https://github.com/adamalcantara/andChill" },
        { id: "cinepare", text: "CinePare", handleShow: handleShow3, handleClose: handleClose3, show: showModal3, modalTitle: "CinePare", modalText1: "Based on the idea that great indecisiveness can come about when picking what movie to watch, the first group project of my boot camp aims to give users base statistics about movies they want to watch in order to help them make decisions.", modalText2: "Built with HTML, CSS, and JavaScript, this uses the OMDb and TMDb APIs in order to display data about the movies the user searches.", img: CinePareScreenshot, project: "https://adamalcantara.github.io/cinepare/", github: "https://github.com/adamalcantara/cinepare" },

    ];

    const renderCard = (card, index) => {
        return (
            <div>
                <div className="card" id={card.id} key={index} onClick={card.handleShow}>

                    <div className="overlay">
                        <div className="text">{card.text}</div>
                    </div>

                </div>

                <Modal show={card.show} onHide={card.handleClose} dialogClassName="modal-90w" className="modalArea">
                    <Modal.Title className="modalBox">{card.modalTitle}</Modal.Title>
                    <Modal.Body id="modaltext">
                        <div id="imgDiv">
                        <img src={card.img} id="img"></img>
                        </div>
                        <p>{card.modalText1}</p>
                        <p>{card.modalText2}</p>
                        <div id="modalBtns">
                        <a href={card.project} target="_blank" className="modalBtns">Deployed Project</a>
                        <a href={card.github} target="_blank" className="modalBtns">Github Repository</a>
                        </div>
                    </Modal.Body>
                    <div id="modalFooter">
                        <Button variant="secondary" onClick={card.handleClose} id="modalBtn">
                            Close
                        </Button>
                    </div>

                </Modal>

            </div>
        );
    };

    return <div className="container">
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card;