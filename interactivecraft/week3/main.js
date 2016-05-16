
var rent;
var income;
var percentage;

function rentCalc(){
	rent = document.getElementById("rent").value;
	income = document.getElementById("income").value;
	percentage = rent / income * 100;
	alert(percentage + " percentage of your $" + income + " in income is spent on rent");

	//alert("The rent is $" + rent + "and your income is $" + income);
	rightRent();

}

function rightRent (){
	if (percentage > 35) {
		alert("You are paying too much rent!");
	} else {
		alert("Your rent income ratio is just right!");
	}
}

	//esta función hace una coparación 


function myAlert(){
    alert('Hello, the button worked!');

}

function fillText(){
	document.getElementById('test').innerHTML = "<br> I just added some interactivity to my page!<br>";
}


