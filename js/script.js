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

//Toggle Body scrolling -------------------
function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling");
}

// Filter Portfolio Items -----------------

let PortfolioItems;
const filterBtnsContainer = document.querySelector(".portfolio-filter");
filterBtnsContainer.addEventListener("click", (e) =>{
    
    if(e.target.classList.contains("portfolio-filter-btn") && !e.target.classList.contains("active")){
        
        filterBtnsContainer.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");
        toggleBodyScrolling();

        document.querySelector(".filter-status").classList.add("active");
        
        document.querySelector(".filter-status p").innerHTML = `Filtering <span>${e.target.innerHTML}</span> works ...`;

        setTimeout(() =>{
            filterItems(e.target);
        },400);
        
        setTimeout(() =>{
            document.querySelector(".filter-status").classList.remove("active");
            toggleBodyScrolling();
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
    PortfolioItems = document.querySelectorAll(".portfolio-item.show");
    console.log(PortfolioItems);
}

// Filter active catagory portfoliol Items
filterItems(document.querySelector(".portfolio-filter-btn.active"));

// Portfolio item Details popup ---------------

let portfolioItemIndex;
document.addEventListener("click", (e) =>{
    if(e.target.closest(".portfolio-item")){
        const currentItem = e.target.closest(".portfolio-item");
        portfolioItemIndex = Array.from(PortfolioItems).indexOf(currentItem);
        togglePopup();
    }
});

function togglePopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    toggleBodyScrolling();
}
document.querySelector(".pp-close-btn").addEventListener("click",togglePopup);