import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

export function ModalComponent({data, showModal, handleShow}){
    return(
        <Modal show={showModal}>
            <Modal.Header closeButton>
                <Modal.Title>Location details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                    <tr>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{data.location.street.name}</td>
                        <td>{data.location.city}</td>
                        <td>{data.location.state}</td>
                        <td>{data.location.postcode}</td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}
