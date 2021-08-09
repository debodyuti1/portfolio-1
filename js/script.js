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
        portfolioItemDetails();
        updateNextPrevItem();
    }
});

function togglePopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    toggleBodyScrolling();
}
document.querySelector(".pp-close-btn").addEventListener("click",togglePopup);

function portfolioItemDetails(){

    // Getting thumbnail from same src
    document.querySelector(".pp-thumbnail img").src = 
    PortfolioItems[portfolioItemIndex].querySelector("img").src;

    // Getting heading of project details
    document.querySelector(".pp-header h3").innerHTML = 
    PortfolioItems[portfolioItemIndex].querySelector(".portfolio-item-title").innerHTML;

    // Getting body details
    document.querySelector(".pp-body").innerHTML = 
    PortfolioItems[portfolioItemIndex].querySelector(".portfolio-item-details").innerHTML;


    // Numbering js for heading ex. 1 of 5
    document.querySelector(".pp-counter").innerHTML = `${portfolioItemIndex+1} of ${PortfolioItems.length} (<span title = "catagory">${document.querySelector(".portfolio-filter-btn.active").innerHTML}</span>)`;
};

function updateNextPrevItem(){
    if(portfolioItemIndex !== 0){
        document.querySelector(".pp-footer-left").classList.remove("hidden");

        document.querySelector(".pp-footer-left h3").innerHTML = PortfolioItems[portfolioItemIndex-1].querySelector("h3").innerHTML;

        document.querySelector(".pp-footer-left img").src = PortfolioItems[portfolioItemIndex-1].querySelector("img").src;
    }
    else{
        document.querySelector(".pp-footer-left").classList.add("hidden");
    }

    if(portfolioItemIndex !== PortfolioItems.length-1){
       
        document.querySelector(".pp-footer-right").classList.remove("hidden");

        document.querySelector(".pp-footer-right h3").innerHTML = PortfolioItems[portfolioItemIndex+1].querySelector("h3").innerHTML;

        document.querySelector(".pp-footer-right img").src = PortfolioItems[portfolioItemIndex+1].querySelector("img").src;

    }
    else{
        document.querySelector(".pp-footer-right").classList.add("hidden");

    }
}

document.querySelector(".pp-prev-btn").addEventListener("click", () => {
    changePortfolioItem("prev");
});

document.querySelector(".pp-next-btn").addEventListener("click", () => {
    changePortfolioItem("next");
});

function changePortfolioItem(direction){
    if(direction == "prev"){
        portfolioItemIndex--;
    }
    else{
        portfolioItemIndex++;
    }

    document.querySelector(".pp-overlay").classList.add(direction);
    setTimeout(() => {

        document.querySelector(".pp-inner").scrollTo(0,0);
        portfolioItemDetails();
        updateNextPrevItem();

    },400);

    setTimeout(() => {
        document.querySelector(".pp-overlay").classList.remove(direction);
    },1000);
    
}

// Toggle Contact FOrm ------------------------------

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("toggle-contact-form-btn")){
        document.querySelector(".contact-form").classList.toggle("open");
        toggleBodyScrolling();
    }
});