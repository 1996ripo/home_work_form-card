// -------------------Dropdown Date-----------
let yearDropdown = document.getElementById('year-dropdown');
let monthDropdown = document.getElementById('month-dropdown');
let earliestYear = new Date().getFullYear();
let currentYear = earliestYear + 50;


let calculateDataValue = 0;
let cardNameValue = document.getElementById('cardNameValue');
let infCVV = document.getElementById('infCVV');
let cvv = document.getElementById('cvv')
let expiresDate = document.getElementById('expiresDate');
let expirationDiv = document.getElementById('expirationDiv');
let cvvDiv = document.getElementById('cvvDiv');
let card = document.querySelector('.card');

function setDate(startDate, enddate, position) {
  while (startDate <= enddate) {
    let dateOption = document.createElement('option');

    if (startDate < 10) {
      dateOption.text = '0' + startDate;
    } else {
      dateOption.text = startDate;
    }
    position.add(dateOption);
    startDate += 1;
  }
};

setDate(earliestYear, currentYear, yearDropdown);
setDate(1, 12, monthDropdown);
// ------------------------Card Type--------------
function detectCardType(number) {
  let cards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/
  }

  for (let key in cards) {
    if (cards[key].test(number)) {
      return key;
    }
  }
};

function cardTypeAdd(cardNumber) {
  let icons = {
    visa: '<i class="fa fa-3x fa-cc-visa"></i>',
    mastercard: '<i class="fa fa-3x fa-cc-mastercard"></i>',
    amex: '<i class="fa fa-3x fa-cc-amex"></i>',
    diners: '<i class="fa fa-3x fa-cc-diners-club"></i>',
    discover: '<i class="fa fa-3x fa-cc-discover"></i>',
    jcb: '<i class="fa fa-3x fa-cc-jcb"></i>',
  };

  for (let key in icons) {
    let CardTypePosition = document.getElementsByClassName('CardType');
    if (key == detectCardType(cardNumber)) {
      for (let element of CardTypePosition) {
        element.innerHTML = icons[key];
      }
    }
  }

};

// ------add card inf to card pages------
let calculate = 0;
let cardNumberInf = document.getElementById('cardNumberInf');
let cardNumber = document.getElementById('cardNumber');
let cardNameInf = document.getElementById('cardNameInf');
let cardName = document.getElementById('cardName');

cardNumberInf.addEventListener('input', e => {
  if (e.target.value.length > 16) {
    e.target.value = e.target.value.slice(0, 16);
  }
  if (+e.data / 1 == 0 && e.data != '0') {
    calculate -= 1;
    cardNumber.children[calculate].innerText = '#';
  } else {
    cardNumber.children[calculate].innerText = e.data;
    calculate += 1;
    cardTypeAdd(+e.target.value);
  }
});

cardNameInf.addEventListener('input', e => {
  if (e.target.value == '') {
    cardNameValue.innerText = 'AD SOYAD';
  } else {
    cardNameValue.innerText = e.target.value;
  }
});


expirationDiv.addEventListener('change', e => {
  if (e.target.id == 'infCVV') {
    return;
  }
  if (e.target.id == 'month-dropdown') {
    expiresDate.children[0].innerText = e.target.value;
  } else if (e.target.value == 'YY') {
    expiresDate.children[1].innerText = e.target.value;
  } else {
    expiresDate.children[1].innerText = e.target.value[2] + '' + e.target.value[3];
  }
}, true);


infCVV.addEventListener('input', e => {
  if (e.target.value.length > 3) {
    e.target.value = e.target.value.slice(0, 3);
  }
  cvvDiv.innerText = e.target.value
})



// // -------------reverseCard-------------------

function reverseCard() {
  card.classList.toggle('reverce');
};


infCVV.addEventListener('focus', reverseCard);
infCVV.addEventListener('blur', reverseCard);
// ----------------focuse   border-----------------------------
let expires = document.getElementById('expires')



cardNumberInf.addEventListener('focus', e => {
  cardNumber.classList.toggle('boder');
});
cardNumberInf.addEventListener('blur', e => {
  cardNumber.classList.toggle('boder');
});

cardNameInf.addEventListener('focus', e => {
  cardName.classList.toggle('boder');
});
cardNameInf.addEventListener('blur', e => {
  cardName.classList.toggle('boder');
});


monthDropdown.addEventListener('focus', e => {
  expires.classList.toggle('boder');
});
monthDropdown.addEventListener('blur', e => {
  expires.classList.toggle('boder');
});


yearDropdown.addEventListener('focus', e => {
  expires.classList.toggle('boder');
});

yearDropdown.addEventListener('blur', e => {
  expires.classList.toggle('boder');
});


