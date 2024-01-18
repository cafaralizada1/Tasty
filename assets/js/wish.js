const qutu  = document.getElementById('card')

function getProducts(){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    qutu.innerHTML = ""

    wishlist.map((item,index) => {
        let box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML =`
        <img src="${item.image}" alt="photo">
        <h1>${item.title}</h1>
        <p>$ ${item.price}</p>
        <div class = "jsBtn">
            <button class = "wishlistBtn" onclick  = "removeItemForWishlist(${index})">SIL</button>
        </div>
        `
        qutu.appendChild(box)
    })
}

function removeItemForWishlist(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    getProducts()
}

getProducts()

