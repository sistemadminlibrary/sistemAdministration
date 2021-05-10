
    let getMont = new Date().getMonth() + 1;
    let getDate = new Date().getDate();

    let lastDate = `${new Date(
      new Date().getFullYear(),
      getMont,
      0
    ).getDate()}`;

export {getMont, getDate, lastDate}


