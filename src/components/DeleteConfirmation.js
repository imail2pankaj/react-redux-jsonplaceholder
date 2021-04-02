import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap';
import { deletePost } from '../actions/postActions';

const DeleteConfirmation = ({ postId, show, handleClose }) => {
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(deletePost(postId));
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete?</p>
                <p><span className="text-danger">This operation can not be undone.</span></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" focus="true" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={() => handleSubmit()}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteConfirmation;