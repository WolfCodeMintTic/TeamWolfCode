import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, { useState } from "react"

export default function AddModal(props) {
    const { showAddModal, setShowAddModal, data, setData, ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowAddModal(!showAddModal);

    const handleSubmit = (e) => {
        e.preventDefault()

        setShowAddModal(false)
    }


    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div><h3>Insert</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup row className='mt-2'>
                        <Label sm={3}>ValorVenta</Label>
                        <Col sm={9}>
                            <input className="form-control" type="text"
                                name="name"
                                placeholder="50000"
                                required
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
                            <Input type="number" name="number" defaultValue="PrecioUnitario">
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>FechaVenta</Label>
                        <Col sm={9}>
                            <Input type="datetime-local"
                                name="datetime" defaultChecked="fecha"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={3}>C.C</Label>
                        <Col sm={9}>
                            <Input type="number" name="number"
                                defaultValue="Cedula">
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>Cliente</Label>
                        <Col sm={9}>
                            <input className="form-control" type="text"
                                name="cliente"
                                value="name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Vendedor</Label>
                        <Col sm={9}>
                            <input className="form-control" type="email"
                                name="vendedor"
                                value="name@correo.com"
                            />
                        </Col>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Registrar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}