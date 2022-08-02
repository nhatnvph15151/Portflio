 var tabLinks = document.getElementsByClassName("tab-links")
        var tabContents = document.getElementsByClassName("tab-contents")

        function opentab(tabname) {
            for (tabLink of tabLinks) {
                tabLink.classList.remove("active-links")
            }
            for (tabContent of tabContents) {
                tabContent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-links");
            document.getElementById(tabname).classList.add("active-tab")
        }

 var sideMenu = document.getElementById("sidemenu")

 function openMenu(){
    sideMenu.style.right = "0"
 }
function closeMenu() {
    sideMenu.style.right = "-200px"
}

window.addEventListener("scroll", function () {
    var header = document.getElementById("scroll");
    header.classList.toggle("stick", window.scrollY > 0);
})