const accordions = document.querySelectorAll(".accordion");

const plus = "./assets/images/icon-plus.svg";
const minus = "./assets/images/icon-minus.svg";

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".card-section-body");
    const button = accordion.querySelector(".btn-open");

    button.setAttribute("src", minus);

    accordion.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
    console.log(content);
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".card-section-body");
    const button = accordion.querySelector(".btn-open");

    button.setAttribute("src", plus);

    accordion.classList.remove("active");
    content.style.maxHeight = null;

    console.log(content);
}

accordions.forEach((accordion) => {
    const button = accordion.querySelector(".btn-open");
    const content = accordion.querySelector(".card-section-body");

    button.onclick = () => {
        if(content.style.maxHeight){
            closeAccordion(accordion);
        } else {
            accordions.forEach((accordion) => {
                closeAccordion(accordion);
            });

            openAccordion(accordion);
        }
    }
});

