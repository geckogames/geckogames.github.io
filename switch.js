window.onload = function () {
    document.querySelector("#gamestab").onclick = function () {
        document.querySelector("#gamestab").className = "tab selected"
        document.querySelector("#codetab").className = "tab"
        document.querySelector("#games").style.display = "block"
        document.querySelector("#code").style.display = "none"
    }
    document.querySelector("#codetab").onclick = function () {
        document.querySelector("#codetab").className = "tab selected"
        document.querySelector("#gamestab").className = "tab"
        document.querySelector("#code").style.display = "block"
        document.querySelector("#games").style.display = "none"
    }
}
