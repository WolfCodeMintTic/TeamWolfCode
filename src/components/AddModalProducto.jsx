import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form
} from "reactstrap";
import React, { useState } from "react"

export default function AddModalProducto(props) {
    const { showAddModal, setShowAddModal, data, setData, ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowAddModal(!showAddModal);

    const SubmitForm = (e) => {
        e.preventDefault()
        const idProducto = data.length + 1;
        const producto = e.target.producto.value;
        const descripcion = e.target.descripcion.value;
        const valorUnitario = e.target.valorUnitario.value;
        setData([{ idProducto, producto, descripcion, valorUnitario}, ...data]);
        setShowAddModal(false)
    }


    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <Form onSubmit={SubmitForm}>
                <ModalHeader>
                    <div><h3>Registrar nuevo producto</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="producto">Producto:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                name="producto"
                                placeholder="Camisa"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={6} htmlFor="descripcion">Descripcion del producto:</Label>
                        <Col sm={12}>
                            <input className="form-control" type="text"
                                required
                                placeholder="cualquier cosa...."
                                name="descripcion"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="valorUnitario">Valor por unidad:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="valorUnitario"
                                placeholder="25000"
                                required
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