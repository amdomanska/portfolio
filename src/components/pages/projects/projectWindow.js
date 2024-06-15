import {useRef, useEffect} from "react";
import {Button, Modal} from "react-bootstrap";
import {Cursor} from "../../elements/cursor";

export const ProjectWindow = ({children, handleClose}) => {
     // Create a ref for the Modal.Header
    const modalHeaderRef = useRef(null);

    useEffect(() => {
        if (modalHeaderRef.current) {
            // Find the close button within the Modal.Header
            const closeButton = modalHeaderRef.current.querySelector('.btn-close');
            if (closeButton) {
                closeButton.classList.add('hover-this');
            }
        }
    }, []); // Re-run the effect when the modal is shown

    return (
        <>
            <Modal className="project-page" id="project-page--doaj" show={true} onHide={handleClose}>
                <Modal.Header closeButton ref={modalHeaderRef}>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Cursor/>
        </>
    )
}