window.loadRefImage = (imageUrl) => {
    function addRefImage(imageUrl) {
        const container = document.createElement("div");
        container.innerHTML = `
            <style>
                img.ref-image { position: absolute; z-index: 10; }
                img.ref-image.hide-image { display: none; }
                input#ref-image-opacity { position: relative; top: 8px;}
                .ref-image-controls { position: absolute; right: 20px; }
            </style>
            <img class="ref-image" src="${imageUrl}">
            <div class="ref-image-controls">
                <label for="ref-image-show">Show Reference Image: </label>
                <input id="ref-image-show" type="checkbox" checked><br>
                <label for="ref-image-opacity">Opacity:</label>
                <input id="ref-image-opacity" type="range" min="0" max="100" value="100" step="1">
            </div>`;
        document.body.appendChild(container);
    }

    window.addEventListener("load", () => {
        addRefImage(imageUrl);
        const refImage = document.querySelector("img.ref-image");

        const showImageInput = document.querySelector("#ref-image-show");
        showImageInput.addEventListener("change", (event) => {
            event.target.checked
                ? refImage.classList.remove("hide-image")
                : refImage.classList.add("hide-image");
            localStorage.setItem("showImage", showImageInput.checked);
        });
        const showImage = localStorage.getItem("showImage");
        if (showImage !== null) {
            showImageInput.checked = showImage === "true";
            showImageInput.dispatchEvent(new Event("change"));
        }

        const imageOpacityInput = document.querySelector("#ref-image-opacity");
        imageOpacityInput.addEventListener("input", (event) => {
            refImage.style.opacity = parseInt(event.target.value, 10) / 100;
            localStorage.setItem("imageOpacity", refImage.style.opacity);
        });
        const imageOpacity = localStorage.getItem("imageOpacity");
        if (imageOpacity !== null) {
            imageOpacityInput.value = parseFloat(imageOpacity) * 100;
            imageOpacityInput.dispatchEvent(new Event("input"));
        }
    });
};
