window.$ = window.jQuery = require('jquery');
var typed = require('typed.js');

$(document).ready(function() {
    $("#typed-text").typed({
        strings:  ["założyć firmę w Dubaju?","znaleźć kontrahenta?","prowadzić tam biznes?"],
        typeSpeed: 50,
        startDelay: 10,
        loop: true
    });
});