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
const filterBtnsContainer = document.querySelector(".portfolio-filter");
filterBtnsContainer.addEventListener("click", (e) =>{
    
    if(e.target.classList.contains("portfolio-filter-btn") && !e.target.classList.contains("active")){
        
        filterBtnsContainer.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        document.querySelector(".filter-status").classList.add("active");
        
        document.querySelector(".filter-status p").innerHTML = `filtering <span>${e.target.innerHTML}</span> works`;

        setTimeout(() =>{
            filterItems(e.target);
        },400);
        
        setTimeout(() =>{
            document.querySelector(".filter-status").classList.remove("active");
        },800);
        
    }
});

function filterItems(filterBtn){
    const selectedCatagory = filterBtn.getAttribute ("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) =>{
        const catagory =item.getAttribute("data-catagory").split(",");
        if(catagory.indexOf(selectedCatagory) !== -1 || selectedCatagory === "all"){
            item.classList.add("show");
        }
        else{
            item.classList.remove("show");
        }
    });

}

// Filter active catagory portfoliol Items
filterItems(document.querySelector(".portfolio-filter-btn.active"));

