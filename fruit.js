const loadPage = () => {
}
const addItem = (name,price) => {
    let count = 1;
    let reachLimit = false;
    if(localStorage.getItem('items')){
        let items = JSON.parse(localStorage.getItem('items'));
        let flag = false;
        items.forEach((c)=>{
            if(c.name==name){
                if(c.count<10){
                    count = c.count + 1;
                    c.count = c.count + 1;
                    c.totalPrice = c.price*c.count
                    flag = true;
                } else {
                    reachLimit = true;
                }
            }
        })
        if(!flag){
            items.push({
                count:1,
                name:name,
                price:price,
                totalPrice: price
            })
        }
        localStorage.setItem('items',JSON.stringify(items))
    } else {
        let items = [{
            count: 1,
            name:name,
            price:price,
            totalPrice: price
        }];
        localStorage.setItem('items',JSON.stringify(items))
    }
    if(reachLimit){
        window.alert("You can add only 10 items each")
    } else {
        // let html = `<button onclick=remove('${name}')>Remove</button><span>${count}</span><button onclick=add('${name}')>Add</button>`
        document.getElementById(`${name}-ac`).innerHTML = count;
    }
}
// const remove = (name) => {
//     let items = JSON.parse(localStorage.getItem('items'));
//     items.forEach((c)=> {
//         if(c.name==name){
//             c.count = c.count - 1;
//         }
//     })
//     localStorage.setItem('items',JSON.stringify(items))
// }
// const add = (name) => {
//     let items = JSON.parse(localStorage.getItem('items'));
//     items.forEach((c)=> {
//         if(c.name==name){
//             c.count = c.count + 1;
//         }
//     })
//     localStorage.setItem('items',JSON.stringify(items))
// }