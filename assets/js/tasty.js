let qutu = document.getElementById('card')
let limit = 4;
let page = 1;

async function getProducts(){
    let response = await axios.get(`https://65685e799927836bd974a707.mockapi.io/products?limit=${limit}&page=${page}`)
    let data = await response.data
    db = data

    db.map(item => {
        let box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML = `
        <img src="${item.image}" alt="photo">
        <h1>${item.title}</h1>
        <p>$ ${item.price}</p>
        <div class = "jsBtn">
            <button class = "cardBtn" onclick = "addToCard(${item.id})">SEPETE EKLE</button>
            <button class = "wishlistBtn" onclick  = "addToWishlist(${item.id})">WISHLISTE EKLE</button>
        </div>
        `
        qutu.appendChild(box)
    })
    page++
}
document.getElementById('load').addEventListener('click', getProducts)


function addToWishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    if(productItem){
        alert('favori olunmus urun')
    } else{
        wishlist.push(db.find(item => item.id == id))
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
}

function addToCard (id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productItem = cart.find(item => item.id == id);
    if(productItem){
        productItem.count = (productItem.count || 1) + 1
    } else {
        cart.push(db.find(item => item.id == id))
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
getProducts()