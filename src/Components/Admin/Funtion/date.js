 
  const verifydate = (data) => {
    let year = new Date().getFullYear(),
      month = new Date().getMonth() + 1,
      day = new Date().getDate();
    let fecha = `${year}-${month <= 9 ? "0" + month : month}-${
      day <= 9 ? "0" + day : day
    }`;
    
    data.forEach((Item) => {
      if (fecha.indexOf(Item.return_date) !== -1) {
        let td = document.getElementById(`${Item._id}`);
         td.style.backgroundColor = "lightcoral";
         td.children[6].children[0].disabled = false;

      }else{
        let buttom = document.querySelectorAll(".btn-warning");
       buttom.forEach(btn => {
        btn.disabled = true;
       })
       
      }
    });
  };
export { verifydate };