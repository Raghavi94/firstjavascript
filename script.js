var database=[
{
	username:"Raghavi",
	password:"123"
}
];
var newsFeed=[
{
	username:"Bhuvi",
	timeline:"Happiness is bliss!"
},
{
	username:"Srini",
	timeline:"Hardwork works!"
}
];
var usernameprompt = prompt("What's your username?");
var passwordprompt = prompt("What's your password?");

function signIn(user,pass){
	if(user === database[0].username && pass === database[0].password)
	{
		console.log(newsFeed);
	}
	else
	{
		alert("Sorry,wrong username and password!");
	}
}
signIn(usernameprompt,passwordprompt);