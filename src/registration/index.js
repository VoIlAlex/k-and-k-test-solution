function relocateTo(currentPath, targetPath = "") {
	//TODO: figure out how ot import modules
	let newLocation = window.location.href.replace('/' + currentPath + '/', '/' + targetPath + '/');
	newLocation = newLocation.split('?')[0];
	window.location.href = newLocation;
}

function logout() {
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			let element = localStorage.getItem(key);
			element = JSON.parse(element);
			if (element.isAuth === true) {
				element.isAuth = false;
				element = JSON.stringify(element)
				localStorage.setItem(key, element)
				break;
			}
		}
	}
}

function onRegister() {
	let regForm = document.getElementById("registration-form");

	// Get information from the form
	let email = regForm.elements["email"].value;
	let firstName = regForm.elements["first-name"].value;
	let lastName = regForm.elements["last-name"].value;
	let password = regForm.elements["password"].value;
	let passwordAgain = regForm.elements["password-again"].value;

	// Validation
	if (email == "") {
		alert("Please, provide your email!");
		return false;
	} else if (localStorage.getItem(email) !== null) {
		alert("Please, provide unique email!");
		return false;
	}
	if (firstName == "") {
		alert("Please, provide your first name!");
		return false;
	}
	if (lastName == "") {
		alert("Please, provide your last name!");
		return false;
	}
	if (password == "") {
		alert("Please, provide your password!");
		return false;
	}
	if (password != passwordAgain) {
		alert("Please, provide your email!");
		return false;
	}

	// Save to the local storage
	userObject = {
		email: email,
		firstName: firstName,
		lastName: lastName,
		password: password,
		isAuth: false
	};

	userObjectJSON = JSON.stringify(userObject)

	localStorage.setItem(email, userObjectJSON);
	logout();
	relocateTo('registration', 'successfulRegistration');

	return false;
}