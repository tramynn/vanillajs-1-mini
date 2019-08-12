let count = 0;

function increase() {
    count++;
    console.log(count);
}

function decrease() {
    count--;
    console.log(count);
}

function reset() {
    count = 0;
    console.log(count);
}

function selectTheme(theme) {
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    const button = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        button[i].className = theme;
    }
}

