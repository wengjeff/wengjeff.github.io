//This is all the function for add, minus, mutliple and divide!!!
//add function
var add = function(){
	var number = $('.numberWantToAdd').val();
	var numberBeAdd = $('.numberToBeAdd').val();
	var answer = parseFloat(number) + parseFloat(numberBeAdd);

	$('.answer').html(answer);
}

//minus function
var minus = function(){
	var number = $('.numberWantToMinus').val();
	var numberBeMinus = $('.numberToBeMinus').val();
	var answer = parseFloat(number) - parseFloat(numberBeMinus);

	$('.answer').html(answer);
}

//multiple function
var multiple = function(){
	var number = $('.numberWantToMultiple').val();
	var numberBeMultiple = $('.numberToBeMultiple').val();
	var answer = parseFloat(number) * parseFloat(numberBeMultiple);

	$('.answer').html(answer);
}

//Divide function
var divide = function(){
	var number = $('.numberWantToDivide').val();
	var numberBeDivide = $('.numberToBeDivide').val();
	var answer = parseFloat(number) / parseFloat(numberBeDivide);

	$('.answer').html(answer);
}


//This is in add.html for the add formula
$('.numberWantToAdd').keyup(add);
$('.numberToBeAdd').focus(add).keyup(add);

//This is in minus.html for the minus formula
$('.numberWantToMinus').keyup(minus);
$('.numberToBeMinus').focus(minus).keyup(minus);

//This is in multiple.html for the multiple formula
$('.numberWantToMultiple').keyup(multiple);
$('.numberToBeMultiple').focus(multiple).keyup(multiple);

//This is in divide.html for the divide formula
$('.numberWantToDivide').keyup(divide);
$('.numberToBeDivide').focus(divide).keyup(divide);


//Drop down menu
$('.drop-down-title').click(function(){
	$('.drop-down-content').slideToggle(200);
})













	
