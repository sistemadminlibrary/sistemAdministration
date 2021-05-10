import { useEffect, useState } from "react";

import clienteAxios from "../Config/config";

export const useCount = () => {

    const [date,setDate] = useState("");
    const [countBoook, saveCountBook] = useState(0);
    const [countLoans, saveCountLoans] = useState(0);
    const [countReturn, saveCountReturn] = useState(0);
    const [countReservation, saveCountReservations] = useState(0);
   

  useEffect(() => {
    let call = async () => {
      const primerGet = new Promise((resolve, reject) => {
        try {
          resolve(clienteAxios.get("get/books"));
        } catch (error) {
          reject(error);
        }
      });
      const segundoGet = new Promise((resolve, reject) => {
        try {
          resolve(clienteAxios.get("get/loans"));
        } catch (error) {
          reject(error);
        }
      });
      const tercerGet = new Promise((resolve, reject) => {
        try {
          resolve(clienteAxios.get("get/returns"));
        } catch (error) {
          reject(error);
        }
      });
      const cuartoGet = new Promise((resolve, reject) => {
        try {
          resolve(clienteAxios.get("get/reservations"));
        } catch (error) {
          reject(error);
        }
      });    
      let data = await Promise.all([
        primerGet,
        segundoGet,
        tercerGet,
        cuartoGet,
      ]);

      let numBook = data[0].data.reduce((acc,el) => acc + parseInt(el.amount) ,0);
      saveCountBook(numBook);
      saveCountLoans(data[1].data.length);
      saveCountReturn(data[2].data.length);
      saveCountReservations(data[3].data.length);
      setDate(data[2].data)
    };
    call();
  }, []);

  
  return {
    countBoook,
    countLoans,
    countReturn,
    countReservation,
   date
  };
};
