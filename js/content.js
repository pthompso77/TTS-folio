// content.js

let setCopyrightDate = function() {
    let date = new Date();
    let year = date.getYear() + 1900;
    let copyrightYear = document.querySelector("#copyrightYear");
    // return year;
    copyrightYear.innerHTML = `&copy; ${year}`;
}