getMax = function() {
     return document.getElementsByClassName('entry').length;
}

layout = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var idMax = getMax();
    if (height > width) {
        document.getElementById('banner').style.height = '9vw';
        document.getElementById('banner').style.fontSize = '6vw';
        document.getElementById('container').style.width = '80vw';
        for (i = 0; i < idMax; i++) {
            document.getElementsByClassName('date')[i].style.fontSize = '3vw';
            document.getElementsByClassName('title')[i].style.fontSize = '3vw';
            document.getElementsByClassName('content')[i].style.fontSize = '2.75vw';
        }
    } else if (width > height) {
        document.getElementById('banner').style.height = '6vw';
        document.getElementById('banner').style.fontSize = '4vw';
        document.getElementById('container').style.width = '60vw';
        for (i = 0; i < idMax; i++) {
            document.getElementsByClassName('date')[i].style.fontSize = '2vw';
            document.getElementsByClassName('title')[i].style.fontSize = '2vw';
            document.getElementsByClassName('content')[i].style.fontSize = '1.5vw';
        }
    }
}

show = function(id) {
    var idMax = getMax();
    for (i = 1; i <= idMax; i++) {
        if (i === id) {
            if (document.getElementById(id).getElementsByClassName('content')[0].style.display === 'none') {
                document.getElementById(id).getElementsByClassName('content')[0].style.display = 'initial';
                window.location.hash = '#' + id;
            } else if (document.getElementById(id).getElementsByClassName('content')[0].style.display === 'initial') {
                document.getElementById(id).getElementsByClassName('content')[0].style.display = 'none';
                window.location.hash = '';
            }
        } else {
            document.getElementById(i).getElementsByClassName('content')[0].style.display = 'none';
        }
    }
}

window.onload = function(event) {
    layout();
    var hash = window.location.hash.slice(1);
    show(parseInt(hash, 10));
}

window.onresize = function(event) {
    layout();
}
