import React, { useState,useEffect } from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import '../../Css/estiloAdmin.css';

import { DeleteFilled } from '@ant-design/icons'
import clienteAxios from '../../Config/config';
const Prestamos = () => {
  
  const [loans, saveLoans] = useState("");
  const [status,setStatus] = useState(true);
  
  useEffect(() => {
   if(status){
     const consultarAPI = async () => {
       let data = await clienteAxios.get("get/loans");
       saveLoans(data.data);
     }
     consultarAPI();
     setStatus(false);
   }
  }, [status]);

 
  const deleteLoan = async (id) => {
    let data = await clienteAxios.post(`delete/loan/${id}`);
    if(data.status === 200) setStatus(true);
  }
 
  return (
      <Layaout>
      {(!loans) ? <Spinner/> : (
        <>
          
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
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody >
              {loans.map((item) => (
                <tr key={`${item._id}`}>
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
                    <button className="btn btn-danger" onClick={() => deleteLoan(item._id)}><DeleteFilled /></button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        </>
        )}
      </Layaout>
  );
}
export default Prestamos