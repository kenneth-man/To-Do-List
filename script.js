'use strict';

const input = document.querySelector('#input');
const addBtn = document.querySelector('#add-item');
const clearAllBtn = document.querySelector('#clear-items');
const itemContainer = document.querySelector('#item-container');

const popupEdit = document.querySelector('#popup-edit');
const popupEditInput = document.querySelector('#popup-edit-input');
const popupEditBtn = document.querySelector('#popup-edit-btn');

const popupError = document.querySelector('#popup-error');
const popupErrorContainer = document.querySelector('#popup-error-container');
const popupErrorBtn = document.querySelector('#popup-error-btn');

let itemArr = [];

const initOptionBtns = () => {
    //for when completed button clicked
    document.querySelector('#complete').addEventListener('click', (e) => {
        e.target.closest('.todo__btn-row').previousElementSibling.style.color = 'rgb(0,200,0)';
        e.target.closest('.todo__btn-row').previousElementSibling.style.fontWeight = '900';
    });

    document.querySelector('#edit').addEventListener('click', (e) => {
        popupEdit.classList.remove('hidden');
    });

    //for when delete button clicked
    document.querySelector('#delete').addEventListener('click', (e) => {
        e.target.closest('.todo__btn-row').closest('.todo__item').remove();
    })
};


//add a task
addBtn.addEventListener('click', () => {
    if(input.value) {
        itemContainer.insertAdjacentHTML('afterbegin',
            `
            <div class="todo__item row transition" id="item">
                <h1 class="todo__h2 transition" id="item-name">${input.value}</h1>

                <div class="todo__btn-row row">
                    <button class="todo__btn center" id="complete">
                        <svg class="todo__icon todo__complete transition">
                            <use xlink:href="./res/sprite.svg#icon-check"></use>
                        </svg>
                    </button>

                    <button class="todo__btn center" id="edit">
                        <svg class="todo__icon todo__edit transition">
                            <use xlink:href="./res/sprite.svg#icon-new-message"></use>
                        </svg>
                    </button>

                    <button class="todo__btn center" id="delete">
                        <svg class="todo__icon todo__delete transition">
                            <use xlink:href="./res/sprite.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </div>
            </div> 
            `
        );

        itemArr.push(input.value);

        input.value = '';

        initOptionBtns();
    } else {
        popupError.classList.remove('hidden');
        popupErrorContainer.classList.add('animation');
    }
});

//close popup edit 
popupEditBtn.addEventListener('click', (e) => {
    //DOM traverse all the way up to the item name h1
    e.target.closest('.popup__container').closest('.popup').previousElementSibling.children[2].children[0].children[0].textContent = popupEditInput.value;
    popupEdit.classList.add('hidden');
    popupEditInput.value = '';
});

//close popup error
popupErrorBtn.addEventListener('click', () => {
    popupError.classList.add('hidden');
    popupErrorContainer.classList.remove('animation');
});

/*clearing the item container (all generated html) */
clearAllBtn.addEventListener('click', () => {
    itemContainer.innerHTML = '';
});
