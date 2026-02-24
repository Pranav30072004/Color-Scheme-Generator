const colorChoiceInput = document.getElementById('color-picker');
const schemeChoiceInput = document.getElementById('scheme-selector');
const colorSchemeBtn = document.getElementById('scheme-generator-btn');


function generateScheme(color, mode) {
   fetch(`https://thecolorapi.com/scheme?hex=${color}&mode=${mode}`, {method: "GET"})
   .then(res => res.json())
   .then(data => {
       console.log(data);
   });

}

colorSchemeBtn.addEventListener('click', () => {
    let colorChoice = colorChoiceInput.value;
    let schemeChoice = schemeChoiceInput.value;

    generateScheme(colorChoice, schemeChoice)


})
