let checkbox = document.querySelector("#checkbox")
let label = document.querySelector('.form-check-label')
let game = document.querySelector('#game')
let checkboxContainer = document.querySelector('.checkboxContainer')

function createDezenas(dezenasQt) {
    for (let dz = 0; dz = dezenasQt; dz++) {
        let newCheckbox = document.createElement('input')
        newCheckbox.setAttribute('type', 'checkbox')
        newCheckbox.value(dz)
        newCheckbox.id('checkbox')

        let checkboxLabel = document.createElement('label')
        checkboxLabel.setAttribute('for', 'checkbox')
        checkboxLabel.innerHTML = dz

        checkboxContainer.appendChild(checkboxLabel)
        checkboxContainer.appendChild(newCheckbox)

        console.log(dz);
    }
}

game.addEventListener('change', () => { changeCheckboxLabel() })

const changeCheckboxLabel = () => {
    if (game.value == 1) {
        for (let dz = 0; dz = 60; dz++) {
            let newCheckbox = document.createElement('input')
            newCheckbox.setAttribute('type', 'checkbox')
            newCheckbox.setAttribute('value', dz)
            newCheckbox.setAttribute('id', 'checkbox')

            let checkboxLabel = document.createElement('label')
            checkboxLabel.setAttribute('for', 'checkbox')
            checkboxLabel.innerHTML = dz

            checkboxContainer.appendChild(checkboxLabel)
            checkboxContainer.appendChild(newCheckbox)

            console.log(dz)
        }
    } else if (game.value == 2) {
        createDezenas(80)
    } else if (game.value == 3) {
        createDezenas(100)
    } else {
        return console.log("erro");
    }
}