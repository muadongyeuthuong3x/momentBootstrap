
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './index.css'
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import Col from 'react-bootstrap/Col';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

function App() {

  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tien1, settien] = useState('');
  const [tenhang, settenhang] = useState('');

  const onChangeGetTien = (event) => {
    settien(event.target.value)
  }

  const onChangeGetTenHang = (event) => {
    settenhang(event.target.value)
  }

  const eventCreate = () => {
    const form = {
      tien: tien1,
      tenhang,
      startDate: moment(startDate).format("DD/MM/YYYY");
    }

    const time = moment(startDate).add(5, 'day');
    console.log(time)

    const listMuaHang = (JSON.parse(localStorage.getItem("list"))) || [];
    listMuaHang.push(form)
    localStorage.setItem('list', JSON.stringify(listMuaHang))

  }

  const huyData = () => {
    settien('')
    settenhang('')
    setStartDate('')
    setShow(false)
  }
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleShow}>Thêm thông tin</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Form tạo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* input1 */}
              <FloatingLabel
                controlId="floatingTextarea"
                label="Tiền mua hàng"
                className="mb-3"
              >
                <Form.Control value={tien1} onChange={onChangeGetTien} />
              </FloatingLabel>


              {/* input2 */}
              <FloatingLabel
                controlId="floatingTextarea"
                label="Tên hàng"
                className="mb-3"
              >
                <Form.Control value={tenhang} onChange={onChangeGetTenHang} />
              </FloatingLabel>

              {/* time mua */}
              <label htmlFor="" className='data_picker'>Lịch mua : </label>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={huyData}>
                Close
              </Button>
              <Button variant="primary" onClick={eventCreate}>
                Create
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
