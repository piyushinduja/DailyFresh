const getBill = () => {
  let items = JSON.parse(localStorage.getItem("items"));
  let html = "";
  let grandTotal = 0;
  items.forEach((item) => {
    html += `<tr class="style3"></tr>
      <td>${item.name}</td>
      <td>${item.count} kgs</td>
      <td>Rs. ${item.totalPrice}</td>
      </tr>`;
    grandTotal += parseInt(item.totalPrice);
  });
  document.getElementById("inner-table").innerHTML = html;
  document.getElementById(
    "grand-total"
  ).innerHTML = `Grand Total: Rs. ${grandTotal}`;
  const date = new Date().toDateString();
  const time = new Date().toTimeString().slice(0, 8);
  document.getElementById("date").innerHTML = `Date of Order: ${date}`;
  document.getElementById("time").innerHTML = `Time of Order: ${time}`;
};
