const addOrder = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const list = document.querySelector(".order");

//Open modal to show the form to the user
const openModal = e => {
    outerModal.classList.add('open');
};

const orderedList = event => {
    outerModal.classList.add("openDetail");
    const listDetail = event.target.closest('.order');
    const title = listDetail.querySelector('span').textContent;
    const { dish, size, amount} = listDetail.dataset;

    //Put it in modal
    const myHTML = `
        <span>${title}</span>
        <p>Order : ${dish} ${size} ${amount}</p>
    `;
    innerModal.innerHTML = myHTML;
};

//Adding eventListener to listen for click
addOrder.addEventListener('click', openModal);
list.addEventListener("click", orderedList);

//event delegation
window.addEventListener('click', (event) => {
	if (event.target.matches('button.submitOrder')) {
        event.target(".order");
    }
    if(event.target.matches("button.details")){
        return listDetail;
    }
});
