window.loadRefImage = (imageUrl) => {

    function addRefImage(imageUrl) {
        const container = document.createElement("div");
        container.innerHTML = `
        <style>
            img.ref-image { position: absolute; display: none; z-index: -999; }
            img.ref-image.show-image { display: unset; }
            input#ref-image-opacity { position: relative; top: 8px;}
            .ref-image-controls { position: absolute; right: 20px; }
        </style>
        <img class="ref-image" src="${imageUrl}">
        <div class="ref-image-controls">
            <label for="ref-image-show">Show Reference Image: </label>
            <input id="ref-image-show" type="checkbox"><br>
            <label for="ref-image-opacity">Opacity:</label>
            <input id="ref-image-opacity" type="range" min="0" max="100" value="100" step="1">
        </div>`;
        document.body.appendChild(container);
    }

    window.addEventListener("load", () => {
        addRefImage(imageUrl);
        const refImage = document.querySelector("img.ref-image");
        document.querySelector("#ref-image-show").addEventListener("change", () => {
            refImage.classList.toggle("show-image");
        });
        document.querySelector("#ref-image-opacity").addEventListener("input", (event) => {
            refImage.style.opacity = parseInt(event.target.value, 10) / 100;
        });
    });
}
