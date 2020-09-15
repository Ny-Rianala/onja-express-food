const addOrderBtn = document.querySelector('button.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const orderForm = document.querySelector("form");
const orderedList = document.querySelector(".order-list");

//Function that will handle new order
const openModal = e => {
    //innerModal.appendChild(orderForm);
  
    innerModal.innerHTML = `
        <form>
        <p>Your name :</p>
        <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
        />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba   </option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input
						class="input-form"
						type="number"
						id="quantity"
						name="amount"
						placeholder="Enter a number here"
						required
					/>
                    <button class="submitOrder" type="submit">Add this order</button>
        </form>
    `;
    outerModal.classList.add('open');
    //orderForm.innerHTML = formHTML;
};

//function to close modals
const handleCloseModal = event => {
    const isOutside = !event.target.closest(".inner-modal");
    if (isOutside) {
        outerModal.classList.remove("open")
    }
};

const closeModal  = () => {
    outerModal.classList.remove("open");
}
const handleEscapeKey = event => {
    if (event.key === 'Escape') {
        closeModal();
    }
    };


    const handleSubmit = event => {
    event.preventDefault();
    if (event.target.matches("form")) {
        const form = event.target;
        const {name, dish, size, amount} = form;
        const myHTML = `
            <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${amount.value}">
            <span class="title">
                ${name.value}
            </span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
        `;
        orderedList.innerHTML += myHTML;
        closeModal();
        form.reset();
    
    }
};

const showDetailModal = order => {
    //grab the detail
    const {dish, size, amount} = order.dataset;
    const name = order.querySelector(".title").textContent;
    const detailHTML = `
      <h4>${name}</h4>
      <h5>Order:</h5>
      <p>${dish} ${size} ${amount}</p>
    `;
    //open modal
    innerModal.innerHTML = detailHTML;
    outerModal.classList.add('open')
};

const deleteOrder = order => {
    order.remove();
};


const handleBtnClick = e => {
    if (e.target.matches("button.details")) {
        const order = event.target.closest(".order");
         showDetailModal(order);
       
    }
    if (e.target.matches("button.served")) {
        //pass the order
        const order = event.target.closest(".order");
        deleteOrder(order);
    }
};

//Listeners
window.addEventListener("click", handleBtnClick);
window.addEventListener("submit", handleSubmit);
window.addEventListener("keydown", handleEscapeKey);
outerModal.addEventListener("click", handleCloseModal);
addOrderBtn.addEventListener("click", openModal);


/*const orderedList = (e) => {
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
*/
