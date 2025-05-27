const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const github = document.querySelector('#GitHub');

const dropZone = document.querySelector('#drop-zone');
const fileInput = document.querySelector('#fileInput');
const previewImage = document.querySelector('#preview-image');
const fileLabel = document.querySelector('#file-label');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameValue = username.value
    const emailValue = email.value
    const githubValue = github.value
    localStorage.setItem('username', usernameValue);
    localStorage.setItem('GitHub', githubValue);
    window.location.href = 'ticket.html';

})
//     if (validateInputs()) {

//         // Save username to localStorage to use on next page
//         localStorage.setItem('username', username.value.trim());
//         window.location.href = 'ticket.html';
//     }
// });

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const githubVal = github.value.trim();

    let isValid = true;

    if (usernameVal === '') {
        setError(username, 'Name is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (githubVal === '') {
        setError(github, 'GitHub username is required');
        isValid = false;
    } else {
        setSuccess(github);
    }

    return isValid;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^\S+@\S+\.\S+$/);
};

dropZone.addEventListener('click', () => {
    fileInput.click();
});


fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file && file.type.startsWith('image/')) {
        showImagePreview(file);
    } else {
        alert('Please select a valid image file');
    }
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});


dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
});


dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        fileInput.files = e.dataTransfer.files;
        showImagePreview(file);
    } else {
        alert('Please drop a valid image file');
    }
});

function showImagePreview(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
        fileLabel.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

    