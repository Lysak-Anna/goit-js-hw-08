import throttle from "lodash.throttle";


const emailValue = document.querySelector('input');
const textareaValue = document.querySelector('textarea');
const submitFromForm = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formData = {};

submitFromForm.addEventListener('submit', submitButtonHandler);
submitFromForm.addEventListener('input', throttle(formInputHandler, 500));
getDataFromStorage();

function formInputHandler(event) {
    event.target.name;
    event.target.value;
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function submitButtonHandler(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function getDataFromStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    
    if (savedData) {
        
        emailValue.value = parsedData.email;
        textareaValue.value = parsedData.message;
    }
}
