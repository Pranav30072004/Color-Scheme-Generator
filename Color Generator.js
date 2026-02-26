const colorChoiceInput = document.getElementById('color-picker');
const schemeChoiceInput = document.getElementById('scheme-selector');
const colorSchemeBtn = document.getElementById('scheme-generator-btn');
const schemeContainer = document.getElementById('color-scheme-container');


function generateScheme(color, mode) {
   fetch(`  https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
   .then(res => res.json())
   .then(data => {
       let colorSchemeHtml = data.colors.map( scheme =>
           `
           <div class="color-column">
                <div class="color-block"
                style="background-color: ${scheme.hex.value};">                
                </div>
                <div class="color-hex">${scheme.hex.value}</div>
           </div>
           `
       ).join('')
       schemeContainer.innerHTML = colorSchemeHtml;
   });

}

colorSchemeBtn.addEventListener('click', () => {
    let colorChoice = colorChoiceInput.value.replace("#", "");
    let schemeChoice = schemeChoiceInput.value;

    generateScheme(colorChoice, schemeChoice);
})

schemeContainer.addEventListener('click', (e) => {
    const column = e.target.closest('.color-column');
    if(!column) return;

    const hex = column.querySelector('.color-hex').textContent;

    navigator.clipboard.writeText(hex)
        .then(() => alert(`${hex} copied to clipboard`))
        .catch(err => console.log(err));
})

