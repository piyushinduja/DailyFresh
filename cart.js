const removeItem = (name) => {
    let items = JSON.parse(localStorage.getItem('items'));
    let newItems = [];
    items.forEach((c)=> {
        if(c.name != name){
            newItems.push(c);
        }
    })
    // for(let i = 0; i < items.length; i++){
    //     console.log(items[i]);
    // }
    // items.forEach((item)=>{
    //     console.log(item);
    // })
    localStorage.setItem('items', JSON.stringify(newItems));
    loadCart();
}
const loadCart = () => {
    const items = JSON.parse(localStorage.getItem('items'))
    let html = "";
    let total = 0; 
    items.forEach((c)=> {
        total += parseInt(c.totalPrice);
        html += `<tr>
        <td style="width: 350px">
            <img alt="" height="200" src="${c.name}.jpg" width="200" />
        </td>
        <td class="auto-style3" style="width: 318px">
            <span class="auto-style7">${c.name}</span><br class="auto-style5" />
        <td class="auto-style8" style="width: 300px">
        <td>${c.count}</td>
        <td>${c.totalPrice}</td>
        <td class="auto-style2">
            <button class="button1" onclick=removeItem('${c.name}')>Remove</button>
        </td>
        </tr>`
    })
    html += `<p class= ''>Total Price: ${total}</p>
`
    document.getElementById('cartTable').innerHTML = html
}
