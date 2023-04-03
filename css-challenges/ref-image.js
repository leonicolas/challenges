
function loadRefImage(imageUrl) {

    function addRefImage(imageUrl) {
        const container = document.createElement("div");
        container.innerHTML = `
        <style>
            img.ref-image { position: absolute; display: none; z-index: -999; }
            img.ref-image.show-image { display: unset; }
            .ref-image-controls { position: absolute; right: 20px; }
        </style>
        <img class="ref-image" src="${imageUrl}">
        <span class="ref-image-controls">
            <label for="show-ref-image">Show Reference Image: </label>
            <input id="show-ref-image" type="checkbox">
        </span>`;
        document.body.appendChild(container);
    }

    window.addEventListener("load", () => {
        addRefImage(imageUrl);
        document.querySelector("#show-ref-image").addEventListener("change", () => {
            document.querySelector("img.ref-image").classList.toggle("show-image");
        });
    });
}
