const calcButton = document.getElementById('calculator-button')
const dofinansowanieButton = document.getElementById('dofinansowanie-button')
const offerButton = document.getElementById('offer-button')
const creditButton = document.getElementById('credit-button')
const collapseButton = document.getElementById('collapse-button')
const calcSection = document.getElementById('calculator-section')
const dofinansowanieSection = document.getElementById('dofinansowanie-section')
const offerSection = document.getElementById('offer-section')
const creditSection = document.getElementById('credit-section')
const collapseSection = document.getElementById('user-panel')
const container = document.getElementById('container')
let preventSpam = false;

if (calcButton) {
    calcButton.addEventListener('click', function () {
        if (!preventSpam) {
            preventSpam = true;
            if (calcButton.classList.contains('active')) {
                preventSpam = false;
                return 0;
            }
            calcButton.classList.add('active');
            calcSection.classList.add('active');
            container.style.backgroundColor = "var(--offer-bg)";
            offerButton.classList.remove('active');
            offerSection.classList.remove('active');
            dofinansowanieButton.classList.remove('active');
            dofinansowanieSection.classList.remove('active');
            creditButton.classList.remove('active');
            creditSection.classList.remove('active');
            setTimeout(function () { preventSpam = false }, 600);
        }
    });
}
if (dofinansowanieButton) {
    dofinansowanieButton.addEventListener('click', function () {
        if (!preventSpam) {
            preventSpam = true;
            if (dofinansowanieButton.classList.contains('active')) {
                preventSpam = false;
                return 0;
            }
            calcButton.classList.remove('active');
            calcSection.classList.remove('active');
            offerButton.classList.remove('active');
            offerSection.classList.remove('active');
            creditButton.classList.remove('active');
            creditSection.classList.remove('active');
            container.style.backgroundColor = "var(--offer-bg)";
            dofinansowanieButton.classList.add('active');
            dofinansowanieSection.classList.add('active');
            setTimeout(function () { preventSpam = false }, 600);
        }
    });
}
if (offerButton) {
    offerButton.addEventListener('click', function () {
        if (!preventSpam) {
            preventSpam = true;
            if (offerButton.classList.contains('active')) {
                preventSpam = false;
                return 0;
            }
            calcButton.classList.remove('active');
            calcSection.classList.remove('active');
            dofinansowanieButton.classList.remove('active');
            dofinansowanieSection.classList.remove('active');
            creditButton.classList.remove('active');
            creditSection.classList.remove('active');
            container.style.backgroundColor = "var(--offer-bg)";
            offerButton.classList.add('active');
            offerSection.classList.add('active');
            setTimeout(function () { preventSpam = false }, 600);
        }
    });
}
if (creditButton) {
    creditButton.addEventListener('click', function () {
        if (!preventSpam) {
            preventSpam = true;
            if (creditButton.classList.contains('active')) {
                preventSpam = false;
                return 0;
            }
            calcButton.classList.remove('active');
            calcSection.classList.remove('active');
            dofinansowanieButton.classList.remove('active');
            dofinansowanieSection.classList.remove('active');
            offerButton.classList.remove('active');
            offerSection.classList.remove('active');
            container.style.backgroundColor = "var(--credit-bg)";
            creditButton.classList.add('active');
            creditSection.classList.add('active');
            setTimeout(function () { preventSpam = false }, 600);
        }
    });
}

if (collapseButton) {
    collapseButton.addEventListener('click', () => {
        if (!preventSpam) {
            preventSpam = true;
            collapseSection.classList.toggle('active');
            setTimeout(function () { preventSpam = false }, 600);
        }
    })
}
