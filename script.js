document.addEventListener("DOMContentLoaded", function () {
    const author = document.querySelector(".author");

    if (author) { // التأكد من وجود العنصر قبل تشغيل الكود
        author.addEventListener("mouseover", function () {
            this.classList.add("hover-effect");
        });

        author.addEventListener("mouseout", function () {
            this.classList.remove("hover-effect");
        });
    }
});