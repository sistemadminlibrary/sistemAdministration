import React from 'react'

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import Spinner from '../../../Styled/Spinner';
import { dataReport } from '../Funtion/dataReport';


import logo from '../../../Img/asset/flat-book.png';

const ReportPrincipal = () => {

  let { allBook, allLoans, allReturns, allReservation } = dataReport();


  const generateReport = () => {
    let fecha = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    const doc = new jsPDF();

    doc.addImage(logo, 10, 10, 40, 40)
    doc.setFontSize(25);
    doc.text("Biblioteca Publica La Merced", 60, 30)

    doc.setFontSize(20);
    doc.text("Reporte Mensual Administrativo", 60, 55);

    doc.setFontSize(15);
    doc.text(`Fecha ${fecha}`, 85, 63);

    //bajar la table aun mas
    doc.autoTable({
      html: '#miTable',
      margin: { top: 70 },
      styles: { fontSize: 15 }
    });


    doc.save("print.pdf")
  }


  return (
    <>
    {
      (!allBook) ? <Spinner/>
      : 
      (
        <div className="container-loan-table" >
              <div className="content-btn-print">
                <button className="btn btn-primary" onClick={generateReport}>
                  Generar reporte
                </button>
              </div>
          <div className="container"><h2 className="text-center">Reporte Principal</h2></div>
          <div className="table">
            <table className="table table-success table-striped" id="miTable">
              <thead>
                <tr className="tr">
                  <th scope="col">Datos</th>
                  <th scope="col">Total</th>

                </tr>
              </thead>
              <tbody>
                <tr className="tr-data">
                  <th scope="row">Libros</th>
                  <td>{allBook}</td>

                </tr>
                <tr className="tr-data">
                  <th scope="row">Prestamos</th>
                  <td>{allLoans}</td>

                </tr>
                <tr className="tr-data">
                  <th scope="row">Devoluciones Pendientes</th>
                  <td>{allReturns}</td>

                </tr>
                <tr className="tr-data">
                  <th scope="row">Reservaciones</th>
                  <td>{allReservation}</td>

                </tr>

              </tbody>

            </table>
          </div>
        </div>
      )
    }
    </>
  )
}

export default ReportPrincipal
