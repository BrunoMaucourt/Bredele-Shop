/**
 * Slider for homepage
 */

const arrow_left = document.getElementById("slider_arrow_left");
const arrow_right = document.getElementById("slider_arrow_right");
const picture = document.querySelectorAll(".slider_picture");
const number_picture = picture.length;
let current_picture = 0;

arrow_left.addEventListener("click", function(){
    picture[current_picture].classList.add('hidden');
    if(current_picture > 0){ 
		current_picture--;
	}else{
        current_picture = number_picture - 1;
	}
	picture[current_picture].classList.remove('hidden');
});

arrow_right.addEventListener("click", function(){
    picture[current_picture].classList.add('hidden');
	if(current_picture < number_picture -1){
		current_picture++;
	}else{
		current_picture = 0;
	}
	picture[current_picture].classList.remove('hidden');
});
