const addOrder = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');


//Open modal to show the form to the user
const openModal = e => {
    outerModal.classList.add('open');
};


const orderedList = (e) => {
    const title = form.title.value;
    const {dish, size, amount} = form.dataset;

    //create html
    const myHTML = `
    <div class= "order-list">
    <span class= "title">${title}</span>
    <div class= "order">Order: ${dish} ${size} ${amount}</div>
    </div>
    `;
    innerModal.innerHTML = myHTML;
};


//Adding eventListener to show the form
addOrder.addEventListener('click', openModal);


//event delegation
window.addEventListener('submit', (event) => {
    if(event.target.matches("form")) {
        const form = event.target;
        form.title.value;
        form.dish.value;
        form.size.value;
        form.amount.value;
    }
    if(event.target.matches('.details')) {
        return(orderedList);
    }
});

