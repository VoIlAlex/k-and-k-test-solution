function relocateTo(currentPath, targetPath = "") {
	//TODO: figure out how ot import modules
	let newLocation = window.location.href.replace('/' + currentPath + '/', '/' + targetPath + '/');
	newLocation = newLocation.split('?')[0];
	window.location.href = newLocation;
}

function authenticateUser() {
	let loginForm = document.getElementById("login-form");

	// Get information from the form
	let email = loginForm.elements["email"].value;
	let password = loginForm.elements["password"].value;

	// Validation
	if (email == "") {
		alert("Please, provide your email!");
		return false;
	}
	if (password == "") {
		alert("Please, provide your password!");
		return false;
	}

	// Authenticate user
	let userToAuthenticate = null;
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			let element = localStorage.getItem(key);
			element = JSON.parse(element);
			if (element.email === email) {
				userToAuthenticate = element;
			}
			if (element.isAuth === true) {
				element.isAuth = false;
				element = JSON.stringify(element);
				localStorage.setItem(key, element);
			}
		}
	}

	if (userToAuthenticate === null) {
		alert("Couldn't find the user with email " + email);
		return false;
	}
	if (userToAuthenticate.password === password) {
		userToAuthenticate.isAuth = true;
		email = userToAuthenticate.email;
		userToAuthenticate = JSON.stringify(userToAuthenticate);
		localStorage.setItem(email, userToAuthenticate);
		relocateTo('login', '');
		return false;
	}

	alert("Login or password is incorrect!");
	return false;
}