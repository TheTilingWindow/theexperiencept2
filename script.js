function change(name) {
    var place = document.getElementById('place')
    var flag = document.getElementById('flag')
    var title = document.getElementById('title')
    var parent = document.getElementById('parent')
    switch (name) {
        case 'jp':
            place.src = "jp-place.jpg"
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
            title.innerHTML = "This is Japan!"
            parent.style.backgroundImage = 'url("japanbg.jpg")'
            break;
    }
}