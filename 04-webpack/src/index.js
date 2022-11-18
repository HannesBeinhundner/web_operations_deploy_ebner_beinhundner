import join from "lodash/join"; // new impoert
import "./scss/style.scss"; // css import

function component() {
    const element = document.createElement("div");

    // Uses the Lodash library to join the array
    element.innerHTML = join(["Hello", "webpack"], " ");

    return element;
}

document.body.appendChild(component());
