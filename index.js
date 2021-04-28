// function privacyInfo() {
//     alert("Diese Website nutzt ein selbst gehostetes Umami. Jedoch werden keine personenbezogenen Daten ausgewertet oder anderweitig verwendet.")
// }

dragElement(document.getElementById("modal"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "headertext")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "headertext").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function openModal() {
    let modalBackground = document.getElementById("modalbackground");
    let modal = document.getElementById("modal");

    modalBackground.style.display = "block";
    modal.style.display = "block";
}
function closeModal() {
    let modalBackground = document.getElementById("modalbackground");
    let modal = document.getElementById("modal");

    modalBackground.style.display = "none";
    modal.style.display = "none";
};
function openPrivacyModal() {
    let modalHeader = document.getElementById("modalheadertext")
    let modalContent = document.getElementById("modalcontent")

    modalHeader.innerHTML = 'Datenschutz Informatinen'
    modalContent.innerHTML = 'Diese Website nutzt ein selbst gehostetes Umami. Jedoch werden keine personenbezogenen Daten ausgewertet oder anderweitig verwendet.'
    openModal();
}
//* On DOM load
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("privacyInfo").addEventListener('click', openPrivacyModal);

    document.querySelector(".modal-close").addEventListener("click", closeModal)

    document.querySelector(".modal-background").addEventListener("click", function (event) {
        // Close the modal if the user clicks somewhere outside the modal
        if (event.target != modal) {
            closeModal()
        }
    });
})