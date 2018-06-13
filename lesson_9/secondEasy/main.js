let age = document.getElementById('age');

function User(surname, name) {
	this.surname = surname;
	this.name = name;
	this.a = age.value;
	this.func = function(surname, name) {
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.a);
	} 
}
let ivan = new User("Vakhnenko","Stas");

ivan.func();