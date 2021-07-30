import React, { useState,useEffect } from 'react';
import { verifydate } from './Funtion/date'

import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import Title from './Title';
import Swal from 'sweetalert2';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';

import {
 
  DeleteFilled,
  NotificationFilled
} from '@ant-design/icons';

const Returns = () => {

  const [returns,saveReturns] = useState([]);
  const [nameUser,setName] = useState("");
  const [status,setStatus] = useState(true);

  useEffect(() => {
   if(status){
     const callAPI = async () => {
       let data = await clienteAxios.get("get/returns");
       saveReturns(data.data);
       verifydate(data.data)
     }
     callAPI();
     setStatus(false);
   }
  }, [status]);
 
  const searchName = async () => {
    let data = await clienteAxios.get(`get/return?name=${nameUser.name}`);

    if(!data.data.message){
      saveReturns(data.data);
    }else{
      Swal.fire({ icon: 'error', title: 'Oops...', text: `${data.data.message}` });
      return;
    }
  }

  // const changeState = async (id) => {
  //   let data = await clienteAxios.put(`update/loan/${id}`);
  //  if(data.status === 200){
  //    Swal.fire(`${data.data.message}`, "You clicked the button!", "success");
  //    setStatus(true);
  //  }
  //  return;
  // }
  
  const sendMessage = async (mobil,name) => {
   let data = await clienteAxios.post(`send/message?phone=${mobil}&dev='dev'`);
   if(data.status === 200){
     Swal.fire(`El usuario ${name} a sido notificado`, "You clicked the button!", "success");
    }
  }


  const deleteReservertion = async (id) => {
    let data = await clienteAxios.post(`delete/loan/${id}`);

    if(data.status === 200) setStatus(true);
  }

  
  const saveName = (e) => {
    let { name, value } = e.target;
    setName({...nameUser,[name]: value});

    if(!value.length){
      setStatus(true)
    }
  }

  return (
    <Layaout>
      {(!returns.length) ? <Spinner title="No hay Devoluciones"/> : (
        <>
        <div className="container">
          <Title title="Devoluciones"/>
        </div>
          <div className="container-search ">
            <div className="content-search d-flex col-sm-12 col-md-9 col-lg-4">
              <input type="text" onChange={saveName} name="name" className="form-control" placeholder="Ingresa el nombre del usuario" />
              <button className="btn btn-primary mx-3" onClick={searchName}>buscar</button>
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
              
                <th scope="col">Enviar Aviso</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>

            <tbody >
              {returns.map((Item) => (
                <tr key={`${Item._id}`} id={Item._id}>

                  <td>
                    <picture>
                      <img src={`${Item.image_book}`} height="100" width="100" alt="cover-book" />
                    </picture>

                  </td>
                  <td>{`${Item.name_book}`}</td>
                  <td>{`${Item.name_user}`}</td>
                  <td>{`${Item.mobile_user}`}</td>
                  <td>{`${Item.date_loan}`}</td>
                  <td>{`${Item.return_date}`}</td>
                  
                  <td>
                    <button className="btn btn-warning" title="enviar aviso" onClick={() => sendMessage(Item.mobile_user,Item.name_user)}><NotificationFilled /></button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteReservertion(Item._id)} ><DeleteFilled /></button>
                  </td>
                </tr>
              )) }
            </tbody>

          </table>
        </div>
        </>
      )}
    </Layaout>
  )
}

export default Returns
