import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,} from "reactstrap";

/*const data =[
  {id: 1, nombre: "Pollo con arroz", descripcion: "Pollo marinado con arroz", precio: 30, stock: 15, estado: "Estado"},
  {id: 2, nombre: "Pollo con arroz", descripcion: "Pollo marinado con arroz", precio: 30, stock: 15, estado: "Estado"},
  {id: 3, nombre: "Pollo con arroz", descripcion: "Pollo marinado con arroz", precio: 30, stock: 15, estado: "Estado"},
];*/

const data =[
  {
    "id": 1,
    "categoria": "alimento",
    "nombreProducto": "pollo con arroz",
    "descripcion": "pollo marinado con arroz",
    "precio": 12,
    "fechaElaboracio": "2020-01-01",
    "fechaVencimiento": "2020-01-01",
    "fechaOferta": "2020-01-01",
    "stock": 15,
    "imagen": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "categoria": "alimento",
    "nombreProducto": "pollo con arroz",
    "descripcion": "pollo marinado con arroz",
    "precio": 14,
    "fechaElaboracio": "2020-02-01",
    "fechaVencimiento": "2020-02-01",
    "fechaOferta": "2020-02-01",
    "stock": 15,
    "imagen": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    "id": 3,
    "categoria": "alimento",
    "nombreProducto": "pollo con arroz",
    "descripcion": "pollo marinado con arroz",
    "precio": 20,
    "fechaElaboracio": "2020-03-01",
    "fechaVencimiento": "2020-03-01",
    "fechaOferta": "2020-03-01",
    "stock": 15,
    "imagen": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    "id": 4,
    "categoria": "alimento",
    "nombreProducto": "pollo con arroz",
    "descripcion": "pollo marinado con arroz",
    "precio": 25,
    "fechaElaboracio": "2020-04-01",
    "fechaVencimiento": "2020-04-01",
    "fechaOferta": "2020-04-01",
    "stock": 15,
    "imagen": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  }
];

class VistaProductosEmpresa extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombreProducto : "",
      descipcion: "",
      precio: "",
      stock: "",
      imagen: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombreProducto = dato.nombreProducto;
        arreglo[contador].descipcion = dato.descipcion;
        arreglo[contador].precio = dato.precio;
        arreglo[contador].stock = dato.stock;
        arreglo[contador].imagen = dato.imagen;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("EstÃ¡s Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container className="table-responsive">
        <br />
        <h1>Productos</h1>
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Registrar Producto</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>nombreProducto</th>
                <th>Descipcion</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Imagen</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombreProducto}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.stock}</td>
                  <td>{dato.imagen}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                NombreProducto: 
              </label>
              <input
                className="form-control"
                name="nombreProducto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombreProducto}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Descipcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descipcion}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Stock: 
              </label>
              <input
                className="form-control"
                name="stock"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.stock}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Imagen: 
              </label>
              <input
                className="form-control"
                name="imagen"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.imagen}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                NombreProducto: 
              </label>
              <input
                className="form-control"
                name="nombreProducto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Descipcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Stock: 
              </label>
              <input
                className="form-control"
                name="stock"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Imagen: 
              </label>
              <input
                className="form-control"
                name="imagen"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default VistaProductosEmpresa;