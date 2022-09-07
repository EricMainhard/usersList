import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { ModalComponent } from './Modal';
import axios from 'axios';

export function TableComponent() {

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const handleShow = (location) => {
      setModalInfo({location})
      setShowModal(!showModal); 
    }

    useEffect(()=>{

        const callApi = async () => {
            try{
                let res = await axios.get('https://randomuser.me/api?results=10');
                setUsers(res.data.results);
            } catch(e){
                console.log(e);
            }
        }

        callApi();
    },[])

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
            <th>User image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th> </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>{
            return(
                <tr key={user.id.value}>
                    <td>
                      <img src={user.picture.medium}/>
                    </td>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleShow(user.location)}>
                        More
                      </Button>
                    </td>
                </tr>
            )
        })}
      </tbody>
    </Table>
    {showModal && (
      <ModalComponent data={modalInfo} showModal={showModal} handleShow={handleShow}/>
    )}
    </>
  );
}
  