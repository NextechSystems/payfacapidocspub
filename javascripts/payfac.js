var allSpan = document.getElementsByClassName('toc-h1');

for (var x = 0; x < allSpan.length; x++) {
    allSpan[x].onclick = function () {
        if (this.parentNode) {
            // Unconmment this if you want to close open tabs before opening the tab that was clicked.
            // It's a bit jumpy because no jQuery to smooth out the transition.
            /* for (var z = 0; z < allSpan.length; z++){
                var childList = allSpan[z].parentNode.getElementsByTagName('UL');
                for (var y = 0; y < childList.length; y++) {
                        childList[y].style.display = "none";
                }
            } */
            // Open the sub-list if it isnt open. If it's open, close it
            var childList = this.parentNode.getElementsByTagName('UL');
            for (var y = 0; y < childList.length; y++) {
                var currentState = childList[y].style.display;
                if (currentState == "none" || currentState == "") {
                    childList[y].style.display = "block";
                }
                else {
                    childList[y].style.display = "none";
                }
            }

        }
    }
}