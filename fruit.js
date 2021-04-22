const loadPage = () => {
  let items = JSON.parse(localStorage.getItem("items"));
  if (items) {
    items.forEach((c) => {
      if (c.count == 0) {
        document.getElementById(`${c.name}-ac`).style.display = "inline";
        document.getElementById(`${c.name}-btn`).style.display = "none";
      } else {
        document.getElementById(`${c.name}-ac`).style.display = "none";
        document.getElementById(`${c.name}-btn`).style.display = "block";
        document.getElementById(`${c.name}-count`).innerHTML = c.count;
      }
    });
  }
};
const addItem = (name, price) => {
  let count = 1;
  let reachLimit = false;
  if (localStorage.getItem("items")) {
    let items = JSON.parse(localStorage.getItem("items"));
    let flag = false;
    items.forEach((c) => {
      if (c.name == name) {
        if (c.count < 10) {
          count = c.count + 1;
          c.count = c.count + 1;
          c.totalPrice = c.price * c.count;
          flag = true;
        } else {
          flag = true;
          reachLimit = true;
        }
      }
    });
    if (!flag) {
      items.push({
        count: 1,
        name: name,
        price: price,
        totalPrice: price,
      });
    }
    localStorage.setItem("items", JSON.stringify(items));
  } else {
    let items = [
      {
        count: 1,
        name: name,
        price: price,
        totalPrice: price,
      },
    ];
    localStorage.setItem("items", JSON.stringify(items));
  }
  if (reachLimit) {
    window.alert("You can add only 10 items each");
  } else {
    loadPage();
  }
};
const removeItem = (name) => {
  let items = JSON.parse(localStorage.getItem("items"));
  items.forEach((c) => {
    if (c.name == name) {
      c.count = c.count - 1;
      c.totalPrice = c.totalPrice - c.price;
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  loadPage();
};
// const addItem = (name) => {
//   let items = JSON.parse(localStorage.getItem("items"));
//   items.forEach((c) => {
//     if (c.name == name) {
//       c.count = c.count + 1;
//     }
//   });
//   localStorage.setItem("items", JSON.stringify(items));
// };
