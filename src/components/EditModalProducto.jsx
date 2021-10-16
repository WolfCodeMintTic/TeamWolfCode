import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, { useState } from "react"

export default function EditModalProducto(props) {
    const { showEditModal, setShowEditModal, data, setData, item, ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowEditModal(!showEditModal);

    const SubmitForm = (e) => {
        e.preventDefault()
        const idProducto = item.idProducto;
        const producto = e.target.producto.value;
        const descripcion = e.target.descripcion.value;
        const valorUnitario = e.target.valorUnitario.value;
        const ventaArray = [{ idProducto, producto, descripcion, valorUnitario}]
        let nuewData = data.map(obj => ventaArray.find(o => o.idProducto === obj.idProducto) || obj);
        setData(nuewData);
        setShowEditModal(false)
    }
    console.log("data:", data)

    return (
        <Modal isOpen={showEditModal} toggle={toggle}>
            <Form onSubmit={SubmitForm}>
                <ModalHeader>
                    <div><h3>Editar producto</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup row>
                        <Label sm={4} htmlFor="idProducto">ID:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="idProducto"
                                value={item.idProducto}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="producto">Producto:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                name="producto"
                                defaultValue={item.producto}
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={6} htmlFor="descripcion">Descripcion del producto:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                required
                                name="descripcion"
                                defaultValue={item.descripcion}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="valorUnitario">Valor por unidad:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                required
                                name="valorUnitario"
                                defaultValue={item.valorUnitario}
                            />
                        </Col>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Guardar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}