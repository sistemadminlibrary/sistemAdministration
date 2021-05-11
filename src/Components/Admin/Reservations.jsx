import React, { useState,useEffect } from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import Swal from 'sweetalert2';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';

import {
  CheckOutlined,
  DeleteFilled 
  } from '@ant-design/icons';

const Reservations = () => {
  
  const [reservations,saveReservations] = useState("");
  const [nameReservation,setReservation] = useState("");
  const [status,setStatus] = useState(true);

  useEffect(() => {
   if(status){
     const callAPI = async () => {
       let data = await clienteAxios.get("get/reservations");
       saveReservations(data.data);
     }
     callAPI();
     setStatus(false);
   }
  }, [status]);


  const searchReservation = async () => {
    let data = await clienteAxios.get(`get/reservation?name=${nameReservation.name}`);
    if(!data.data.message){
      saveReservations(data.data)
    }else{
      Swal.fire({ icon: 'error', title: 'Oops...', text: `${data.data.message}` });
      return;
    }
  }

  const changeState = async (id) => {
    let data = await clienteAxios.put(`update/reservation/${id}`);
    if (data.status === 200) {
      Swal.fire(`${data.data.message}`, "You clicked the button!", "success");
      setStatus(true);
    }
    return;
  }

  const deleteReservation = async (id) => {
    let data = await clienteAxios.post(`delete/loan/${id}`);
    if(data.status === 200) setStatus(true);
  }

  const handelReservation = (e) => {
    
    let {name,value} = e.target;

    setReservation({
      ...nameReservation,
      [name] : value
    });

    if(!value.length){
      setStatus(true);
    }
  }

  return (
   <Layaout>
     {(!reservations.length) ? <Spinner/> : (
       <>
          <div className="container-search ">
            <div className="content-search d-flex col-sm-12 col-md-9 col-lg-4">
              <input type="text" onChange={handelReservation} name="name" className="form-control" placeholder="Ingresa el nombre del usuario" />
              <button className="btn btn-primary mx-3" onClick={searchReservation}>buscar</button>
            </div>
          </div>
          <div className="asing-scroll">
            <table className="table table-striped">
              <thead>
                <tr>

                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Nombre Usuario</th>
                  <th scope="col">Telefono Usuario</th>
                  <th scope="col">Fecha Prestamo</th>
                  <th scope="col">Fecha Devolucion</th>
                  <th scope="col">Aprobar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>

              <tbody >
                {reservations.map((item) => (
                  <tr key={`${item._id}`} id={item._id}>
                    <td>
                      <picture>
                        <img src={`${item.image_book}`} height="100" width="100" alt="cover-book" />
                      </picture>

                    </td>
                    <td>{`${item.name_book}`}</td>
                    <td>{`${item.name_user}`}</td>
                    <td>{`${item.mobile_user}`}</td>
                    <td>{`${item.date_loan}`}</td>
                    <td>{`${item.return_date}`}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => changeState(item._id)}><CheckOutlined /></button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteReservation(item._id)} ><DeleteFilled /></button>
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

export default Reservations