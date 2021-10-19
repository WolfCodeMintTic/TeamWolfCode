import "bootstrap/dist/css/bootstrap.min.css";
import {actualizarProducto} from 'utils/productos/api'
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form
} from "reactstrap";

export default function EditModalProducto(props) {
    const { showEditModal, setShowEditModal, data, setData, item} = props;
    const toggle = () => setShowEditModal(!showEditModal);

    const SubmitForm = async(e) => {
        e.preventDefault()
        await actualizarProducto(
            item._id,
            {
                 producto: e.target.producto.value,
                 descripcion: e.target.descripcion.value,
                 valorUnitario: e.target.valorUnitario.value
            },
            (response)=>{
                console.log("producto modificado")
                console.log(response.data);
            },
            (error) =>{
                console.log("error modificando producto")
                console.log(error)
            }
        )
        const _id = item._id;
        const producto = e.target.producto.value;
        const descripcion = e.target.descripcion.value;
        const valorUnitario = e.target.valorUnitario.value;
        const productoArray = [{_id, producto, descripcion, valorUnitario}]
        let nuewData= data.map(obj => productoArray.find(o => o._id === obj._id) || obj);
        setData(nuewData); 
        setShowEditModal(false);
    }
    console.log("data:", data)

    return (
        <Modal isOpen={showEditModal} toggle={toggle}>
            <Form onSubmit={SubmitForm}>
                <ModalHeader>
                    <div><h3>Editar producto</h3></div>
                </ModalHeader>

                <ModalBody>
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