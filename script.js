'use strict';

var IMAGES = ['img/photo1.jpg','img/photo2.jpg','img/photo3.jpg', 'img/photo4.jpeg', 'img/photo5.jpeg'];
var SLIDE_INDEX = IMAGES.length - 1;
var globalCounter = 0;
// TODO: Наладить начальные значения

var createSlider = function (block, currentIndex) {
    var currentImg = document.createElement('img');
    currentImg.classList.add('currentImg');
    currentImg.src = IMAGES[currentIndex];

    block.appendChild(currentImg);
};

var back = document.querySelector('.back');
createSlider(back, SLIDE_INDEX);
var front = document.querySelector('.front');
createSlider(front, globalCounter);

var right = document.querySelector('.right');
var onRightClick = function () {
    globalCounter = SLIDE_INDEX;

    SLIDE_INDEX++;
    if (SLIDE_INDEX > IMAGES.length - 1) {
        SLIDE_INDEX = 0;
    } 

    front.innerHTML = '';
    createSlider(front, SLIDE_INDEX);

    back.innerHTML = '';
    createSlider(back, globalCounter);
};
right.addEventListener('click',onRightClick);

var left = document.querySelector('.left');
var onLeftClick = function () {
    globalCounter = SLIDE_INDEX;

    SLIDE_INDEX--;
    if (SLIDE_INDEX < 0) {
        SLIDE_INDEX = IMAGES.length - 1;
    }

    front.innerHTML = '';
    createSlider(front, SLIDE_INDEX);

    back.innerHTML = '';
    createSlider(back, globalCounter);
};
left.addEventListener('click', onLeftClick);