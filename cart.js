const removeItem = (name) => {
  let items = JSON.parse(localStorage.getItem("items"));
  let newItems = [];
  items.forEach((c) => {
    if (c.name != name) {
      newItems.push(c);
    }
  });
  // for(let i = 0; i < items.length; i++){
  //     console.log(items[i]);
  // }
  // items.forEach((item)=>{
  //     console.log(item);
  // })
  localStorage.setItem("items", JSON.stringify(newItems));
  loadCart();
};
const loadCart = () => {
  const items = JSON.parse(localStorage.getItem("items"));
  let html = "";
  let total = 0;
  items.forEach((c) => {
    if (c.count != 0) {
      total += parseInt(c.totalPrice);
      html += `<tr>
            <td style="width: 350px">
            <img alt="" height="200" src="${c.name}.jpg" width="200" />
            </td>
            <td class="auto-style3" style="width: 318px">
            <span class="auto-style11">${c.name}</span><br class="auto-style5" />

            <td class="auto-style11">${c.count} kg</td>
            <td class="auto-style11">Rs.${c.totalPrice}</td>
            <td class="auto-style2">
            <button class="button1" onclick=removeItem('${c.name}')>Remove</button>
            </td>
            </tr>`;
    }
  });
  html += `<p class="auto-style12">Total Price: ${total}</p>`;
  document.getElementById("cartTable").innerHTML = html;
};
const placed_order_message = () =>{
  window.alert("Order placed Successfully. Thank You for shopping with DailyFresh.com")
}