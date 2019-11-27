'use strict';

var IMAGES = ['img/photo1.jpg','img/photo2.jpg','img/photo3.jpg', 'img/photo4.jpeg', 'img/photo5.jpeg'];
var BACK_TIMER = 950;
var FRONT_TIMER = 100;
var backCounter = IMAGES.length - 1;
var frontCounter = 0;

var createSlider = function (block, currentIndex) {
    var currentImg = document.createElement('img');
    currentImg.classList.add('currentImg');
    currentImg.src = IMAGES[currentIndex];
    block.appendChild(currentImg);
};

var back = document.querySelector('.back');
createSlider(back, backCounter);

var front = document.querySelector('.front');
createSlider(front, frontCounter);

var createBackSlider = function () {
    back.innerHTML = '';
    createSlider(back, backCounter);
};

var createFrontSlider = function () {
    front.innerHTML = '';
    createSlider(front, frontCounter);
};

var right = document.querySelector('.right');
var onRightClick = function () {
    backCounter = frontCounter;
    setTimeout(createBackSlider, BACK_TIMER);
    frontCounter++;
    if (frontCounter > IMAGES.length - 1) {
        frontCounter = 0;
    }
    setTimeout(createFrontSlider, FRONT_TIMER);
};
right.addEventListener('click',onRightClick);

var left = document.querySelector('.left');
var onLeftClick = function () {
    backCounter = frontCounter;
    setTimeout(createBackSlider, BACK_TIMER);
    frontCounter--;
    if (frontCounter < 0) {
        frontCounter = IMAGES.length - 1;
    }
    setTimeout(createFrontSlider, FRONT_TIMER);
};
left.addEventListener('click', onLeftClick);