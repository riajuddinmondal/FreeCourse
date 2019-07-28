    {% load static%} 
    function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = 
                this.responseText; 
            }
        };

        xhttp.open("GET","{%static 'course/python/page/introduction.html'%}",true)
        xhttp.send();
    }