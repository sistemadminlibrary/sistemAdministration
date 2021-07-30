import { useEffect, useState } from "react";

import clienteAxios from "../Config/config";

export const useCount = () => {

  
   const [status,setStatus] = useState(true);
    const [date,setDate] = useState("");
    const [countBoook, saveCountBook] = useState(0);
    const [countLoans, saveCountLoans] = useState(0);
    const [countReturn, saveCountReturn] = useState(0);
    const [countReservation, saveCountReservations] = useState(0);
   
 

    const url = ["get/books", "get/loans", "get/returns", "get/reservations"];
    let doc = [];
  useEffect(() => {
 
    if(status){
       let call = async () => {
      
        url.forEach(uri => {
          let data = clienteAxios.get(uri);
          doc.push(data);
         
        })
        
        
        let dc = await Promise.all(doc);
        

       let numBook = dc[0].data.reduce(
         (acc, el) => acc + parseInt(el.amount),
         0
       );
       saveCountBook(numBook);
       saveCountLoans(dc[1].data.length);
       saveCountReturn(dc[2].data.length);
       saveCountReservations(dc[3].data.length);
       setDate(dc[2].data);
       
     };
     call();
    setStatus(false);
    }

  }, [status]);

  
  return {
    countBoook,
    countLoans,
    countReturn,
    countReservation,
    date,
    setStatus,
    status,
  };
};
