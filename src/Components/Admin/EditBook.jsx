import React, { useState,useEffect,useRef } from 'react'
import Layaout from './Layaout';

import styled from 'styled-components';
import Swal from 'sweetalert2';
import clienteAxios from '../../Config/config';
import { useParams } from 'react-router';

const StyleFormBook = styled.div`
display:flex;
align-items:center;
align-content:center;

.center-input-book{
  display:flex;
  align-items:center;
  align-content:center;
  border-style:none;
  box-shadow: 1px 2px 11px 2px rgba(150, 150, 150, 0.5);
  width:60%; 
  margin-right:auto;
  margin-left:auto;
}

.bt-add{
  margin:9px;
}

.form-control {
  border: 1px solid rgba(48, 47, 47, 0.5)
}
.card-title h1{
  margin:0.5em;
  text-align:center;
}
.row{
  margin-right:auto;
  margin-left:auto;
}
`;

const EditBook = () => {
  let { id } = useParams();
  
  const [book, setBook] = useState("");
  const [fileCover, setFile] = useState("");

  const nameB = useRef("");
  const autorB = useRef("");
  const editB = useRef("");
  const categB = useRef("");
  const descripB = useRef("");
  const amountB = useRef("");


  useEffect(() => {
  let viewBook = async () => {
    let data = await clienteAxios.get(`get/book/${id}`);
    setBook(data.data.data)
  }
  viewBook();
  },[id]);

  const postBook = async () => {

    let inputs = document.querySelectorAll(".form-control");

    const formData = new FormData();
    formData.append("name",nameB.current.value );
    formData.append("autor",  autorB.current.value);
    formData.append("editorial", editB.current.value );
    formData.append("categoria", (categB.current.value === '---Seleccione una categoria---') ? book.categoria : categB.current.value   );
    formData.append("descripcion", descripB.current.value);
    formData.append("amount", amountB.current.value );
    formData.append("image", fileCover);

  
    if (!inputs[0].value || !inputs[1].value || !inputs[2].value || !inputs[4].value || !inputs[5].value || !inputs[6].value) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: "llena todos los campos", });
      return;
    } else {
      let data = await clienteAxios.put(`update/book/${id}`, formData);

      if (data.status === 200) Swal.fire('Cambios correctos!', 'You clicked the button!', 'success');
    }
    document.querySelector("#form-add").reset();
  }



  return (
    <Layaout>
      <StyleFormBook>
        <div className="card center-input-book " >
          <div className="card-title">
            <h1>Editar Libro</h1>
          </div>
          <form id="form-add">
            <div className="row">

              <div className="col-6">
                <div className="mb-1">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre Libro:</label>
                  <input type="text"   defaultValue={book.name} ref={nameB} name="name" className="form-control" id="recipient-name" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-1">
                  <label htmlFor="message-text" className="col-form-label">Nombre Autor:</label>
                  <input type="text"   defaultValue={book.autor} ref={autorB} name="autor" className="form-control" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-1">
                  <label htmlFor="message-text" className="col-form-label">Editorial:</label>
                  <input type="text"   defaultValue={book.editorial} ref={editB} name="editorial" className="form-control" />
                </div>
              </div>
              <div className="col-6">

                <div className="mb-1">
                  <label htmlFor="message-text" className="col-form-label">Imagen:</label>
                  <input type="file" name="image"  onChange={e => setFile(e.target.files[0])} className="form-control" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-1">
                  <label htmlFor="message-text" className="col-form-label">Cantidad:</label>
                  <input type="number" defaultValue={book.amount}  ref={amountB}  name="amount" className="form-control" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-1">
                  <label htmlFor="message-text" className="col-form-label">Categoria:</label>
                  <select name="categoria" ref={categB} className="form-control" id="">
                    <option>---Seleccione una categoria---</option>
                    <option value="novela">Novela</option>
                    <option value="poema">Poesia</option>
                    <option value="documentales">Documentales</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
              </div>
              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Descripcion:</label>
                <textarea name="descripcion"  defaultValue={book.descripcion} ref={descripB} className="form-control" cols="10" rows="2"></textarea>

              </div>

            </div>
          </form>

          <button className="btn btn-success btn-lg bt-add" onClick={postBook}>+Agregar</button>
        </div>
      </StyleFormBook>
    </Layaout>
  )
}

export default EditBook
