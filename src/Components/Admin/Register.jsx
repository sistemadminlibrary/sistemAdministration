import React, { useState} from 'react'

import Layaout from './Layaout';
import styled from 'styled-components';
import Swal from 'sweetalert2'; 

import clienteAxios from '../../Config/config';

import user from '../../Img/user.png';
import '../../Css/register.css';
const CenterContent = styled.div`
display:flex;
align-items:center;
align-content:center;

.card{
  margin-right:auto;
  margin-left:auto;
  box-shadow: 1px 2px 11px 2px rgba(150, 150, 150, 0.5);

}

.card-title{
  text-align:center;
}
`;

const InputForm = styled.div`
margin: 1em;
.form-group{
  margin:0.8em;
}
`;

const ContainerLog = styled.div`
height: 9em;
.image-r{
position: relative;
display:flex;
margin-right:auto;
margin-left:auto;
bottom:4em;
border-radius:50%;
 box-shadow: 1px 2px 11px 2px rgba(94, 93, 93, 0.527);
}`;

const Register = () => {

  const [dataAdmin,setDataAdmin] = useState( {name:"",email:"",password:""} );

  const handelClick = async (e) => {
    e.preventDefault();

    let datos = document.querySelectorAll(".form-control");
    
    if(!datos[0].value || !datos[1].value || !datos[2].value){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llena todos los campos!',
      });
      return;
    }else{
  
    const data = await clienteAxios.post("register",dataAdmin);
    if(data.status === 200){ 
      
    Swal.fire(
      'Administrador agregado!',
      '',
      'success')
    } 
  }
    document.querySelector("#form-c").reset();
  }

  const handelChange = (e) => {
    const {name,value} = e.target;
    setDataAdmin({
    ...dataAdmin,
    [name] : value  
    });

  }
 
  return (
    <Layaout>
    <div className="container-register-admin">
      <CenterContent>
          
          <div className="card col-sm-12 col-md-5 col-lg-5">
            <ContainerLog className="conteiner-logo">
              
                <img src={user} width="140" height="140" className="image-r" alt=""/>
              
            </ContainerLog>
            <div className="card-title">
              <h3>Nuevo Administrador</h3>
            </div>
            <InputForm>
              <form id="form-c">
                <div className="form-group">
                  <label htmlFor="">Nombre</label>
                  <input type="text" onChange={handelChange} name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Correo</label>
                  <input type="text" onChange={handelChange} name="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Contraseña</label>
                  <input type="text" onChange={handelChange} name="password" className="form-control" />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={handelClick}>+Agregar</button>
                </div>
              </form>
            </InputForm>
        
          </div>
        
      </CenterContent>
    </div>
    </Layaout>
  )
}

export default Register
