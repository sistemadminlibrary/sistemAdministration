import React, {useEffect,useMemo} from 'react';
import io from 'socket.io-client';
import { NavLink } from 'react-router-dom'

import '../../Css/estiloAdmin.css';
import Layaout from './Layaout';
import Swal from 'sweetalert2';

import book from '../../Img/asset/book.png';
import loans from '../../Img/asset/calendar.png';
import clock from '../../Img/asset/clock.png';
import reservations from '../../Img/asset/calendar_book.png';

import { useCount  } from '../../Hooks/useCount';

const CaseAdmin = () => {
//
  const path = `${process.env.REACT_APP_BACKEND}`;
  const socket = useMemo(() => io.connect(path, {
    transports: ['websocket']
  }),[path]);
  
  let {
    countBoook,
    countLoans,
    countReturn,
    countReservation,
    date,
  } = useCount();
  
  useEffect(() => {
    
    socket.on('connect',() => {
      socket.on("envio", (data) => {
        Swal.fire(`${data}`, "You clicked the button!", "success");
      })
    });
  }, [socket]);

  const emitNotifications = () => {
    let year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
      day = new Date().getDate();
    let fecha = `${year}-${month <= 9 ? "0" + month : month}-${
      day <= 9 ? "0" + day : day
    }`;

    if (!date) return null;
    date.forEach((Item) => {
      if (fecha.indexOf(Item.return_date) !== -1) {
        setTimeout(() => {
          alert(`devoluciones pendientes hoy ${fecha} `);
        }, 1000);
      }
    });
  };
  emitNotifications();

  return (
    <Layaout>
    <div className="container-main-admin container">
     <div className="col-12  p-3 element-card-admin">
       <div className="col-sm-5 col-md-4 col-lg-2 element-image-admin">
         <div className="card">
         <NavLink to="/admin/books" >
                <div className="card-title text-center">
                  <h6>Libros</h6>
                </div>
                <img src={book} alt="book" className="card-img-top" height="200" width="200" />
                <div className="card-footer text-center">
                 <h4>{countBoook}</h4>
                </div>
         </NavLink>
      </div>
       </div>
          <div className="col-sm-5 col-md-4 col-lg-2  element-image-admin">
         <div className="card">
           <NavLink to="/admin/loans">
                <div className="card-title text-center">
                  <h6>Prestamos</h6>
                </div>
                <img src={loans} alt="book" className="card-img-top" height="200" width="200" />
                <div className="card-footer text-center">
                  <h4>{countLoans}</h4>
                </div>
           </NavLink>
         </div>
       </div>
          <div className="col-sm-5 col-md-4 col-lg-2  element-image-admin">
         <div className="card">
             <NavLink to="/admin/returns">
                <div className="card-title text-center">
                  <h6>Devoluciones</h6>
                </div>
                <img src={clock} alt="book" className="card-img-top" height="200" width="200" />
                <div className="card-footer text-center">
                  <h4>{countReturn}</h4>
                </div>
             </NavLink>
          </div>
       </div>
          <div className="col-sm-5 col-md-4 col-lg-2  element-image-admin">
            <div className="card">
              <NavLink to="/admin/reservations">
                <div className="card-title text-center">
                  <h6>Reservaciones</h6>
                </div>
                <img src={reservations} alt="book" className="card-img-top" height="200" width="200"  />
                <div className="card-footer text-center">
                  <h4>{countReservation}</h4>
                </div>
              </NavLink>
         </div>
          </div>
     </div>
    </div>
    </Layaout>
  )
}

export default CaseAdmin