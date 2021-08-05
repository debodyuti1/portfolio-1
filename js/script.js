// Bg Animation Effect
function bgAnimationItems(){
    const rows = 7,cols = 10;
    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++){
            const div = document.createElement("div");
            div.className = 'col-${j+1}';
            document.querySelector(".bg-animation-effect").appendChild(div);
        }
    }
}
bgAnimationItems();

// Filter Portfolio Items -----------------
function filterItems(filterBtn){
    const selectedCatagory = filterBtn.getAttribute ("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) =>{
        const catagory =item.getAttribute("data-catagory").split(",");

    });

}

// Filter active catagory portfoliol Items
filterItems(document.querySelector(".portfolio-filter-btn.active"));

