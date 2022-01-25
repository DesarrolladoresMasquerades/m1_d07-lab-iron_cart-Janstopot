// ITERATION 1
console.log("JS loaded")

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subTotal = product.querySelector('.subtotal span').innerText = price.innerText * quantity.value
  return subTotal

}

function calculateAll() {

  // ITERATION 2
  const updateAllproducts = Array.from(document.getElementsByClassName('product'))
  let total = 0
  updateAllproducts.forEach((element) =>{total = total + updateSubtotal(element)})
  
  // ITERATION 3
  document.querySelector('#total-value span').textContent = total;

// ITERATION 4
}
function removeProduct(event) {
  const target = event.currentTarget;
  const targetParent = target.parentNode.parentNode
  targetParent.remove()
  console.log('The target in remove is:', targetParent);
  calculateAll()

}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.new-name').value
  const price = document.querySelector('.new-price').value

  const newTr = document.createElement('td')

  newTr.appendChild(name)
  document.getElementById('table').appendChild(newEle)

  console.log(price)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteBtn = Array.from(document.getElementsByClassName('btn-remove'))
  deleteBtn.forEach((element)=>{
    element.addEventListener('click', removeProduct)
  })
  
  const newBtn = document.getElementById('create');
  newBtn.addEventListener('click', createProduct)

  

  
});
