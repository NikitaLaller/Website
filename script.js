document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    
    dropdown.addEventListener("click", function() {
        let menu = this.querySelector(".dropdown-menu");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            document.querySelector(".dropdown-menu").style.display = "none";
        }
    });
});
