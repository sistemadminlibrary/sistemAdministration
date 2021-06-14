import React from 'react'
import Layaout from './Layaout'
import { dataReport } from './Funtion/dataReport';
import { jsPDF } from 'jspdf';
import  'jspdf-autotable';
import Spinner from '../../Styled/Spinner';
import imageGraf from '../../Img/asset/chart.png';
import logo from '../../Img/asset/flat-book.png';
import '../../Css/report.css';

const ReportAdmin = () => {

  let { allBook,allLoans,allReturns,allReservation } = dataReport();

  const generateReport = () => {
    let fecha = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    const doc = new jsPDF();

    doc.addImage(logo,10,10,40,40)
    doc.setFontSize(25);
    doc.text("Biblioteca Publica La Merced",60,30)

    doc.setFontSize(20);
    doc.text("Reporte Mensual Administrativo",60,55);
    
    doc.setFontSize(15);
    doc.text(`Fecha ${fecha}`,85,63);

    //bajar la table aun mas
    doc.autoTable({
    html: '#miTable',
    margin: {top:70},
    styles: { fontSize:15 }
  });

    
    doc.save("print.pdf")
  }


  return (
 <Layaout>
    <>
    <div className="container-title">
      <h2>Administracion y Generacion de Reportes</h2>
    </div>
    <div className="container">
      <div className="section-info">
        <img src={imageGraf} width="130" height="125"  alt="chart" />
        <div className="info">
          <p>Bienvenido a la seccion de reportes</p>
        </div>
      </div>
    </div>
    <div className="content-btn-print">
      <button className="btn btn-primary" onClick={generateReport}>
        Generar reporte
      </button>
    </div>
    {(!allBook) ?
    (<Spinner/>) :
    (
            <div className="container-loan-table">
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
 </Layaout>
  )
}

export default ReportAdmin
