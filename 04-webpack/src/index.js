import join from "lodash/join"; // new impoert
import "./scss/style.scss"; // css import
import Gif from "./images/image.gif";

function component() {
    const element = document.createElement("div");

    // Uses the Lodash library to join the array
    element.innerHTML = join(["Hello", "webpack"], " ");

    return element;
}

function image() {
    const image = new Image();
    image.src = Gif;

    return image;
}

document.body.appendChild(component());
document.body.appendChild(image());
