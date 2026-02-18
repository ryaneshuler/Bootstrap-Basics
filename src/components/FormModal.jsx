import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormModal = ({ user, submitted, showModal, handleCloseModal }) => {

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted &&
            <>
              <p>Nice job!  Here is the information returned:</p>
              <p><b>Name: </b>{user.firstName} {user.lastName}</p>
              <p><b>Email: </b>{user.email}</p>
              <p><b>Password: </b>{user.password}</p>
              <p><b>Terms and conditinos: </b>{user.terms}</p>
            </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;