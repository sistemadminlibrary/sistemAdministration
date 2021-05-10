import React, {useState,useEffect} from 'react'
import Layaout from './Layaout';
import styled from 'styled-components';
import Spinner from '../../Styled/Spinner';
import Swal from 'sweetalert2';
import clienteAxios from '../../Config/config';

import { getMont, getDate, lastDate } from './Funtion/FunctionalData';
import { useParams } from 'react-router';

const StyleForm = styled.div`
display:flex;
align-items:center;
align-content:center;

.center-input{
  display:flex;
  align-items:center;
  align-content:center;
  border-style:none;
  box-shadow: 1px 2px 11px 2px rgba(150, 150, 150, 0.5);
  width:60%;
  margin-right:auto;
  margin-left:auto;
}

.btn-lg{
  margin:9px;
}
.form-control {
  border: 1px solid rgba(48, 47, 47, 0.5)
}
.card-title h1{
  margin:0.5em;
  text-align:center;
}

`;
const FormLoans = () => {

  let { id } = useParams();
  const [loanAdmin,setLoanAdmin] = useState("");
  let [dataUser,setDataUser] = useState("");//crear objeto con los nombre de los inputs

  useEffect(() => {
    let call = async () => {
      let data = await clienteAxios.get(`get/book/${id}`);
      setLoanAdmin(data.data.data);
    };
    call();
    
  }, [id]);


  const senData = async () => {
   
    dataUser = {
      book_id: id,
      name_user: dataUser.name_user,
      mobile_user: dataUser.mobile_user,
      image_book: loanAdmin.book_cover,
      name_book: loanAdmin.name,
      return_loan: dataUser.return_loan,
    };
    const controls = document.querySelectorAll(".form-control");
    if (!controls[0].value || !controls[1].value || !controls[2].value) {
      Swal.fire({ icon: "error", title: "Oops...", text: "llena todos los campos", });
      return;
    } else {
      let createLoan = await clienteAxios.post("admin/loan", dataUser);
  
      if (createLoan.data.messageCorrect) {
        Swal.fire(`${createLoan.data.messageCorrect}`, "You clicked the button!", "success");
      }
      else{
        Swal.fire({ icon: "error", title: "Oops...", text: `${createLoan.data.messageError}`, });
      }
    }
    document.querySelector("#form-loan-admin").reset();
  };

  const handelChange = (e) => {
 
    let { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  return (
  <Layaout>
    {(!loanAdmin) ? <Spinner/> : (

        <StyleForm>
          <div className="card col-12 center-input " >
            <div className="card-title">
              <h1>Crear Prestamo</h1>
            </div>
            <div className="content-form col-10">
              <form id="form-loan-admin">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre Usuario:</label>
                  <input type="text" onChange={handelChange} name="name_user" className="form-control" id="recipient-name" />
                </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label text-center">
                        Numero de Telefono:
                    </label>
                    <div className="form-group d-flex">
                      <input type="text" onChange={handelChange} name="mobile_user" className="form-control" id="recipient-mobile" />
                    </div>
                  </div>
                <div className="container-label">
                  <label htmlFor="">Asigna un dia para devolver el Libro</label>
                </div>
                <div className="container-date">
                  <input type="date" onChange={handelChange} className="form-control" name="return_loan" id="date" min={`${new Date().getFullYear()}-${(getMont <= 9) ? ("0" + getMont) : (getMont)}-${(getDate <= 9) ? ("0" + getDate) : (getDate)}`} max={`${new Date().getFullYear()}-${(getMont <= 9) ? ("0" + getMont) : (getMont)}-${lastDate}`}/>
                </div>
              </form>
            </div>
        
            <button className="btn btn-success btn-lg"  onClick={senData}>Prestar</button>
          </div>
        </StyleForm>
    )}
  </Layaout>
  )
}

export default FormLoans
