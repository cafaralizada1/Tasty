const qutu = document.getElementById('card')

function getProducts(){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    qutu.innerHTML =""

    cart.map((item,index) => {
        let box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML = `
        <img src="${item.image}" alt="photo">
        <h1>${item.title}</h1>
        <p>$ ${item.price}</p>
        <h2>Count ${item.count}</h2>
        <div class = "jsBtn">
            <button class = "cardBtn" onclick = "removeItemForCard(${index})">SIL</button>
        </div>
        `
        qutu.appendChild(box)
    })
}

function removeItemForCard(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}
getProducts()