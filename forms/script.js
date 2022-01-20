const fname = document.getElementById('fname'),
    lname = document.getElementById('lname'),
    emailAddress = document.getElementById('emailAddress'),
    phone = document.getElementById('phone'),
    avatar = document.getElementById('avatar'),
    birthdayData = document.getElementById('date'),
    infCols = document.getElementById('infCols'),
    submit = document.getElementById('submit');

let infValues = [], infId = [];


infCols.addEventListener('change', e => {
    if (e.target.id == 'male' || e.target.id == 'female') {
        infValues.push(e.target.value);
        infId.push('gender');
    } else {
        infValues.push(e.target.value);
        infId.push(e.target.id);
    }
}, true);


function previewFile() {
    let preview = document.querySelector('img'),
        file = document.querySelector('input[type=file]').files[0],
        reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
};

submit.addEventListener('click', function () {
    for (let i = 0; i < infValues.length; i++) {
        let addPlace = document.querySelector(`span[data-card-name="${infId[i]}"]`);
        if (infId[i] == 'avatar') {
            previewFile()
        } else {
            addPlace.innerText = infValues[i]
        }

    }
})

