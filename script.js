const getS = selector => document.querySelector(selector);

// START function button edit
getS(`.btn-edit`).onclick = function () {
    getS(`.edit-block`).classList.add(`show`)
    getS(`.edit-area`).value = getS(`.top-block`).innerHTML
    getS(`.style-block`).classList.remove(`show`)
}

// END 

// START function button save

getS(`.btn-save`).onclick = function () {
    getS(`.edit-block`).classList.remove(`show`)
    getS(`.top-block`).innerHTML = getS(`.edit-area`).value
    removeAll()
    getS(`.table`).checked = false;
    getS(`.list`).checked = false;
    getS(`.create-table`).classList.add(`hide`)
    getS(`.create-list`).classList.add(`hide`)
}

// END

// START function button style

getS(`.btn-style`).onclick =function ()  {
    getS(`.style-block`).classList.add(`show`)
    getS(`.edit-block`).classList.remove(`show`)
}

// END 

// START function for Font Size and Font Family
function fontSize() {
    document.querySelector(`.top-block`).style.fontSize = event.target.value
}

function fontFamily() {
    document.querySelector(`.top-block`).style.fontFamily = event.target.value
}

// END

// START function for fontColor and backgroudColor 

let colors = [`red`, `green`, `blue`, `yellow`, `grey`, `violet`, `brown`, `orange`, `black`]
for (let i = 0; i < getS(`.colors`).children.length; i++) {
    getS(`.colors`).children[i].style.backgroundColor = colors[i]
}

function fontColor() {
    if (getS(`.colors`).classList.contains(`bgColor`)) {
        getS(`.top-block`).style.backgroundColor = event.target.style.backgroundColor
    }
    else {
        getS(`.top-block`).style.color = event.target.style.backgroundColor
    }
    getS(`.colors`).classList.add(`hide`)
}

getS(`.btn-textColor`).onclick = function () {
    getS(`.colors`).classList.remove(`hide`)
    getS(`.colors`).classList.remove(`bgColor`)

}

getS(`.btn-bgColor`).onclick = function () {
    getS(`.colors`).classList.remove(`hide`)
    getS(`.colors`).classList.add(`bgColor`)

}

// END

// START function font bold 
function fontWeight() {
    if (event.target.checked) {
        getS(`.top-block`).classList.add(`bold`)
    }
    else {
        getS(`.top-block`).classList.remove(`bold`)
    }
}
// END

// START function font italic
function fontStyle() {
    if (event.target.checked) {
        getS(`.top-block`).classList.add(`italic`)
    }
    else {
        getS(`.top-block`).classList.remove(`italic`)
    }
}
// END



// START function show page add

getS(`.btn-add`).onclick = function () {
    getS(`.first`).classList.remove(`show`)
    getS(`.second`).classList.add(`show`)

}

// END

//START function choose list or table

getS(`.list-or-table`).onclick = function () {
    if (getS(`.table`).checked) {
        getS(`.create-table`).classList.remove(`hide`)
        getS(`.create-list`).classList.add(`hide`)
    }
    else {
        getS(`.create-table`).classList.add(`hide`)
        getS(`.create-list`).classList.remove(`hide`)
    }
}

// END

// START add list

const list = document.forms[`form-list`];

getS(`.btn-create-list`).onclick = function () {
    const countLi = list.count.value
    const typeLi = list.type.value
    if (exam(countLi) === false) {
        // exam(countLi)
        getS(`.edit-area`).value += `<ul style="list-style-type: ${typeLi}; margin-left:20px">`;
        for (let i = 0; i < countLi; i++) {
            getS(`.edit-area`).value += `<li>item ${i + 1}</li>`

        }
        getS(`.edit-area`).value += `</ul>`
        getS(`.first`).classList.add(`show`)
        getS(`.second`).classList.remove(`show`)
        console.log(exam(countLi))

    }
    else {
        document.querySelector(`.popup`).classList.add(`open`)
        document.querySelector(`.popup__text`).textContent = `Введіть число.`
    }
}

// END

// START add table


const table = document.forms[`form-table`];

getS(`.btn-create-table`).onclick = function () {
    const countTr = table.countTr.value
    const countTd = table.countTd.value
    const widthTD = table.widthTD.value
    const heightTD = table.heightTD.value
    const widthBorder = table.widthBorder.value
    const typeBorder = table.typeBorder.value
    const colorBorder = table.colorBorder.value

    if (exam(countTr) === false && exam(countTd) === false &&
        exam(widthTD) === false && exam(heightTD) === false &&
        exam(widthBorder) === false) {
        getS(`.edit-area`).value += `<table style="border-collapse: collapse">`;
        for (let i = 0; i < countTr; i++) {
            getS(`.edit-area`).value += `<tr>`
            for (let i = 0; i < countTd; i++) {
                getS(`.edit-area`).value += `<td style="width:${widthTD}px; height:${heightTD}px; border:${widthBorder}px ${typeBorder} ${colorBorder} ">TD</td>`
            }
            getS(`.edit-area`).value += `</tr>`
        }
        getS(`.edit-area`).value += `</table>`
        getS(`.first`).classList.add(`show`)
        getS(`.second`).classList.remove(`show`)
    }
    else {
        document.querySelector(`.popup`).classList.add(`open`)
        document.querySelector(`.popup__text`).textContent = `Введіть числові значення.`
    }

}

// END


//  FUNCTION FOR VERIFICATION

function removeAll() {
    table.countTr.value = ``
    table.countTd.value = ``
    table.widthTD.value = ``
    table.heightTD.value = ``
    table.widthBorder.value = ``
    table.typeBorder.value = `solid`
    table.colorBorder.value = `black`
    list.count.value = ``
    list.type.value = `circle`
}

function exam(elem) {
    return isNaN(elem)
}


function closePopup() {
    document.querySelector(`.popup`).classList.remove(`open`)
}