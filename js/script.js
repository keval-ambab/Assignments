//refresh to the top
$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
    
});

//navbar
(function() {
    document.querySelector('.nav-button').addEventListener('click',function() {
        this.parentNode.parentNode.classList.toggle('closed')
    },false);
})();


// accodion code
(function($){
	var ad = $('#accordion > p').hide();
	$('#accordion > h4 > a ').click(function(){
		ad.slideUp();
		$(this).parent().next().slideDown();
		return false;
	});
})(jQuery);


// accodion-tab code
$('.tab_content').hide();
$('.tab_content:first').show();

$('ul.tab li').click(function(){
	$('.tab_content').hide();
	var activeTab = $(this).attr('rel');
	$('#'+activeTab).fadeIn();

$('ul.tab li').removeClass('active');
$(this).addClass('active');

$('.tab_heading').removeClass('active');
$(".tab_heading[rel^='"+activeTab+"']").addClass('active');
});


// Js Calculator code
function myAddFunction(){
var a = Number(document.getElementById('one').value);
var b = Number(document.getElementById('two').value);
var result = document.getElementById('result').innerHTML=(a+b);
}
function myLessFunction(){
var a = Number(document.getElementById('one').value);
var b = Number(document.getElementById('two').value);
var result = document.getElementById('result').innerHTML=(a-b);
}
function myMultipleFunction(){
var a = Number(document.getElementById('one').value);
var b = Number(document.getElementById('two').value);
var result = document.getElementById('result').innerHTML=(a*b);
}
function myDivideFunction(){
var a = Number(document.getElementById('one').value);
var b = Number(document.getElementById('two').value);
var result = document.getElementById('result').innerHTML=(a/b);
}


// Jquery Calculator code
function Add() {
    var no1 = Number($("#num1").val());
    var no2 = Number($("#num2").val());
 	var sum = no1 + no2;
 	$("#result2").html(sum);

 	// console.log(sum);

 }

function Substract() {
    var no1 = Number($("#num1").val());
    var no2 = Number($("#num2").val());
    var sub = no1 - no2;
 	$("#result2").html(sub);


}

function Multiply(){
    var no1=Number($("#num1").val());
    var no2=Number($("#num2").val());
    var result =no1*no2; 
 	$("#result2").html(result);


}

function Divide(){
    var no1=Number($("#num1").val());
    var no2=Number($("#num2").val());
    var result =no1/no2; 
 	$("#result2").html(result);

}
