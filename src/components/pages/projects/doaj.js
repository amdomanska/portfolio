import {Button, Modal} from "react-bootstrap";
import {Cursor} from "../../elements/cursor";

export const Doaj = ({handleClose}) => {

    return (
        <>
            <Modal className="project-page" id="project-page--doaj" show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Cursor />
        </>
    )
}