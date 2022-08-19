const submitBtn = document.querySelector(".btn")
const popupEl = document.querySelector(".popup")
const doneBtnEl = document.getElementById("done")

submitBtn.addEventListener("click", () => {
    popupEl.classList.add("open-popup");
    popupEl.classList.remove("close-popup");
})

doneBtnEl.addEventListener("click", () => {
    popupEl.classList.add("close-popup")
    popupEl.classList.remove("open-popup")
})