// Get the container element
const container = document.getElementById("containerBanner");
// Get the div elements inside the container
const div1 = document.getElementById("work-1");
const div2 = document.getElementById("work-2");
const div3 = document.getElementById("work-3");
const div4 = document.getElementById("work-4");
const div5 = document.getElementById("work-5");
const div6 = document.getElementById("work-6");
const div7 = document.getElementById("work-7");
const div8 = document.getElementById("work-8");
const div9 = document.getElementById("work-9");
const div10 = document.getElementById("work-10");
const div11 = document.getElementById("work-11");


// Define a function that will be called when a div is clicked
function changeBackground(event) {
    // Get the element that was clicked
    const target = event.target;
    // Update the background of the container based on the clicked element
    if (target === div1) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde017b4cbe60edcebf233_BAN%CC%83O_1342.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div2) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde01769e47314e15fabfe_BOLETA_1653.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div3) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde0138042b0003cdd447c_CAMELLOS_1429.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div4) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde01c4a28df5f267f98c9_CUENTA_1196.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div5) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde00b0efcc6c0e480ee3c_DAVIVIENDA-GOL_1350.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div6) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde013edeae2e0c3bb64fe_FOTICO_1347.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div7) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde01a571e7c835c3fc276_MASCOTA_1_1582.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div8) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde00d4849d27c50ee2ed3_PARQUE_1601.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div9) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde011c35f308353b09a87_PELICULA-XXX_1407.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div10) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde009edeae255c3bb6464_POSTE_1332.jpg')";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
    } else if (target === div11) {
        container.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploads-ssl.webflow.com/63863035988e031353b3a32b/63bde00f64f93d68ae5adb85_SALAM-MALECUM-501.jpg')";
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
div7.addEventListener("mouseover", changeBackground);
div8.addEventListener("mouseover", changeBackground);
div9.addEventListener("mouseover", changeBackground);
div10.addEventListener("mouseover", changeBackground);
div11.addEventListener("mouseover", changeBackground);

