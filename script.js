'use strict';

var IMAGES = ['img/photo1.jpg','img/photo2.jpg','img/photo3.jpg'];
var SLIDE_INDEX = 0;

var createSlider = function (block, arrayPhotos, currentIndex) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    var currentImg = document.createElement('img');
    currentImg.classList.add('currentImg');
    currentImg.src = arrayPhotos[currentIndex];

    block.appendChild(wrapper);
    wrapper.appendChild(currentImg);
};

var back = document.querySelector('.back');
createSlider(back, IMAGES, SLIDE_INDEX);

var front = document.querySelector('.front');
createSlider(front, IMAGES, SLIDE_INDEX+1);