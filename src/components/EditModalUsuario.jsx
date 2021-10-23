import "bootstrap/dist/css/bootstrap.min.css";
import { actualizarUsuario } from 'utils/usuarios/api'
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";

export default function EditModalUsuario(props) {
    const { showEditModal, setShowEditModal, data, setData, item } = props;
    const toggle = () => setShowEditModal(!showEditModal);

    const SubmitForm = async (e) => {
        e.preventDefault()
        await actualizarUsuario(
            item._id,
            {
                rol: e.target.rol.value,
                estado: e.target.estado.value
            },
            (response) => {
                console.log("usuario modificado")
                console.log(response.data);
            },
            (error) => {
                console.log("error modificando usuario")
                console.log(error)
            }
        )
        const _id = item._id;
        const usuario = item.usuario;
        const rol = e.target.rol.value;
        const estado = e.target.estado.value;
        const usuarioArray = [{ _id, usuario, rol, estado }]
        let nuewData = data.map(obj => usuarioArray.find(o => o._id === obj._id) || obj);
        setData(nuewData);
        setShowEditModal(false);
    }
    console.log("data:", data)

    return (
        <>
            <Modal isOpen={showEditModal} toggle={toggle}>
                <Form onSubmit={SubmitForm}>
                    <ModalHeader>
                        <div><h3>Editar usuario</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup row className='mt-2'>
                            <Label sm={6} htmlFor="usuario">Usuario:</Label>
                            <Col sm={12}>
                                <input className="form-control"
                                    type='email'
                                    name="usuario"
                                    readOnly
                                    defaultValue={item.usuario}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row className='mt-2'>
                            <Label sm={6} htmlFor="rol">Rol:</Label>
                            <Col sm={12}>
                                <Input type='select'
                                    name="rol" required
                                    defaultValue={item.rol}>
                                    <option
                                        disabled>Seleccione una opcion
                                    </option>
                                    <option>Admin</option>
                                    <option>Vendedor</option>
                                    <option>Inactivo</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row className='mt-2'>
                            <Label sm={4} htmlFor="estado">estado:</Label>
                            <Col sm={12}>
                                <Input type='select' name='estado' required defaultValue={item.estado}>
                                    <option
                                        disabled>Seleccione una opcion
                                    </option>
                                    <option>Autorizado</option>
                                    <option>No autorizado</option>
                                    <option>Pendiente</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" type="submit">Guardar</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}
