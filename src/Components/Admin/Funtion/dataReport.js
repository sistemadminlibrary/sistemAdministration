import {useState,useEffect} from 'react';
import clienteAxios from '../../../Config/config';
export const dataReport = () => {

  const [allBook,setBooks] = useState(0);
  const [allLoans,setLoans] = useState(0);
   const [allReturns, setReturns] = useState(0);
    const [allReservation, setReservations] = useState(0);

  const getUrl = ["get/book", "get/loans", "get/returns", "get/reservations"];
  useEffect(() => {
 
    const callApi = async () => {
    let doc = [];
      getUrl.forEach( (url) => {
       let data = clienteAxios.get(url);
       doc.push(data);
      })
      
      
    let data = await Promise.all(doc);
  
    let bookSume = data[0].data.book.reduce((acc,el) => acc + Number(el.amount) ,0);

    setBooks(bookSume)
    setLoans(data[1].data.length);
    setReturns(data[2].data.length);
    setReservations(data[3].data.length);

    }
    callApi();
  },[]);


  return {
    allBook,
    allLoans,
    allReturns,
    allReservation
  }
}

