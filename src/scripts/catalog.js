export const catalog = (harvestedFoodArray) => {
    const foodToSell = []
    for (const foodObject of harvestedFoodArray) {
        foodToSell.push(foodObject.type)
    }
    return foodToSell
}

export const catalogList = () => {
    let html = "<ol>"

    for (const foodObject of foodToSell) {
        html += `<li id="vegetable--${foodObject.type}">${foodObject.type}</li>`
    }

    html += "</ol>"
    return html
}