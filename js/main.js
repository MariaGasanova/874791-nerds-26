var link = document.querySelector('.contacts-modal button');

var popup = document.querySelector(".feedback-form");

var close = popup.querySelector(".feedback-button-close");
var login = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();

    console.info('Im am hear')


    popup.classList.add("feedback-form-show");

    if (storage) {
        username.value = storage;
        email.focus();
    } else {
        username.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-form-show");
});

popup.addEventListener("submit", function (evt) {

    if (!username.value || !email.value) {
        evt.preventDefault();

        popup.classList.add("feedback-form-error");
        console.log("Введите имя и email");
    } else {
        localStorage.setItem("username", username.value);
    } if (isStorageSupport) {
        localStorage.setItem("username", username.value);
    }

});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback-form-show")) {
            popup.classList.remove("feedback-form-show");
            popup.classList.remove("feedback-form-error");
        }
    }
});