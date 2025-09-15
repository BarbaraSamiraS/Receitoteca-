const icon = document.querySelector('.navbar .imgBars');
const iconX = document.querySelector('.navMoobile img');
const navMobile = document.querySelector('.navMoobile');

icon.addEventListener("click", () => {
    navMobile.style.display = "flex";
});

iconX.addEventListener("click", () => {
    navMobile.style.display = "none";
});