import clienteAxios from '../../../Config/config';
 export const getIds = async (datos) => {
    let dt = [];
    datos.forEach((Item) => {
      let data = clienteAxios.get(`get/book/${Item.book_id}`);
      dt.push(data);
    });

    let doc = await Promise.all(dt);

    doc.forEach((it) => {
      datos.forEach((Item) => {
        if (Item.book_id === it.data.data._id && it.data.data.amount === 0) {
          let tr = document.getElementById(`${Item.book_id}`);
          tr.children[6].textContent = "No disponible";
          tr.children[6].style.background = "lightcoral";
        } else if (Item.book_id === it.data.data._id && it.data.data.amount !== 0) {
          let tr = document.getElementById(`${Item.book_id}`);
          tr.children[6].textContent = "disponible";
          tr.children[6].style.background = "lightgreen"
        }
      });
    });
  };