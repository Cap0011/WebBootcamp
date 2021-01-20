// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const liContainer = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const quantityInput = document.querySelector('#qty');
    const productInput = document.querySelector('#product');

    const newLi = document.createElement('li');
    newLi.innerText = `${quantityInput.value} ${productInput.value}`;
    //newLi.append(`${quantityInput.value} ${productInput.value}`);
    liContainer.appendChild(newLi);

    quantityInput.value = "";
    productInput.value = "";
});