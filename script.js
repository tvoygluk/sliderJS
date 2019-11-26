'use strict';

var IMAGES = ['img/photo1.jpg','img/photo2.jpg','img/photo3.jpg'];
var SLIDE_INDEX = 0;

var createSlider = function (block, currentIndex) {
    var currentImg = document.createElement('img');
    currentImg.classList.add('currentImg');
    currentImg.src = IMAGES[currentIndex];

    block.appendChild(currentImg);
};

var back = document.querySelector('.back');
createSlider(back, SLIDE_INDEX);

// var front = document.querySelector('.front');
// createSlider(front, SLIDE_INDEX+1);

var changeSlide = function (block, newIndex) {
    var myImg = block.querySelector('img');
    myImg.src = IMAGES[newIndex];
}

var right = document.querySelector('.right');
var onRightClick = function () {
    SLIDE_INDEX++;
    if (SLIDE_INDEX > IMAGES.length - 1) {
        SLIDE_INDEX = 0;
    } 
    changeSlide(back, SLIDE_INDEX);
};
right.addEventListener('click',onRightClick);

var left = document.querySelector('.left');
var onLeftClick = function () {
    SLIDE_INDEX--;
    if (SLIDE_INDEX < 0) {
        SLIDE_INDEX = IMAGES.length - 1;
    }
    changeSlide(back, SLIDE_INDEX);
};
left.addEventListener('click', onLeftClick);