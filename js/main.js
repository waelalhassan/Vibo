(function() {
    "use strict";
    
    //* start accordion for section 2
    let accordion = document.getElementsByClassName("ac-item");


    for (let element of accordion) {
        element.addEventListener("click", function() {
            let item = this.nextElementSibling;
            item.classList.toggle("ac-active");

            if (item.style.maxHeight) {
                item.style.maxHeight = null;
            } else {
                item.style.maxHeight = `${item.scrollHeight + 20}px`;
            }
        })
    }


}()) // END