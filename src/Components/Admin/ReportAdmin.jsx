import React from 'react'
import Layaout from './Layaout'



import ReportPrincipal from './Report/ReportPrincipal';
import ReportBook from './Report/ReportBook';
import ReportLoans from './Report/ReportLoans';
import ReportReturn from './Report/ReportReturn';
import ReportReservation from './Report/ReportReservation';
import { viewPrincipal,changeView,viewLoan,viewReturn,viewReservation } from './Report/funcionalidadR'

import '../../Css/report.css';

const ReportAdmin = () => {

 
  return (
 <Layaout>
    <>
    <div className="container-title">
      <h2>Administracion y Generacion de Reportes</h2>
    </div>
    <div className="container content-opt">
      <div className="container-options">
        
      <ul>
              <li onClick={viewPrincipal} className="firsChil" id="rep-principal">
                <p>Reporte General</p>
              </li>
              <li className="quitB" id="rep-libro" onClick={changeView}>
                <p>Reportes Libros</p>
              </li>
              <li className="quitB" id="repor-loan" onClick={viewLoan}>
                <p>Reportes Prestamos</p>
              </li>
              <li className="quitB" id="repor-return" onClick={viewReturn}>
                <p>Reportes Devoluciones</p>
              </li>
              <li className="quitB" id="repor-reservation" onClick={viewReservation}>
                <p>Reporte Reservacion</p>
              </li>

      </ul>
      </div>
    </div>
     
   
    

       <ReportPrincipal/>
       < ReportBook/>
       <ReportLoans/>
       <ReportReturn/>
       <ReportReservation/>

    </>
 </Layaout>
  )
}

export default ReportAdmin
