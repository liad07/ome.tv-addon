setTimeout(function () {
    document.getElementsByTagName("body")[0].style.backgroundColor="#242425";
    document.getElementById("chat-history").style.backgroundColor="#242425";
    document.getElementById("chat-textfield").style.backgroundColor="#242425";
    document.getElementById("country-filter-popup").style.backgroundColor="#242425";
    document.getElementById("roulette").style.backgroundColor="#242425";
    document.getElementsByClassName("chat-container")[0].style.backgroundColor="#242425";
    document.getElementsByClassName("chat__body")[0].style.backgroundColor="#242425";
    document.getElementsByClassName("chat__body")[0].style.color="white";
    document.getElementsByClassName("message-bubble")[0].style.backgroundColor="#242425";
    document.getElementsByClassName("message-bubble")[0].style.color="white";
    document.getElementsByClassName("emojionearea chat__textarea tr emojionearea-inline")[0].style.backgroundColor="#242425";
    document.getElementsByClassName("emojionearea-button-close")[0].style.backgroundColor="white";
    document.getElementsByClassName("emojionearea-picker emojionearea-picker-position-top emojionearea-filters-position-top emojionearea-search-position-top")[0].style.backgroundColor="#242425";
    document.getElementsByClassName("emojionearea chat__textarea tr emojionearea-inline")[0].style.border="none";
    document.getElementsByClassName("emojionearea-editor")[0].style.color="white";
    window.addEventListener('keydown', function (e) {
        console.log(e.key)
        if (e.key == " ") {document.getElementsByClassName("btn__bg")[1].click();console.log("user stop")}
        if (e.key == "n") {document.getElementsByClassName("btn__bg")[0].click();console.log("user start/forwad")}
    });
}, 5000);
