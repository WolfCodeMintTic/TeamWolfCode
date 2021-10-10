import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, { useState } from "react"

export default function EditModal(props) {
    const { showEditModal, setShowEditModal, data, setData, item, ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowEditModal(!showEditModal);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setShowEditModal(false)
    }

    console.log("data:", data)


    return (
        <Modal isOpen={showEditModal} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div><h3>Edit</h3></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Label sm={3}>ID</Label>
                        <Col sm={9}>
                            <input className="form-control" type="text"
                                name="id"
                                readOnly
                                value="1"
                            />
                        </Col>
                    </FormGroup>



                    <FormGroup row className='mt-2'>
                        <Label sm={3}>ValorTotal</Label>
                        <Col sm={9}>
                            <input className="form-control" type="number"
                                name="number"
                                placeholder="100000"
                                defaultValue="calorTotal"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>IDVenta</Label>
                        <Col sm={9}>
                            <input className="form-control" type="text"
                                required
                                placeholder="1"
                                name="lastname"
                                defaultValue="idVenta"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>Cantidad</Label>
                        <Col sm={9}>
                            <input className="form-control" type="number"
                                required
                                placeholder="50000"
                                name="cantidad"
                                defaultValue="Cantidad"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>PrecioUnitario</Label>
                        <Col sm={9}>
                            <Input type="number" name="number"  defaultValue="PrecioUnitario">
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>FechaVenta</Label>
                        <Col sm={9}>
                            <Input type="datetime-local"
                                name="datetime"readOnly defaultChecked="fecha"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>C.C</Label>
                        <Col sm={9}>
                            <Input type="number" name="number"
                            readOnly 
                            defaultValue="Cedula">
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>Cliente</Label>
                        <Col sm={9}>
                            <input className="form-control" type="text"
                                name="cliente"
                                readOnly
                                value="name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Vendedor</Label>
                        <Col sm={9}>
                            <input className="form-control" type="email"
                                name="vendedor"
                                readOnly
                                value="namev"
                            />
                        </Col>
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}