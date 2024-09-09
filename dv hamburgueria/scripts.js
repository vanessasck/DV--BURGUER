const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')
  
function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',{
        style:'currency',
        currency:'BRL',
    })
    return newValue
}

function showAll( productsArrey){
myLi =''

    productsArrey.forEach(product => {
        myLi += `
<li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> R$ ${formatCurrency(product.price)}</p>
        </li>

`
    })
    list.innerHTML = myLi
}
function mapAllItens() {
    const newPrices = menuOptions.map((product) =>  ({
    ...product,
    price:product.price * 0.9
    
    })) 
   showAll(newPrices)
    }
function sumAllItens(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =`
    <li>
    <p> O valor total dos itens é R$ ${totalValue}</p>
    `
}
 function filterAllItens(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
 }


buttonShowAll.addEventListener('click',() => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItens)
filterAll.addEventListener('click', filterAllItens)