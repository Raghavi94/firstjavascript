var database=[
{
	username:"Raghavi",
	password:"123"
},
{
	username:"Shreya",
	password:"555"
},
{
	username:"Swetha",
	password:"001"
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

function isUserValid(username,password){
	for(var i=0; i < database.length; i++){
		if(database[i].username === username && database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username,password){
	if(isUserValid(username,password))
	{
		console.log(newsFeed);
	}
	else
	{
		alert("Sorry,wrong username and password!");
	}
}
signIn(usernameprompt,passwordprompt);
