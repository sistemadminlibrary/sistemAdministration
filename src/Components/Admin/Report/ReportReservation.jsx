import React from 'react'

const ReportReservation = () => {
  return (
    <>
    <div className="container-loan-table report-reservation" style={{ display: 'none' }}>
        <div className="content-btn-print">
          <button className="btn btn-primary" >
            Generar reporte
          </button>
        </div>
        <div className="container"><h2 className="text-center">Reporte Reservacion</h2></div>
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


            </tr>
            <tr className="tr-data">
              <th scope="row">Prestamos</th>


            </tr>
            <tr className="tr-data">
              <th scope="row">Devoluciones Pendientes</th>


            </tr>
            <tr className="tr-data">
              <th scope="row">Reservaciones</th>


            </tr>

          </tbody>

        </table>
      </div>
    </div>
    </>
  )
}

export default ReportReservation
