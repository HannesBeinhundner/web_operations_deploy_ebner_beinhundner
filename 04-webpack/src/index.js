import _ from "lodash/join"; // new impoert
import "./css/style.css"; // css import

function component() {
    const element = document.createElement("div");

    // Uses the Lodash library to join the array
    element.innerHTML = join(["Hello", "webpack"], " ");

    return element;
}

document.body.appendChild(component());
