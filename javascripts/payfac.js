var allSpan = document.getElementsByClassName('toc-h1');

for (var x = 0; x < allSpan.length; x++) {
    allSpan[x].onclick = function () {
        if (this.parentNode) {
            var childList = this.parentNode.getElementsByTagName('UL');
            for (var y = 0; y < childList.length; y++) {
                var currentState = childList[y].style.display;
                if (currentState == "none" || currentState =="") {
                    childList[y].style.display = "block";
                }
                else {
                    childList[y].style.display = "none";
                }
            }
            
        }
    }
}