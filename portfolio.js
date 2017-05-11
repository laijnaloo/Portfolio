/**
 * Created by Lina Andersson on 2016-04-26.
 */

function showGalleryMenu() {
    document.getElementById("dropdownGallery").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdownContent");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function showMenuItem(item) {
    document.getElementById(item).style.display = "inline-block";
}

function hideMenuItem(item) {
    document.getElementById(item).style.display = "none";
}