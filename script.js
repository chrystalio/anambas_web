document.addEventListener("DOMContentLoaded", () => {
    // Hide loader and show content after 2.5 seconds
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2500);

    function hideLoader() {
        const loader = document.getElementById("loader");
        const imgLoader = document.getElementById("img-loader");
        imgLoader.style.display = "none";
        loader.style.display = "none";
    }

    function showContent() {
        const main = document.querySelector("main");
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");
        footer.style.display = "block";
        main.style.display = "flex";
        header.style.display = "block";
    }
});


// Set current year to footer
const year = new Date().getFullYear();
const copyRight = document.getElementById("copyright");

copyRight.textContent = `© ${year} Kabupaten Kepulauan Anambas`;

