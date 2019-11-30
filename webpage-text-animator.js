/*
    Created by Muhammad Aliyu - CEO of Mustiash Tech Company from 3:12 am to 4:08 am on Monday - October 14, 2019

    A Webpage Text Animator is a javascript program that allow you to automate text on your webpage i.e. 
    to allow the text appear slowly and write on the page as if you are typing yourself  

    Webpage Text Animator (WTA) - version 1.0

*/

var animate = {
	text: function(animate_text, name_of_class, time_of_animation = 100){
		$(function(){
			/* Here we create an array and a for loop in which we convert all your text 
				as letters using the for loop and add it to an array 
			*/
		
			var text_array = [];
			for(var a of animate_text){
				text_array.push(a);
			}
			count = 0;
			size_arr = text_array.length;
		
			/* Here we created a function which takes the letters inside the text_array 
				and append it into the html div class .texthere   
			*/
		
			function animateText(){
				count++;
				if (count <= size_arr){
					$(name_of_class).append(text_array[count - 1]);
				}else{
					setInterval(0);
				}
			}
		
			//Here we add your text after some certain milliseconds
		
			setInterval(function(){
				animateText();
			}, time_of_animation);
			
		});
	}
}