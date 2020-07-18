const addOrder = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

const openModal = e => {
    outerModal.classList.add('open');
};

const handleClick = e => {
    console.log('remove class');

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
