const addOrder = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const submitButton = document.querySelector(".submitOrder");
const orderedList = document.querySelector(".order-list");

const openModal = e => {
    outerModal.classList.add('open');
    
    const card = event.target.closest('.order-list');
	const { dish, size, amount} = card.dataset;
	const myHTML = `
            <img src="${img}"/>
            <p>Order : ${dish} ${size} ${amount}</p>
    `;
	orderedList.innerHTML = myHTML;
};


const handleClick = e => {
    const isOutside = !e.target.closest('.inner-modal');
    if (isOutside) {
        outerModal.classList.remove('open');
    }
};

const handleEscape = e => {
    if (e.key === 'Escape') {
        outerModal.classList.remove('open');
    }
};


window.addEventListener('keydown', handleEscape);
outerModal.addEventListener('click', handleClick);
addOrder.addEventListener('click', openModal);
submitButton.addEventListener("click", orderedList);

//event delegation
const handleModalButton = event => {
	if (event.target.matches('button.submitOrder')) {
	}
};
window.addEventListener('click', handleModalButton);