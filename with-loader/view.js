const render = (elementId, html) => {
    getElement(elementId).innerHTML = html.join('');
}

const getElement = elementId => document.getElementById(elementId);

export default {render};