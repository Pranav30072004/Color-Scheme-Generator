const colorChoiceInput = document.getElementById('color-picker');
const schemeChoiceInput = document.getElementById('scheme-selector');
const colorSchemeBtn = document.getElementById('scheme-generator-btn');
const schemeContainer = document.getElementById('color-scheme-container');


function generateScheme(color, mode) {
   fetch(`  https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
   .then(res => res.json())
   .then(data => {
       let schemeArray = data.colors;
       let colorSchemeHtml = ``
       for(scheme of schemeArray) {
           colorSchemeHtml += `
           <img src="${scheme.image.bare}" id="color-img" />
           <p class="color-hex">${scheme.hex.value}</p>
           `
       }
       console.log(colorSchemeHtml);
       schemeContainer.innerHTML = colorSchemeHtml;
   });

}

colorSchemeBtn.addEventListener('click', () => {
    let colorChoice = colorChoiceInput.value.replace("#", "");
    let schemeChoice = schemeChoiceInput.value;

    generateScheme(colorChoice, schemeChoice);
})
