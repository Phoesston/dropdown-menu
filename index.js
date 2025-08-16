function initDropdown({trigger = 'click'}={}){
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-btn');
        const menu = dropdown.querySelector('.dropdown-menu');

        if(!button || !menu) return;

        if(trigger === "click"){
            button.addEventListener("click",(e) => {
                e.stopPropagation();
                menu.classList.toggle("visible");

                //makes sure only 1 menu is open
                document.querySelectorAll(".dropdown-menu").forEach(m =>{
                    if (m !== menu) m.classList.remove("visible");
                });
            });

            //close when clicking outside
            document.addEventListener("click", () =>{
                menu.classList.remove("visible");
            });
        } else if(trigger === "hover"){
            dropdown.addEventListener("mouseenter", () => menu.classList.add("visible"));
            dropdown.addEventListener("mouseleave", () =>menu.classList.remove("visible"));
        }
    });
}

export {initDropdown};