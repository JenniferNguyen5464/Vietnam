document.addEventListener("DOMContentLoaded", function () {
    // Lightbox effect for gallery images
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.id = "backToTop";
    backToTop.innerText = "↑";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Add Skip Link for Accessibility
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.className = "skip-link";
    skipLink.innerText = "Skip to Content";
    document.body.prepend(skipLink);
});
