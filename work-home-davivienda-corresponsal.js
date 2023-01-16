// Get the container element
const container = document.getElementById("containerBanner");
// Get the div elements inside the container
const div1 = document.getElementById("work-1");
const div2 = document.getElementById("work-2");
const div3 = document.getElementById("work-3");
const div4 = document.getElementById("work-4");
const div5 = document.getElementById("work-5");
const div6 = document.getElementById("work-6");


// Define a function that will be called when a div is clicked
function changeBackground(event) {
    // Get the element that was clicked
    const target = event.target;
    // Update the background of the container based on the clicked element
    if (target === div1) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63c56aeed4a4c3963e4bcf2e_cuzco_02.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div2) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63c56aec8d7ed077da72c187_DAVIVIENDA_CORRESPONSAL_ENTREVISTA_01.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div3) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63c56aecb0342d5b85d077d9_Cerbatana_01.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div4) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63c56aeb73aa94ea555e3009_Bebida_fermentada_01.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div5) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63c56aeeafad0b25efed21ec_Probando_02.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div6) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63c56aefafad0b0bd9ed21ed_Salida_02.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    }
}

div1.addEventListener("mouseover", changeBackground);
div2.addEventListener("mouseover", changeBackground);
div3.addEventListener("mouseover", changeBackground);
div4.addEventListener("mouseover", changeBackground);
div5.addEventListener("mouseover", changeBackground);
div6.addEventListener("mouseover", changeBackground);


