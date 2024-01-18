/////////////////////////////////////////////////////////////////////////////////////////

let form = document.getElementById('form')
let Name = document.getElementById('name')
let Price = document.getElementById('price')

async function getPost(event){
    event.preventDefault()
    let data = {
        title: Name.value,
        price: Price.value
    }
    await axios.post(`https://65685e799927836bd974a707.mockapi.io/products/`, data)
    getProducts()
    form.reset()
}
form.addEventListener("submit",getPost)

/////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////

let table = document.getElementById('list')

function getProducts(){
    table.innerHTML = ""
    axios.get(`https://65685e799927836bd974a707.mockapi.io/products/`)
    .then(response => {
        let db = response.data
        db.map(item => {
            let cartBox = document.createElement("tr")
            cartBox.className = "cardList"
            cartBox.innerHTML = `
            <td><img src="${item.image}" alt="photo"></td>
            <td><h1>${item.title}</h1></td>
            <td><p>$ ${item.price}</p></td>
            
                <td><button class = "cardBtn" onclick = "removeItem(${item.id})">SIL</button></td>
                
            
            `
            table.appendChild(cartBox)
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

async function removeItem(id){
    await axios.delete(`https://65685e799927836bd974a707.mockapi.io/products/${id}`)
    getProducts()
}
getProducts()

//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

function getSortAz() {
    table.innerHTML = ''
    axios.get(`https://65685e799927836bd974a707.mockapi.io/products`)
        .then(response => {
            let db = response.data
            let sortedData = db.sort((a, b) => a.title.localeCompare(b.title))
            sortedData.forEach(item => {
                let cartBox = document.createElement("tr")
                cartBox.className = "cardList"
                cartBox.innerHTML = `
                <td><img src=${item.image} alt=""></td>
                <td> ${item.title}</td>
                <td>price ${item.price}</td>
                <td><button onclick="sil(${item.id})">sil</button></td>

            `
                table.appendChild(cartBox)
            });
        })
    console.log("hgfgjh");
}

document.getElementById("btnA").addEventListener("click", getSortAz)


function getSortZa() {
    table.innerHTML = ''
    axios.get(`https://65685e799927836bd974a707.mockapi.io/products/`)
        .then(response => {
            let db = response.data
            let sortedData = db.sort((a, b) => b.title.localeCompare(a.title))
            sortedData.forEach(item => {
                let cartBox = document.createElement("tr")
                cartBox.className = "cardList"
                cartBox.innerHTML = `
                <td><img src=${item.image} alt=""></td>
                <td> ${item.title}</td>
                <td>price ${item.price}</td>
                <td><button onclick="sil(${item.id})">sil</button></td>

            `
                table.appendChild(cartBox)
            });
        })
}

document.getElementById("btnZ").addEventListener("click", getSortZa)


document.getElementById("btnD").addEventListener("click", getProducts)

