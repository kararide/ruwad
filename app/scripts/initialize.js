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

$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });
});