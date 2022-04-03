import controlBtns from './modules/controlBtns';
import dest from './modules/dest';
import forms from './modules/forms';
import menuBurger from './modules/menuBurger';
import modal from './modules/modal';
import modalBtns from './modules/modalBtns';
import oneSlider from './modules/oneSlider';
import subscribe from './modules/subscribe';
import twoSlider from './modules/twoSlider';

document.addEventListener('DOMContentLoaded', () => {


	subscribe();
	controlBtns('.control-btn', '.video3', 'control-btn_active');
	dest();
	oneSlider('.swiperImage', '.swiper-button-prev', '.swiper-button-next', '.swiperImgBlock', 'animated', 'activeBtn', 'activeBtn2');
	twoSlider('.slide', '.slider-button-prev', '.slider-button-next', '.newWrapper', 'activeSlide', 'activeBtn', 'activeBtn2');
	menuBurger();
	modal();
	modalBtns('actived');



	forms();






})




