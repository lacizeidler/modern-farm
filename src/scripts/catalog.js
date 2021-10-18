

export const catalog = (harvestedFoodArray) => {
    let html = ""

    for (const harvestedFoodObject of harvestedFoodArray) {
        html += `
        <section class="plant">${harvestedFoodObject.type}</section>
        `
    }
    return html
}


