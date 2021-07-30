import React, {useState,useEffect} from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import Title from './Title';
import Swal from 'sweetalert2';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';
import { NavLink } from 'react-router-dom';

const EspecificBook = () => {

  const [status,setStatus] = useState(true);
  const [datos,saveDatos] = useState("");
  const [nameBook,setNameBook] = useState("");
  
  useEffect(() => {
    if(status){
      const consultarApi = async () => {
        let data = await clienteAxios.get("get/books");
        saveDatos(data.data);
      }
      consultarApi();
      setStatus(false)
    }
  }, [status]);

  

  const getBook = async () => {
    let data = await clienteAxios.get(`get/book?name=${nameBook.name}`);
    if(!data.data.message){
      saveDatos(data.data.book);
    }else{
      Swal.fire({ icon: 'error', title: 'Oops...', text: `${data.data.message}` });
      return;
    }
  }

  const eliminatedB = async (id) => {

    try {
      await clienteAxios.post(`delete/book/${id}`);
      setStatus(true);
    } catch (error) {
      console.log(error);
    }
 
  }

  const deleted = (id) => {
    Swal.fire({
      title: "Deseas borrar el libro?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminatedB(id);
        Swal.fire("Eliminado!", "El libro a sido eliminado.", "success");
      }
    });
  };  

  const saveName = (e) => {
    let {name,value} = e.target;
    setNameBook({
      ...nameBook,
      [name] : value
    });

    if (!value.length){
      setStatus(true)
    }
    
  }

  return  (
    
     <Layaout>
      {(!datos) ? (<Spinner />) :(
     <>
     <div className="container">
       <Title title="Libros"/>
     </div>
      <div className="container-search ">
      <div className="content-search d-flex col-sm-12 col-md-9 col-lg-4">
              <input type="text" name="name" onChange={saveName} placeholder="Nombre del libro" className="form-control" />
              <button className="btn btn-primary mx-3" onClick={getBook}>buscar</button>
      </div>
      </div>
          <div className="asing-scroll">
            <table className="table table-striped">
              <thead>
                <tr>

                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Libros disponibles</th>
                  <th scope="col">Aciones</th>
                </tr>
              </thead>

              <tbody >
                {datos.map((item) => (
                  <tr key={item._id}>

                    <td>
                      <picture>
                        <img src={item.book_cover} height="100" width="100" alt="" />

                      </picture>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.autor}</td>
                    <td>{item.amount}</td>
                    <td className="td-btn">
                      <NavLink to={`/admin/edit/${item._id}`} className="btn btn-info">Editar</NavLink>
                      <button className="btn btn-danger" onClick={() => deleted(item._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </>
      )}
   
    </Layaout>
  )
}

export default EspecificBook
